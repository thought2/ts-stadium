---
title: util.ts
nav_order: 4
parent: Modules
---

## util overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [GetData (type alias)](#getdata-type-alias)
  - [MkTagged (type alias)](#mktagged-type-alias)
  - [MkUnion (type alias)](#mkunion-type-alias)
  - [TagData (type alias)](#tagdata-type-alias)
  - [ctor](#ctor)
  - [getData](#getdata)

---

# utils

## GetData (type alias)

**Signature**

```ts
export type GetData<T> = Omit<T, 'tag'>
```

Added in v1.0.0

## MkTagged (type alias)

**Signature**

```ts
export type MkTagged<T> = { [key in keyof T]: TagData<key, T[key]> }
```

Added in v1.0.0

## MkUnion (type alias)

**Signature**

```ts
export type MkUnion<T> = T[keyof T]
```

Added in v1.0.0

## TagData (type alias)

**Signature**

```ts
export type TagData<tag, data> = { tag: tag } & data
```

Added in v1.0.0

## ctor

**Signature**

```ts
export declare const ctor: <Tag extends string | number | symbol, Data>(tag: Tag, data: Data) => { tag: Tag } & Data
```

Added in v1.0.0

## getData

**Signature**

```ts
export declare const getData: <Data>(obj: TagData<any, Data>) => Data
```

Added in v1.0.0
