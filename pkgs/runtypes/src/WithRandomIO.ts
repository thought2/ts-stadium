/**
 * @since 1.0.0
 */
import { WithName } from "WithName";
import { MkUnion, MkTagged, ctor, getData, GetData } from "./util";
import { IO, io } from "fp-ts/IO";
import { pipe } from "fp-ts/lib/function";
import { randomRange } from "fp-ts/Random";
import { array as A, io as I } from "fp-ts";

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 1.0.0
 */
export type Json = number | Array<Json>;

/**
 * @category model
 * @since 1.0.0
 */
export type WithRandomIO<T> = { generate: ({ size: bigint }) => IO<T> };

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 1.0.0
 */
export const number = (opts?: {}): WithRandomIO<number> => ({
  generate: () => () => Math.random(),
});

/**
 * @category constructors
 * @since 1.0.0
 */
export const array = <T>(
  opts: {},
  of: WithRandomIO<T>
): WithRandomIO<Array<T>> => ({
  generate: (config) =>
    pipe(
      randomRange(0, config.size),
      I.map((n) => A.replicate(n, 0)),
      I.chain(A.traverse(io)(() => of.generate(config)))
    ),
});

export {
  /**
   * @since 1.0.0
   */
  WithRandomIO as default,
};
