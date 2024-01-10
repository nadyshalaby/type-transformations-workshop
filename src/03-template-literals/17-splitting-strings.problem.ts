import { Equal, Expect } from "../helpers/type-utils";

// Might come in handy!
import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html


type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
