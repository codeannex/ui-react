import { Store } from "@utils/store/store";

export class FieldRef<FieldRefState> extends Store<FieldRefState> {
  constructor() {
    super();
  }

  getFieldRefs() {
    return Array.from(this.data.entries())
      .concat()
      .map((item: any) => {
        const obj: any = Object.entries(item[1] || {});

        if (!obj.length) {
          return {};
        }

        return {
          [obj[0][0]]: {
            current: obj[0][1]._field.ref,
          },
        };
      })
      .reduce((accumulator, current) => Object.assign(accumulator, { ...current }), {});
  }
}
