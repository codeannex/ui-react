import { ERROR, METHOD, METHOD_PARAM, PARAM_TYPE, STORE_CONSTANT } from "@utils/store/constants";
import { Store } from "@utils/store/store";

/**
 * Store class is a generic class used to store and track
 * data. Store contains a variety of getters and setters
 * for storing and handling data as well as publishers and
 * subscribers for tracking changes.
 *
 * Tests simulate the use case of storing data for the purpose
 * of validation, howerver the theme of validation is not specific
 * to this class and could have been anything.
 */
describe("Class - Store", () => {
  const validators = {
    firstName: "Required",
    lastName: "Required",
    email: "Required",
  };

  describe("validator store", () => {
    const key = { firstName: "Required" };

    /**
     * @method set
     */
    describe("set", () => {
      test("should set a single store key", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);

        const result = validator.get("firstName");

        expect(result).toBe(key);
      });

      test("should set overriding existing store key", () => {
        const validator = new Store<any>();
        const overrideKey = { firstName: "Override" };

        validator.set("firstName", key);
        validator.set("firstName", overrideKey);

        const result = validator.get("firstName");

        expect(result).toBe(overrideKey);
      });

      describe("should throw error", () => {
        test("if missing `key` parameter", () => {
          const validator = new Store<any>();

          expect.assertions(2);

          try {
            // @ts-ignore
            validator.set(key);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.SET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.SET_PARAM}`
            );
          }
        });

        test("if missing `value` parameter", () => {
          const validator = new Store<any>();

          expect.assertions(2);

          try {
            // @ts-ignore
            validator.set("firstName");
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.SET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.SET_PARAM}`
            );
          }
        });
      });
    });

    /**
     * @method safeSet
     */
    describe("safeSet", () => {
      test("should set a single store key", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);

        const result = validator.get("firstName");

        expect(result).toBe(key);
      });

      describe("should throw error", () => {
        test("if missing `key` parameter", () => {
          const validator = new Store<any>();

          expect.assertions(2);

          try {
            // @ts-ignore
            validator.safeSet(key);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.SET_SAFE} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.SET_PARAM}`
            );
          }
        });

        test("if missing `value` parameter", () => {
          const validator = new Store<any>();

          expect.assertions(2);

          try {
            // @ts-ignore
            validator.safeSet("firstName");
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.SET_SAFE} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.SET_PARAM}`
            );
          }
        });

        test("if store key exists", () => {
          const validator = new Store<any>();
          const overrideKey = { firstName: "Override" };

          validator.safeSet("firstName", key);

          expect.assertions(2);

          try {
            validator.safeSet("firstName", overrideKey);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.SET_SAFE} ${ERROR.CANNOT_OVERRIDE} ${STORE_CONSTANT.OVERRIDE_OPTION}`
            );
          }
        });
      });
    });

    /**
     * @method mapSet
     */
    describe("mapSet", () => {
      test("should set a single store key", () => {
        const validator = new Store<any>();

        validator.mapSet(({ getter, setter }) => {
          /**
           * Setting a single key is not the designed use case for this
           * method, this is just a test.
           */
          setter("firstName", key);

          const result = getter("firstName");

          expect(result).toBe(key);
        });
      });

      test("should set multiple store keys", () => {
        const validator = new Store<any>();

        validator.mapSet(({ setter }) => {
          Object.entries(validators).map((validator) => {
            setter(validator[0], { [validator[0]]: validator[1] });
          });
        });
      });

      test("should set multiple store keys safely", () => {
        const firstNameOverride = { firstName: "SHOULD NOT OVERRIDE" };
        const validators = {
          firstName: firstNameOverride,
          lastName: "Required",
          email: "Required",
        };

        const validator = new Store<any>();

        validator.set("firstName", key);

        validator.mapSet(({ getter, setter }) => {
          Object.entries(validators).map((validator) => {
            const key = Object.values(validator)[0] as string;
            const found = getter(key);

            if (!found) {
              setter(validator[0], { [validator[0]]: validator[1] });
            }
          });
        });

        const result = validator.get("firstName");

        expect(result).not.toBe(firstNameOverride);
        expect(result).toBe(key);
      });
    });

    /**
     * @method get
     */
    describe("get", () => {
      test("should get a single store key", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);

        const result = validator.get("firstName");

        expect(result).toBe(key);
      });

      describe("should throw error", () => {
        test("if missing `key` parameter", () => {
          const validator = new Store<any>();

          validator.set("firstName", key);

          expect.assertions(2);

          try {
            // @ts-ignore
            validator.get();
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.GET_PARAM}`
            );
          }
        });
      });
    });

    /**
     * @method mapGet
     */
    describe("mapGet", () => {
      test("should get a single store key", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);
        validator.set("lastName", { lastName: "Required" });

        /**
         * Getting a single key is not the designed use case for this
         * method, this is just a test.
         *
         * The logic within the callback is not the subject of this test
         * and will not be tested, it is only used to illustrate the
         * concept of running logic within the callback ultimately
         * returning the get value (or any other value defined).
         */
        const result = validator.mapGet("firstName", ({ item, getter, publisher }) => {
          if (item) {
            const lastName = getter("lastName");

            if (lastName) {
              publisher("fullName", { fullName: "Required" });
            }

            return item;
          }

          return undefined;
        });

        expect(result).toBe(key);
      });

      test("should get `undefined` for non-existing key", () => {
        const validator = new Store<any>();

        /**
         * Getting a single key is not the designed use case for this
         * method, this is just a test.
         */
        const result = validator.mapGet("firstName", ({ item }) => {
          if (item) {
            return item;
          }

          return undefined;
        });

        expect(result).toBe(undefined);
      });

      describe("should throw error", () => {
        test("if missing `key` parameter", () => {
          const validator = new Store<any>();

          expect.assertions(2);

          try {
            /**
             * Getting a single key is not the designed use case for this
             * method, this is just a test.
             */
            // @ts-ignore
            validator.mapGet(({ item }) => {
              if (item) {
                return item;
              }

              return undefined;
            });
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.MAP_GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.MAP_GET_PARAM}`
            );
          }
        });

        test("if missing `callback` parameter", () => {
          const validator = new Store<any>();

          expect.assertions(2);

          try {
            /**
             * Getting a single key is not the designed use case for this
             * method, this is just a test.
             */
            // @ts-ignore
            validator.mapGet("firstName");
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.MAP_GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.MAP_GET_PARAM}`
            );
          }
        });
      });
    });

    /**
     * @method has
     */
    describe("has", () => {
      test("should return `true` searching for a single store key", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);
        validator.set("lastName", { lastName: "Required" });

        const result = validator.has("firstName");

        expect(result).toBe(true);
      });

      test("should return `false` searching for a single store key", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);
        validator.set("lastName", { lastName: "Required" });

        const result = validator.has("email");

        expect(result).toBe(false);
      });

      describe("should throw error", () => {
        test("if missing `name` parameter", () => {
          const validator = new Store<any>();

          validator.set("firstName", key);

          expect.assertions(2);

          try {
            /**
             * Getting a single key is not the designed use case for this
             * method, this is just a test.
             */
            // @ts-ignore
            validator.has();
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.MAP_GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.HAS_PARAM}`
            );
          }
        });

        test("if `name` parameter is not a `string`", () => {
          const validator = new Store<any>();

          validator.set("firstName", key);

          expect.assertions(2);

          try {
            /**
             * Getting a single key is not the designed use case for this
             * method, this is just a test.
             */
            // @ts-ignore
            validator.has(19);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty(
              "message",
              `${METHOD.MAP_GET} ${ERROR.INVALID_PARAM_TYPE} ${METHOD_PARAM.HAS_PARAM} ${PARAM_TYPE.REQUIRED_STRING}`
            );
          }
        });
      });
    });

    /**
     * @method size
     */
    describe("size", () => {
      test("should return store size value `2`", () => {
        const validator = new Store<any>();

        validator.set("firstName", key);
        validator.set("lastName", { lastName: "Required" });

        const result = validator.size();

        expect(result).toBe(2);
      });

      test("should return store size value `0`", () => {
        const validator = new Store<any>();

        const result = validator.size();

        expect(result).toBe(0);
      });
    });

    /**
     * @method clear
     */
    describe("clear", () => {
      test("should clear store data", () => {
        const validator = new Store<any>();

        const lastNameKey = { lastName: "Required" };

        validator.set("firstName", key);
        validator.set("lastName", lastNameKey);

        const resultData = validator.size();
        const firstName = validator.get("firstName");
        const lastName = validator.get("lastName");

        expect(resultData).toBe(2);
        expect(firstName).toBe(key);
        expect(lastName).toBe(lastNameKey);

        validator.clear();

        const resultDataCleared = validator.size();
        const firstNameCleared = validator.get("firstName");
        const lastNameCleared = validator.get("lastName");

        expect(resultDataCleared).toBe(0);
        expect(firstNameCleared).toBe(undefined);
        expect(lastNameCleared).toBe(undefined);
      });
    });
  });
});
