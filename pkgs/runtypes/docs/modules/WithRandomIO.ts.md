---
title: WithRandomIO.ts
nav_order: 8
parent: Modules
---

## WithRandomIO overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [array](#array)
  - [number](#number)
- [model](#model)
  - [Json (type alias)](#json-type-alias)
  - [WithRandomIO (type alias)](#withrandomio-type-alias)
- [utils](#utils)
  - [default](#default)

---

# constructors

## array

**Signature**

```ts
export declare const array: <T>(opts: {}, of: WithRandomIO<T>) => WithRandomIO<T[]>
```

Added in v1.0.0

## number

**Signature**

```ts
export declare const number: (opts?: {}) => WithRandomIO<number>
```

Added in v1.0.0

# model

## Json (type alias)

**Signature**

```ts
export type Json = number | Array<Json>
```

Added in v1.0.0

## WithRandomIO (type alias)

**Signature**

```ts
export type WithRandomIO<T> = { generate: ({ size: bigint }) => IO<T> }
```

Added in v1.0.0

# utils

## default

**Signature**

```ts
export declare const default: any
```

Added in v1.0.0
