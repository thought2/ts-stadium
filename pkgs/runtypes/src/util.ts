export type MkTagged<T> = { [key in keyof T]: TagData<key, T[key]> };

export type TagData<tag, data> = { tag: tag } & data;

export type GetData<T> = Omit<T, "tag">;

export type MkUnion<T> = T[keyof T];

export const ctor = <Tag extends number | string | symbol, Data>(
  tag: Tag,
  data: Data
) => ({ tag, ...data });

export const getData = <Data>(obj: TagData<any, Data>): Data => {
  const copy = {
    ...obj,
  };
  delete copy["tag"];
  return copy;
};
