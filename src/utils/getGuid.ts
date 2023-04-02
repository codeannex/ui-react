// Returns a unique id
export const getGuid = (): string => {
  function pt(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${pt()}${pt()}-${pt()}-${pt()}-${pt()}-${pt()}${pt()}${pt()}`;
};

export default getGuid;
