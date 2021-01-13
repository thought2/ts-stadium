import { string } from "WithType";

export type WithName = { name?: string };

export const number = ({ name }: { name?: string }): WithName => ({ name });

export const array = ({ name }: { name?: string }): WithName => ({ name });

export { WithName as default };
