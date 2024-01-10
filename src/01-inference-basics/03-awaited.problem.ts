import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = ReturnType<typeof getUser>;
type AwaitedReturnType = Awaited<ReturnValue>;

type tests = [
  Expect<Equal<AwaitedReturnType, { id: string; name: string; email: string }>>,
];
