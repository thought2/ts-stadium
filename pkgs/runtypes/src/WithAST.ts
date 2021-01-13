/**
 * @since 1.0.0
 */
import { WithName } from "WithName";
import { MkUnion, MkTagged, ctor, getData, GetData } from "./util";

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 1.0.0
 */
export type MkWithAST = MkTagged<{
  number: { ast: {} };
  array: { ast: { of: WithAST } };
}>;

/**
 * @category model
 * @since 1.0.0
 */
export type WithAST = MkUnion<MkWithAST> & WithName;

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 1.0.0
 */
export const number = (opts?: {}): WithAST => ctor("number", { ast: {} });

/**
 * @category constructors
 * @since 1.0.0
 */
export const array = (opts: {}, of: WithAST): WithAST =>
  ctor("array", { ast: { of: of } });

export {
  /**
   * @since 1.0.0
   */
  WithAST as default,
};

// -------------------------------------------------------------------------------------
// deconstructors
// -------------------------------------------------------------------------------------

/**
 * @category deconstructors
 * @since 1.0.0
 */
export const fold = <Z>(
  branches: { [key in keyof MkWithAST]: (data: GetData<MkWithAST[key]>) => Z }
) => (ast: WithAST): Z => branches[ast.tag](getData(ast) as any);

/**
 * @category deconstructors
 * @since 1.0.0
 */
export const printAST = (node: WithAST): string => {
  switch (node.tag) {
    case "number":
      return "number";
    case "array":
      return `array(${printAST(node.ast.of)})`;
  }
};
