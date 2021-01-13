/**
 * @since 1.0.0
 */

import { WithName } from "WithName";
import { MkUnion, MkTagged, ctor, getData, GetData } from "./util";

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

export type Json = number | Array<Json>;

/**
 * @category model
 * @since 1.0.0
 */
export type WithEncode<T> = { encode: (value: T) => Json };

// export const fold = <Z>(
//   branches: {
//     [key in keyof MkWithEncode]: (data: GetData<MkWithEncode[key]>) => Z;
//   }
// ) => (encode: WithEncode): Z => branches[encode.tag](getData(encode) as any);

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 1.0.0
 */
export const number = (opts?: {}): WithEncode<number> => ({ encode: (n) => n });

/**
 * @category constructors
 * @since 1.0.0
 */
export const array = <T>(
  opts: {},
  of: WithEncode<T>
): WithEncode<Array<T>> => ({ encode: (xs) => xs.map((x) => of.encode(x)) });

export { WithEncode as default };
