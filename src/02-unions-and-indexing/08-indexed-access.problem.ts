import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

export type StringType = Pick<typeof fakeDataDefaults, "String">["String"];
export type IntType = Pick<typeof fakeDataDefaults, "Int">["Int"];
export type FloatType = Pick<typeof fakeDataDefaults, "Float">["Float"];
export type BooleanType = Pick<typeof fakeDataDefaults, "Boolean">["Boolean"];
export type IDType = Pick<typeof fakeDataDefaults, "ID">["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
