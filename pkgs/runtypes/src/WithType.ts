/**
 * @since 1.0.0
 */

import { ctor, GetData, TagData } from "./util";

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 1.0.0
 */
export type WithType<A> = { type: A };

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @category utils
 * @since 1.0.0
 */
export type GetType<A extends WithType<any>> = A["type"];

// -------------------------------------------------------------------------------------
// primitives
// -------------------------------------------------------------------------------------

/**
 * @category primitives
 * @since 1.0.0
 */
export const string = {} as WithType<string>;

export const number = (opts: {}): WithType<number> => ({ type: {} as number });

export const array = <T>(opts: {}, of: WithType<T>): WithType<Array<T>> => ({
  type: {} as Array<T>,
});

// export const boolean = {} as RunType<boolean>;

// export const null_ = {} as RunType<null>;

// export const undefined_ = {} as RunType<undefined>;

// export const number = {} as RunType<number>;

// export const bigint = {} as RunType<bigint>;

// export const literal = <A extends string | number>(a: A) => ({} as RunType<A>);

// export const tuple = 1; //<A extends string | number>(a: A) => ({} as RunType<A>);

// export const union = 2;

// export const intersection = 3;

// export const array = <A>(a: RunType<A>) => ({} as RunType<Array<A>>);

// export const record = <R extends Record<any, RunType<any>>>(rec: R) =>
//   ({} as RunType<
//     { [key in keyof R]: R[key] extends RunType<infer a> ? a : never }
//   >);

export { WithType as default };
