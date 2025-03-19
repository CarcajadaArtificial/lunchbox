import { dirname, join } from '@std/path';
import { ensureDir } from '@std/fs';

export interface FileEntry {
  path: string;
  content: Uint8Array<ArrayBuffer>;
}

export async function collectFiles(
  dir: string,
  except: string[] = [],
): Promise<FileEntry[]> {
  const files: FileEntry[] = [];

  for await (const entry of Deno.readDir(dir)) {
    const entityDirectory = join(dir, entry.name);
    if (except.includes(entry.name)) continue;
    else if (entry.isDirectory) {
      files.push(...(await collectFiles(entityDirectory, except)));
    } else {
      files.push({
        path: entityDirectory,
        content: await Deno.readFile(entityDirectory),
      });
    }
  }
  return files;
}

export async function initFiles(
  targetDir: string,
  spliceStart: number,
  files: FileEntry[],
) {
  await Promise.all(
    files.map(async (file) => {
      const filePath = join(
        targetDir,
        ...file.path.split('/').splice(spliceStart),
      );
      await Deno.mkdir(dirname(filePath), { recursive: true });
      await Deno.writeFile(filePath, file.content);
    }),
  );
}

export async function removeFiles(...files: string[]) {
  for (const file of files) {
    try {
      await Deno.remove(file, { recursive: true });
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        console.log(`Entity ${file} already removed.`);
      } else {
        console.error(error);
      }
    }
  }
}

export async function createFetchSources(
  url: string,
  dir: string,
  except: string = '',
) {
  const fetchTargets: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    if (entry.name === except) continue;
    else if (entry.isDirectory) {
      fetchTargets.push(
        ...await createFetchSources(
          url + entry.name + '/',
          dir + '/' + entry.name,
          except,
        ),
      );
    } else {
      fetchTargets.push(url + entry.name);
    }
  }
  return fetchTargets;
}

export async function initFromUrl(
  url: string,
  separator: string,
  targetDir: string,
) {
  const relativePath = url.split(separator)[1];
  if (!relativePath) return;

  const fullPath = join(targetDir, relativePath);
  await ensureDir(dirname(fullPath));
  const fileResponse = await fetch(url);
  const fileContent = await fileResponse.text();

  await Deno.writeTextFile(fullPath, fileContent);
}
