"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// merge.test.ts
const globals_1 = require("@jest/globals");
const merge_1 = require("./merge");
(0, globals_1.describe)('merge function', () => {
    (0, globals_1.test)('should merge three sorted collections into one sorted collection', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [6, 4, 2];
        const expected = [1, 2, 2, 3, 4, 4, 5, 6, 6];
        const result = (0, merge_1.merge)(collection1, collection2, collection3);
        (0, globals_1.expect)(result).toEqual(expected);
    });
    (0, globals_1.test)('should handle empty collections', () => {
        (0, globals_1.expect)((0, merge_1.merge)([], [], [])).toEqual([]);
        (0, globals_1.expect)((0, merge_1.merge)([1], [], [])).toEqual([1]);
    });
    (0, globals_1.test)('should handle duplicates correctly', () => {
        const collection1 = [1, 1, 3];
        const collection2 = [2, 2, 4];
        const collection3 = [5, 5, 5];
        const expected = [1, 1, 2, 2, 3, 4, 5, 5, 5];
        const result = (0, merge_1.merge)(collection1, collection2, collection3);
        (0, globals_1.expect)(result).toEqual(expected);
    });
});
