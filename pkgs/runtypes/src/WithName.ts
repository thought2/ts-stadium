/**
 * @since 1.0.0
 */

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 1.0.0
 */
export type WithName = { name?: string };

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 1.0.0
 */
export const number = ({ name }: { name?: string }): WithName => ({ name });

/**
 * @category constructors
 * @since 1.0.0
 */
export const array = ({ name }: { name?: string }): WithName => ({ name });

export {
  /**
   * @since 1.0.0
   */
  WithName as default,
};
