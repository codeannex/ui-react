export const entriesToFieldRefs = <T>(entries: IterableIterator<[string, T]>) => {
  return Array.from(entries)
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
};

export default entriesToFieldRefs;
