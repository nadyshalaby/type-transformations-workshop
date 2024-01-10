import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return 1;
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, number>>];
