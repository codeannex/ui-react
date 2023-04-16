import { STORE_CONSTANT } from "@utils/store/constants";

import { ERROR } from "@constants/error";

export class Store<T> {
  public data: Map<string, T>;

  private events: any;

  constructor() {
    this.data = new Map();
    this.events = {};

    this.operationalSet = this.operationalSet.bind(this);
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
   * Map setter sets the key/value heedless of any
   * preexisting value.
   */
  public set(name: string, item: T) {
    if (arguments.length !== 2) {
      throw new Error(`set ${ERROR.REQUIRES_PARAMS} ${STORE_CONSTANT.SET_PARAMS}`);
    }

    this.data.set(name, item);
  }

  /**
   * Map setter sets the key/value provided it does
   * not already exist.
   */
  public safeSet(name: string, item: T) {
    if (arguments.length !== 2) {
      throw new Error(`safeSet ${ERROR.REQUIRES_PARAMS} ${STORE_CONSTANT.SET_PARAMS}`);
    }

    if (this.data.get(name)) {
      throw new Error(`safeSet ${ERROR.CANNOT_OVERRIDE} ${STORE_CONSTANT.OVERRIDE_OPTION}`);
    }

    this.data.set(name, item);
  }

  /**
   * Setter exposes various members to a callback
   * allowing flexibility to run operations before
   * setting the key/keys.
   */
  public operationalSet(
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

  /**
   * Getters
   */
  public get(name: string): T | undefined {
    return this.data.get(name);
  }

  public mapGet() {
    // code...
  }

  public values() {
    return this.data.values();
  }

  public mapValues(cb: (values: IterableIterator<T>) => unknown) {
    const values = this.data.values();

    if (cb) {
      return cb(values);
    }

    return values;
  }

  public entries() {
    return this.data.entries();
  }

  public mapEntries(cb: (entries: IterableIterator<[string, T]>) => unknown) {
    const entries = this.data.entries();

    if (cb) {
      return cb(entries);
    }

    return entries;
  }

  public rawDate() {
    return this.data;
  }

  public mapRawDate(cb: (values: Map<string, T>) => unknown) {
    if (cb) {
      return cb(this.data);
    }

    return this.data;
  }

  /**
   * Other
   */
  public has(name: string) {
    return this.data.has(name);
  }

  public size() {
    return this.data.size;
  }

  public clear() {
    this.data.clear();
  }
}
