/**
 * @since 1.0.0
 */
import { Kind, URIS } from "fp-ts/HKT";
import * as HKT from "fp-ts/HKT";

type GetOpts<T> = {};

type GetA<F extends URIS, T> = T extends Kind<F, infer x> ? x : never;

/**
 * @since 1.0.0
 */
export const combArray = <F extends HKT.URIS>() => <Fns extends any[]>(
  ...fns: Fns
) => <W extends Kind<F, any>, T>(
  opts: GetOpts<Fns>,
  w: W
): Kind<F, Array<GetA<F, W>>> =>
  fns.reduce((acc, fn) => ({ ...acc, ...fn(opts, w) }), {});

/**
 * @since 1.0.0
 */
export const combNumber = <F extends URIS>() => <Fns extends any[]>(
  ...fns: Fns
) => (opts: GetOpts<Fns>): Kind<F, number> =>
  fns.reduce((acc, fn) => ({ ...acc, ...fn(opts) }), {});
