---
title: WithEncode.ts
nav_order: 6
parent: Modules
---

## WithEncode overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [array](#array)
  - [number](#number)
- [model](#model)
  - [Json (type alias)](#json-type-alias)
  - [WithEncode (type alias)](#withencode-type-alias)
- [utils](#utils)
  - [default](#default)

---

# constructors

## array

**Signature**

```ts
export declare const array: <T>(opts: {}, of: WithEncode<T>) => WithEncode<T[]>
```

Added in v1.0.0

## number

**Signature**

```ts
export declare const number: (opts?: {}) => WithEncode<number>
```

Added in v1.0.0

# model

## Json (type alias)

**Signature**

```ts
export type Json = number | Array<Json>
```

Added in v1.0.0

## WithEncode (type alias)

**Signature**

```ts
export type WithEncode<T> = { encode: (value: T) => Json }
```

Added in v1.0.0

# utils

## default

**Signature**

```ts
export declare const default: any
```

Added in v1.0.0
