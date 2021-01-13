/**
 * @since 1.0.0
 */
import WithAST, * as withAST from "./WithAST";
import WithType, * as withType from "./WithType";
import WithName, * as withName from "./WithName";
import WithRandomIO, * as withRandomIO from "./WithRandomIO";
import { combArray, combNumber } from "./combinators";

const URI = "RunType";

type URI = typeof URI;

/**
 * @category model
 * @since 1.0.0
 */
export type RunType<T> = WithType<T> & WithName & WithAST & WithRandomIO<T>;

declare module "fp-ts/HKT" {
  interface URItoKind<A> {
    readonly [URI]: RunType<A>;
  }
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const number = combNumber<URI>()(
  withType.number,
  withName.number,
  withAST.number,
  withRandomIO.number
);

/**
 * @category constructors
 * @since 1.0.0
 */
export const array = combArray<URI>()(
  withType.array,
  withName.array,
  withAST.array,
  withRandomIO.array
);
