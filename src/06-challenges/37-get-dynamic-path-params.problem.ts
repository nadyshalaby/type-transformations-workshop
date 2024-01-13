import { Equal, Expect } from "../helpers/type-utils";

import { Split } from "ts-toolbelt/out/String/Split";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<T extends string> = {
  [K in keyof Split<T, "/"> as Split<T, "/">[K] extends `:${infer P}`
    ? P
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
