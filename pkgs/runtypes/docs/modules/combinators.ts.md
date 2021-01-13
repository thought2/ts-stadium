---
title: combinators.ts
nav_order: 1
parent: Modules
---

## combinators overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [combArray](#combarray)
  - [combNumber](#combnumber)

---

# utils

## combArray

**Signature**

```ts
export declare const combArray: <
  F extends
    | 'Option'
    | 'ReadonlyRecord'
    | 'Ord'
    | 'Eq'
    | 'IO'
    | 'NonEmptyArray'
    | 'Array'
    | 'Identity'
    | 'Task'
    | 'ReadonlyNonEmptyArray'
    | 'ReadonlyArray'
    | 'Record'
    | 'Tree'
    | 'RunType'
>() => <Fns extends any[]>(
  ...fns: Fns
) => <W extends Kind<F, any>, T>(opts: GetOpts<Fns>, w: W) => Kind<F, GetA<F, W>[]>
```

Added in v1.0.0

## combNumber

**Signature**

```ts
export declare const combNumber: <
  F extends
    | 'Option'
    | 'ReadonlyRecord'
    | 'Ord'
    | 'Eq'
    | 'IO'
    | 'NonEmptyArray'
    | 'Array'
    | 'Identity'
    | 'Task'
    | 'ReadonlyNonEmptyArray'
    | 'ReadonlyArray'
    | 'Record'
    | 'Tree'
    | 'RunType'
>() => <Fns extends any[]>(...fns: Fns) => (opts: GetOpts<Fns>) => Kind<F, number>
```

Added in v1.0.0
