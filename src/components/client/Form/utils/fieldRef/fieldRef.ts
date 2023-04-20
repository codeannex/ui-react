import { Store } from "@utils/store/store";

export class FieldRef<FieldRefState> extends Store<FieldRefState> {
  constructor() {
    super();
  }

  private getFieldRefsOrdered() {
    return [...Object.entries(this.getFieldRefs())].sort((a, b) => {
      return a[1].current.compareDocumentPosition(b[1].current) & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : 1;
    });
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

  getFeildRefCurrent(errors: any) {
    let current = {};

    const refs = this.getFieldRefsOrdered();

    for (const ref of refs) {
      const error = errors.find((error: any) => {
        return error === ref[0];
      });

      if (error) {
        current = ref[1].current;

        break;
      }
    }

    return current;
  }
}
