//   ___       _        _
//  |   \ __ _| |_ __ _| |__  __ _ ___ ___
//  | |) / _` |  _/ _` | '_ \/ _` (_-</ -_)
//  |___/\__,_|\__\__,_|_.__/\__,_/__/\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { ulid } from 'https://deno.land/std@0.217.0/ulid/mod.ts';

/**
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * kvIteratorToArray
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * This is a utility function that converts the iterator outputed from DenoKv's list operation to an
 * array of the same type.
 *
 * @todo Move to the lunchbox utility function module.
 *
 * @param kvIterator The output of DenoKv list operations.
 *
 * @returns An array equivalent to the Kv list.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
export async function kvIteratorToArray<T>(
  kvIterator: Deno.KvListIterator<T>,
): Promise<Deno.KvEntry<T>[]> {
  const kvEntryArray = [];
  for await (const currentValue of kvIterator) {
    kvEntryArray.push(currentValue);
  }
  return kvEntryArray;
}

/** */
export class Crud<modEntry> {
  /** */
  kv: Deno.Kv;

  /** */
  prefix: string[];

  /**
   * @param kv
   * @param prefix
   */
  constructor(kv: Deno.Kv, prefix: string[]) {
    this.kv = kv;
    this.prefix = prefix;
  }

  /**
   * @param entry
   */
  async add(entry: modEntry) {
    const key = [...this.prefix, ulid()];
    const op = this.kv
      .atomic()
      .check({ key, versionstamp: null })
      .set(key, entry);
    const res = await op.commit();
    if (!res.ok) throw new Error('Failed to create entry.');
  }

  /**
   * @param ids
   * @returns
   */
  async get(...ids: string[]) {
    return await this.kv.getMany<modEntry[]>(
      ids.map((id) => [...this.prefix, id]),
    );
  }

  /**
   * @returns
   */
  async list() {
    return await kvIteratorToArray<modEntry>(
      await this.kv.list<modEntry>({ prefix: this.prefix }),
    );
  }

  /**
   * @param id
   * @param entry
   */
  async edit(id: string, entry: modEntry) {
    const key = [...this.prefix, id];
    const op = this.kv.atomic().set(key, entry);
    const res = await op.commit();
    if (!res.ok) throw new Error('Failed to edit chip.');
  }
}
