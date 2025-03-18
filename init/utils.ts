import { dirname, join } from '@std/path';

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
