import {
  assert,
  assert as typeAssert,
  IsExact,
  Has,
} from "conditional-type-checks";
import WithAST, * as withAST from "WithAST";
import { identity, pipe } from "fp-ts/function";
import { deepStrictEqual } from "assert";

typeAssert<Has<WithAST, withAST.MkWithAST["number"]>>(true);

const matchers = {
  number: () => {},
  array: () => {},
};

describe("ast", () => {
  describe("constructors", () => {
    describe("number", () => {
      it("can be created and matched on", () => {
        const argsExpected = { ast: {} };

        expect(() =>
          pipe(
            withAST.number(argsExpected),
            withAST.fold({
              ...matchers,
              number: (argsActual) => deepStrictEqual(argsActual, argsExpected),
            })
          )
        ).not.toThrow();
      });
    });

    describe("array", () => {
      it("can be created and matched on", () => {
        const argsExpected = { ast: { of: withAST.number() } };

        expect(() =>
          pipe(
            withAST.array(argsExpected, argsExpected.ast.of),
            withAST.fold({
              ...matchers,
              array: (argsActual) => deepStrictEqual(argsActual, argsExpected),
            })
          )
        ).not.toThrow();
      });
    });
  });
});
