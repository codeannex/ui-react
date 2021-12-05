/**
 * Returns shallow wrapper with the targeted node by data-test attribute.
 * @param {Wrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} attr - Attr identifying data-test attribute
 */
export const findByAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test-id='${value}']`);
};

// Returns a unique id
export const getGuid = (): string => {
  function pt(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${pt()}${pt()}-${pt()}-${pt()}-${pt()}-${pt()}${pt()}${pt()}`;
};
