---
title: WithType.ts
nav_order: 9
parent: Modules
---

## WithType overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [array](#array)
  - [number](#number)
  - [string](#string)
- [model](#model)
  - [WithType (type alias)](#withtype-type-alias)
- [utils](#utils)
  - [GetType (type alias)](#gettype-type-alias)
  - [default](#default)

---

# constructors

## array

**Signature**

```ts
export declare const array: <T>(opts: {}, of: WithType<T>) => WithType<T[]>
```

Added in v1.0.0

## number

**Signature**

```ts
export declare const number: (opts: {}) => WithType<number>
```

Added in v1.0.0

## string

**Signature**

```ts
export declare const string: WithType<string>
```

Added in v1.0.0

# model

## WithType (type alias)

**Signature**

```ts
export type WithType<A> = { type: A }
```

Added in v1.0.0

# utils

## GetType (type alias)

**Signature**

```ts
export type GetType<A extends WithType<any>> = A['type']
```

Added in v1.0.0

## default

**Signature**

```ts
export declare const default: any
```

Added in v1.0.0
