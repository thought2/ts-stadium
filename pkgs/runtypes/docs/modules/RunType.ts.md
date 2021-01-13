---
title: RunType.ts
nav_order: 3
parent: Modules
---

## RunType overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [array](#array)
  - [number](#number)
- [model](#model)
  - [RunType (type alias)](#runtype-type-alias)

---

# constructors

## array

**Signature**

```ts
export declare const array: <W, T>(opts: {}, w: W) => any
```

Added in v1.0.0

## number

**Signature**

```ts
export declare const number: (opts: {}) => any
```

Added in v1.0.0

# model

## RunType (type alias)

**Signature**

```ts
export type RunType<T> = WithType<T> & WithName & WithAST & WithRandomIO<T>
```

Added in v1.0.0
