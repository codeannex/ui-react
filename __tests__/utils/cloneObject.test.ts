import cloneObject from "@utils/cloneObject";

describe("utils - cloneObject", () => {
  describe("should clone type", () => {
    test("string", () => {
      const data = { foo: "foo" };

      const clone = cloneObject(data);

      expect(cloneObject(data)).toEqual(clone);
    });

    test("number", () => {
      const data = { foo: 19 };

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });

    test("array", () => {
      const data = { foo: ["1", "2", "3"] };

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });

    test("date", () => {
      const data = { foo: new Date("2020-10-15") };

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });

    test("set", () => {
      const data = { foo: new Set(["1", "2", "3"]) };

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });

    test("map", () => {
      const data = {
        foo: new Map([
          [1, "one"],
          [2, "two"],
          [3, "three"],
        ]),
      };

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });

    test("function", () => {
      const data = () => 19 + 19;

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });
  });

  describe("should clone deep", () => {
    test("", () => {
      const data = {
        test: {
          foo1: "foo",
          foo2: 19,
          foo3: ["1", "2", "3"],
          foo4: new Date("2020-10-15"),
          foo5: new Set(["1", "2", "3"]),
          foo6: new Map([
            [1, "one"],
            [2, "two"],
            [3, "three"],
          ]),
          deep: {
            foo1: "foo",
            foo2: 19,
            foo3: ["1", "2", "3"],
            foo4: new Date("2020-10-15"),
            foo5: new Set(["1", "2", "3"]),
            foo6: new Map([
              [1, "one"],
              [2, "two"],
              [3, "three"],
            ]),
          },
        },
      };

      const copy = cloneObject(data);

      expect(cloneObject(data)).toEqual(copy);
    });
  });
});
