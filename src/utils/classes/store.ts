export class Store<T> {
  private data: Map<string, T>;
  private events: any;

  constructor() {
    this.data = new Map();
    this.events = {};

    this.operationalSet = this.operationalSet.bind(this);
  }

  /**
   * Pub / Sub
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

  /**
   * Setters
   */
  public set(name: string, item: T) {
    this.data.set(name, item);
  }

  public safeSet(name: string, item: T) {
    if (this.data.get(name)) {
      return;
    }

    this.data.set(name, item);
  }

  public operationalSet(
    name: string,
    cb: ({
      item,
      setter,
      publisher,
    }: {
      item: T | undefined;
      setter: (name: string, item: T) => void;
      publisher: (eventName: string, data: T) => void;
    }) => void
  ) {
    const current = this.data.get(name);

    cb &&
      cb({
        item: current,
        setter: this.set.bind(this),
        publisher: this.publish.bind(this),
      });
  }

  /**
   * Getters
   */
  public get(name: string) {
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

  public clear() {
    this.data.clear();
  }
}
