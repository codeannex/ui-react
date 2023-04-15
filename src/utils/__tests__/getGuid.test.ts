import getGuid from "@utils/getGuid";

describe("utils - getGuid", () => {
  test("should return a string", () => {
    const uid = getGuid();

    expect(typeof uid === "string").toBe(true);
  });
});
