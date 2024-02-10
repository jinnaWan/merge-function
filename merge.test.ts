// merge.test.ts
import { describe, expect, test } from '@jest/globals';
import { merge } from './merge';

describe('merge function', () => {
  test('should merge three sorted collections into one sorted collection', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [6, 4, 2];
    const expected = [1, 2, 2, 3, 4, 4, 5, 6, 6];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expected);
  });

  test('should handle empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [])).toEqual([1]);
  });

  test('should handle duplicates correctly', () => {
    const collection1 = [1, 1, 3];
    const collection2 = [2, 2, 4];
    const collection3 = [5, 5, 5];
    const expected = [1, 1, 2, 2, 3, 4, 5, 5, 5];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expected);
  });
});
