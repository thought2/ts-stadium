/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 */
export type MkTagged<T> = { [key in keyof T]: TagData<key, T[key]> };

/**
 * @since 1.0.0
 */
export type TagData<tag, data> = { tag: tag } & data;

/**
 * @since 1.0.0
 */
export type GetData<T> = Omit<T, "tag">;

/**
 * @since 1.0.0
 */
export type MkUnion<T> = T[keyof T];

/**
 * @since 1.0.0
 */
export const ctor = <Tag extends number | string | symbol, Data>(
  tag: Tag,
  data: Data
) => ({ tag, ...data });

/**
 * @since 1.0.0
 */
export const getData = <Data>(obj: TagData<any, Data>): Data => {
  const copy = {
    ...obj,
  };
  delete copy["tag"];
  return copy;
};
