import WithAST, * as withAST from "./WithAST";
import WithType, * as withType from "./WithType";
import WithName, * as withName from "./WithName";
import WithRandomIO, * as withRandomIO from "./WithRandomIO";
import * as HKT from "fp-ts/HKT";
import { combArray, combNumber } from "./combinators";

const URI = "RunType";

type URI = typeof URI;

export type RunType<T> = WithType<T> & WithName & WithAST & WithRandomIO<T>;

export type RunTypeHKT<T> = HKT.HKT<URI, T>;

declare module "fp-ts/HKT" {
  interface URItoKind<A> {
    readonly [URI]: RunType<A>;
  }
}

export const number = combNumber<URI>()(
  withType.number,
  withName.number,
  withAST.number,
  withRandomIO.number
);

export const array = combArray<URI>()(
  withType.array,
  withName.array,
  withAST.array,
  withRandomIO.array
);
