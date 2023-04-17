import { isString } from "@utils/index";
import { ERROR, METHOD, METHOD_PARAM, PARAM_TYPE, STORE_CONSTANT } from "@utils/store/constants";

/**
 * @class Store
 *
 * A generic class used to store and track data. Store contains
 * a variety of getters and setters for storing and handling
 * data as well as publishers and subscribers for tracking
 * changes.
 */
export class Store<T> {
  public data: Map<string, T>;

  private events: any;

  constructor() {
    this.data = new Map();
    this.events = {};
  }

  /**
   * Pub/Sub
   */
  public publish<T>(eventName: string, data: T) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn: any) {
        fn(data);
      });
    }
  }

  public subscribe<F>(eventName: string, fn: F) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  public unsubscribe<F>(eventName: string, fn: F) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);

          break;
        }
      }
    }
  }

  /** Setters **/

  /**
   * @method set
   *
   * Map setter sets the key/value heedless of any
   * preexisting value.
   */
  public set(name: string, item: T) {
    if (arguments.length !== 2) {
      throw new Error(`${METHOD.SET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.SET_PARAM}`);
    }

    this.data.set(name, item);
  }

  /**
   * @method safeSet
   *
   * Map setter sets the key/value provided it does
   * not already exist.
   */
  public safeSet(name: string, item: T) {
    if (arguments.length !== 2) {
      throw new Error(`${METHOD.SET_SAFE} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.SET_PARAM}`);
    }

    if (this.data.get(name)) {
      throw new Error(
        `${METHOD.SET_SAFE} ${ERROR.CANNOT_OVERRIDE} ${STORE_CONSTANT.OVERRIDE_OPTION}`
      );
    }

    this.data.set(name, item);
  }

  /**
   * @method mapSet
   *
   * Setter exposes various members to the callback
   * allowing flexibility to run operations before
   * setting the key/keys.
   *
   * @noteworthy
   * Setting keys is delegated to the `set` method so safe
   * setting is not handled by `mapSet`. Therefore if safe
   * setting is required it must be handled by custom logic
   * within the callback. (See Example 2)
   *
   * Example 1:
   * The following example iteratively sets multiple
   * keys.
   *
   * const validator = new Store<Validators>();
   *
   * validator.mapSet(({ setter }) => {
   *   Object.entries(validators).map((validator) => {
   *     setter(validator[0], { [validator[0]]: validator[1] });
   *   });
   * });
   *
   * Example 2:
   * The following example implements safe setting while
   * iteratively setting multiple keys.
   *
   *
   * validator.mapSet(({ getter, setter }) => {
   *   Object.entries(validators).map((validator) => {
   *     const key = Object.values(validator)[0] as string;
   *     const found = getter(key);
   *
   *     if (!found) {
   *       setter(validator[0], { [validator[0]]: validator[1] });
   *     }
   *   });
   * });
   *
   */
  public mapSet(
    cb: ({
      data,
      getter,
      setter,
      publisher,
    }: {
      data: Map<string, T>;
      getter: (name: string) => T | undefined;
      setter: (name: string, item: T) => void;
      publisher: (eventName: string, data: T) => void;
    }) => void
  ) {
    cb &&
      cb({
        data: this.data,
        getter: this.get.bind(this),
        setter: this.set.bind(this),
        publisher: this.publish.bind(this),
      });
  }

  /** Getters **/

  /**
   * @method get
   *
   * Map getter gets value by key.
   */
  public get(name: string): T | undefined {
    if (arguments.length !== 1) {
      throw new Error(`${METHOD.GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.GET_PARAM}`);
    }

    return this.data.get(name);
  }

  /**
   * @method mapGet
   *
   * Map getter gets the value/values by key and exposes
   * various members to the callback allowing flexibility
   * to run operations after getting the value/values.
   *
   * @important
   * The get value must be returned by the custom code within
   * the callback. See unit tests for examples.
   */
  public mapGet(
    name: string,
    cb: ({
      item,
      data,
      getter,
      setter,
      publisher,
    }: {
      item: T | undefined;
      data: Map<string, T>;
      getter: (name: string) => T | undefined;
      setter: (name: string, item: T) => void;
      publisher: (eventName: string, data: T) => void;
    }) => void
  ) {
    if (arguments.length !== 2) {
      throw new Error(`${METHOD.MAP_GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.MAP_GET_PARAM}`);
    }

    const item = this.get(name);

    return (
      cb &&
      cb({
        item: item ? item : undefined,
        data: this.data,
        getter: this.get.bind(this),
        setter: this.set.bind(this),
        publisher: this.publish.bind(this),
      })
    );
  }

  /**
   * Other
   */
  public has(name: string) {
    if (arguments.length !== 1) {
      throw new Error(`${METHOD.MAP_GET} ${ERROR.REQUIRES_PARAMS} ${METHOD_PARAM.HAS_PARAM}`);
    }

    if (!isString(name)) {
      throw new Error(
        `${METHOD.MAP_GET} ${ERROR.INVALID_PARAM_TYPE} ${METHOD_PARAM.HAS_PARAM} ${PARAM_TYPE.REQUIRED_STRING}`
      );
    }

    return this.data.has(name);
  }

  public size() {
    return this.data.size;
  }

  public clear() {
    this.data.clear();
  }
}
