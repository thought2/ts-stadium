---
title: WithAST.ts
nav_order: 5
parent: Modules
---

## WithAST overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [array](#array)
  - [number](#number)
- [deconstructors](#deconstructors)
  - [fold](#fold)
  - [printAST](#printast)
- [model](#model)
  - [MkWithAST (type alias)](#mkwithast-type-alias)
  - [WithAST (type alias)](#withast-type-alias)
- [utils](#utils)
  - [default](#default)

---

# constructors

## array

**Signature**

```ts
export declare const array: (opts: {}, of: any) => any
```

Added in v1.0.0

## number

**Signature**

```ts
export declare const number: (opts?: {}) => any
```

Added in v1.0.0

# deconstructors

## fold

**Signature**

```ts
export declare const fold: <Z>(branches: {
  number: (data: Pick<TagData<'number', { ast: {} }>, 'ast'>) => Z
  array: (data: Pick<TagData<'array', { ast: { of: any } }>, 'ast'>) => Z
}) => (ast: any) => Z
```

Added in v1.0.0

## printAST

**Signature**

```ts
export declare const printAST: (node: any) => string
```

Added in v1.0.0

# model

## MkWithAST (type alias)

**Signature**

```ts
export type MkWithAST = MkTagged<{
  number: { ast: {} }
  array: { ast: { of: WithAST } }
}>
```

Added in v1.0.0

## WithAST (type alias)

**Signature**

```ts
export type WithAST = MkUnion<MkWithAST> & WithName
```

Added in v1.0.0

# utils

## default

**Signature**

```ts
export declare const default: any
```

Added in v1.0.0
