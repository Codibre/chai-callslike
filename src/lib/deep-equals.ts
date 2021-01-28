import { match } from './match';
import { mustGoDeep } from './must-go-deep';
import { compareDeep } from './compare-deep';

export function deepEquals(actual: unknown, expected: unknown): string {
  const references = new Set<unknown>();

  if (!mustGoDeep(actual, expected, references)) {
    return match(actual, expected);
  }

  const result = compareDeep(actual, expected, '  ', references);

  return result ? `{${result}\n}` : '';
}
