import { Validators } from "@components/client/Form";

import { STORE_CONSTANT } from "@utils/store/constants";
import { Store } from "@utils/store/store";

import { ERROR } from "@constants/error";

describe("Class - Store", () => {
  const validators = {
    firstName: "Required",
    lastName: "Required",
    email: "Required",
  };

  describe("validator store", () => {
    const key = { firstName: "Required" };

    describe("setters", () => {
      /**
       * @method set
       */
      describe("set", () => {
        test("should set a single validator key", () => {
          const validator = new Store<Validators>();

          validator.set("firstName", key);

          const result = validator.get("firstName");

          expect(result).toBe(key);
        });

        test("should set overriding existing validator key", () => {
          const validator = new Store<Validators>();
          const overrideKey = { firstName: "Override" };

          validator.set("firstName", key);
          validator.set("firstName", overrideKey);

          const result = validator.get("firstName");

          expect(result).toBe(overrideKey);
        });

        describe("should throw error", () => {
          test("if missing `key` param", () => {
            const validator = new Store<Validators>();

            expect.assertions(2);

            try {
              // @ts-ignore
              validator.set(key);
            } catch (error) {
              expect(error).toBeInstanceOf(Error);
              expect(error).toHaveProperty(
                "message",
                `set ${ERROR.REQUIRES_PARAMS} ${STORE_CONSTANT.SET_PARAMS}`
              );
            }
          });

          test("if missing `value` param", () => {
            const validator = new Store<Validators>();

            expect.assertions(2);

            try {
              // @ts-ignore
              validator.set("firstName");
            } catch (error) {
              expect(error).toBeInstanceOf(Error);
              expect(error).toHaveProperty(
                "message",
                `set ${ERROR.REQUIRES_PARAMS} ${STORE_CONSTANT.SET_PARAMS}`
              );
            }
          });
        });
      });

      /**
       * @method safeSet
       */
      describe("safeSet", () => {
        test("should set a single validator key", () => {
          const validator = new Store<Validators>();

          validator.set("firstName", key);

          const result = validator.get("firstName");

          expect(result).toBe(key);
        });

        describe("should throw error", () => {
          test("if missing `key` param", () => {
            const validator = new Store<Validators>();

            expect.assertions(2);

            try {
              // @ts-ignore
              validator.safeSet(key);
            } catch (error) {
              expect(error).toBeInstanceOf(Error);
              expect(error).toHaveProperty(
                "message",
                `safeSet ${ERROR.REQUIRES_PARAMS} ${STORE_CONSTANT.SET_PARAMS}`
              );
            }
          });

          test("if missing `value` param", () => {
            const validator = new Store<Validators>();

            expect.assertions(2);

            try {
              // @ts-ignore
              validator.safeSet("firstName");
            } catch (error) {
              expect(error).toBeInstanceOf(Error);
              expect(error).toHaveProperty(
                "message",
                `safeSet ${ERROR.REQUIRES_PARAMS} ${STORE_CONSTANT.SET_PARAMS}`
              );
            }
          });

          test("if validator key exists", () => {
            const validator = new Store<Validators>();
            const overrideKey = { firstName: "Override" };

            validator.safeSet("firstName", key);

            expect.assertions(2);

            try {
              validator.safeSet("firstName", overrideKey);
            } catch (error) {
              expect(error).toBeInstanceOf(Error);
              expect(error).toHaveProperty(
                "message",
                `safeSet ${ERROR.CANNOT_OVERRIDE} ${STORE_CONSTANT.OVERRIDE_OPTION}`
              );
            }
          });
        });
      });

      /**
       * @method operationalSet
       */
      describe("operationalSet", () => {
        test("should set a single validator key", () => {
          const validator = new Store<Validators>();

          validator.operationalSet(({ getter, setter }) => {
            /**
             * Setting a single key is not the designed use case for this
             * method, this is just a test.
             */
            setter("firstName", key);

            const result = getter("firstName");

            expect(result).toBe(key);
          });
        });

        test("should set multiple validator keys", () => {
          const validator = new Store<Validators>();

          validator.operationalSet(({ setter }) => {
            Object.entries(validators).map((validator) => {
              setter(validator[0], { [validator[0]]: validator[1] });
            });
          });

          console.log(validator.values());
        });
      });
    });
  });
});
