/**
 * Returns shallow wrapper with the targeted node by data-test attribute.
 */
export const findByAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test-id='${value}']`);
};
