import { isJsonComparable } from './is-json-comparable';
import { isMatcher } from './is-matcher';
export function mustGoDeep(a: unknown, e: unknown, references: Set<unknown>) {
  const result =
    isJsonComparable(a) &&
    isJsonComparable(e) &&
    !references.has(a) &&
    !references.has(e);

  if (result) {
    if (!isMatcher(a)) {
      references.add(a);
    }
    if (!isMatcher(e)) {
      references.add(e);
    }
  }

  return result;
}
