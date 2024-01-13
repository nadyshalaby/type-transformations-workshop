import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
    route: "/";
    search: {
      page: string;
      perPage: string;
    };
  }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

type RoutesObject = {
  [K in Route["route"]as K]: Extract<Route, { route: K }> extends { route: K, search: infer S } ? S : never;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >,
];
