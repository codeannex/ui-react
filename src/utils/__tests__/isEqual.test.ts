import deepEqual from "@utils/isEqual";

describe("utils - isEqual", () => {
  describe("should return `false`", () => {
    /**
     * Primitive
     */
    test("when primitive `strings` mismatch`", () => {
      expect(deepEqual("ab", "abc")).toBeFalsy();
    });

    test("when primitive `numbers` mismatch`", () => {
      expect(deepEqual(1, 2)).toBeFalsy();
    });

    test("when primitive `booleans` mismatch`", () => {
      expect(deepEqual(false, true)).toBeFalsy();
    });

    test("when primitive `undefined` has mismatch `string`", () => {
      expect(deepEqual("ab", undefined)).toBeFalsy();
    });

    test("when primitive `undefined` has mismatch `number`", () => {
      expect(deepEqual(1, undefined)).toBeFalsy();
    });

    test("when primitive `undefined` has mismatch `boolean`", () => {
      expect(deepEqual(false, undefined)).toBeFalsy();
    });

    test("when primitive `undefined` has mismatch `null`", () => {
      expect(deepEqual(null, undefined)).toBeFalsy();
    });

    test("when primitive `undefined` has mismatch `array`", () => {
      expect(deepEqual([], undefined)).toBeFalsy();
    });

    test("when primitive `undefined` has mismatch `object`", () => {
      expect(deepEqual({}, undefined)).toBeFalsy();
    });

    test("when primitive `null` has mismatch `string`", () => {
      expect(deepEqual("ab", null)).toBeFalsy();
    });

    test("when primitive `null` has mismatch `number`", () => {
      expect(deepEqual(1, null)).toBeFalsy();
    });

    test("when primitive `null` has mismatch `boolean`", () => {
      expect(deepEqual(false, null)).toBeFalsy();
    });

    test("when primitive `null` has mismatch `array`", () => {
      expect(deepEqual([], null)).toBeFalsy();
    });

    test("when primitive `null` has mismatch `object`", () => {
      expect(deepEqual({}, null)).toBeFalsy();
    });

    /**
     * Array
     */
    test("when `arrays` with 'strings' mismatch", () => {
      expect(deepEqual(["a", "b", "c"], ["a", "b"])).toBeFalsy();
    });

    test("when `arrays` with 'numbers' mismatch", () => {
      expect(deepEqual([1, 2, 3], [1, 2])).toBeFalsy();
    });

    test("when `arrays` with 'booleans' mismatch", () => {
      expect(deepEqual([true, true, true], [true, true, false])).toBeFalsy();
    });

    test("when `arrays` with 'undefined' mismatch", () => {
      expect(
        deepEqual([undefined, undefined, undefined], [undefined, undefined, false])
      ).toBeFalsy();
    });

    test("when `arrays` with 'null' mismatch", () => {
      expect(deepEqual([null, null, null], [null, null, false])).toBeFalsy();
    });

    test("when `arrays` with 'objects' mismatch 1", () => {
      expect(
        deepEqual(
          [
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
          ],
          [
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 2 },
          ]
        )
      ).toBeFalsy();
    });

    test("when `arrays` with 'objects' mismatch 2", () => {
      expect(
        deepEqual(
          [
            { test1: "ab", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
          ],
          [
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 2 },
          ]
        )
      ).toBeFalsy();
    });

    /**
     * Date
     */
    test("when `dates` mismatch", () => {
      expect(deepEqual(new Date(), new Date(1970))).toBeFalsy();
    });

    /**
     * Object
     */
    test("when complex `objects` mismatch", () => {
      expect(
        deepEqual(
          {
            test: "abc",
            nestedArray: [
              { test: "abc" },
              {
                test: "def",
                nestedObject: {
                  nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
                },
              },
              {
                test: "ghi",
                nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
              },
            ],
          },
          {
            test: "abc",
            nestedArray: [
              { test: "abc" },
              {
                test: "def",
                nestedObject: {
                  nestedArray: [{ test: "IM DIFFERENT" }, { test: "def", date: new Date(1970) }],
                },
              },
              {
                test: "ghi",
                nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
              },
            ],
          }
        )
      ).toBeFalsy();
    });
  });

  describe("should return `true`", () => {
    /**
     * Primitive
     */
    test("when primitive `strings` match", () => {
      expect(deepEqual("abc", "abc")).toBeTruthy();
    });

    test("when primitive `numbers` match", () => {
      expect(deepEqual(1, 1)).toBeTruthy();
    });

    test("when primitive `booleans` match", () => {
      expect(deepEqual(true, true)).toBeTruthy();
    });

    test("when primitive `undefined` match", () => {
      expect(deepEqual(undefined, undefined)).toBeTruthy();
    });

    test("when primitive `null` match", () => {
      expect(deepEqual(null, null)).toBeTruthy();
    });

    /**
     * Array
     */
    test("when `arrays` with 'strings' match", () => {
      expect(deepEqual(["a", "b", "c"], ["a", "b", "c"])).toBeTruthy();
    });

    test("when `arrays` with 'numbers' match", () => {
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
    });

    test("when `arrays` with 'booleans' match", () => {
      expect(deepEqual([true, true, false], [true, true, false])).toBeTruthy();
    });

    test("when `arrays` with 'undefined' match", () => {
      expect(
        deepEqual([undefined, undefined, undefined], [undefined, undefined, undefined])
      ).toBeTruthy();
    });

    test("when `arrays` with 'null' match", () => {
      expect(deepEqual([null, null, null], [null, null, null])).toBeTruthy();
    });

    test("when `arrays` with 'objects' mismatch 1", () => {
      expect(
        deepEqual(
          [
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
          ],
          [
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
          ]
        )
      ).toBeTruthy();
    });

    test("when `arrays` with 'objects' mismatch 2", () => {
      expect(
        deepEqual(
          [
            { test1: "ab", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
          ],
          [
            { test1: "ab", test2: 1 },
            { test1: "abc", test2: 1 },
            { test1: "abc", test2: 1 },
          ]
        )
      ).toBeTruthy();
    });

    /**
     * Date
     */
    test("when `dates` mismatch", () => {
      expect(deepEqual(new Date(1970), new Date(1970))).toBeTruthy();
    });

    /**
     * Object
     */
    test("when complex `objects` mismatch", () => {
      expect(
        deepEqual(
          {
            test: "abc",
            nestedArray: [
              { test: "abc" },
              {
                test: "def",
                nestedObject: {
                  nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
                },
              },
              {
                test: "ghi",
                nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
              },
            ],
          },
          {
            test: "abc",
            nestedArray: [
              { test: "abc" },
              {
                test: "def",
                nestedObject: {
                  nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
                },
              },
              {
                test: "ghi",
                nestedArray: [{ test: "abc" }, { test: "def", date: new Date(1970) }],
              },
            ],
          }
        )
      ).toBeTruthy();
    });
  });
});
