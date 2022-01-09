export const getHighestZIndex = () => {
  function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
  }


  /**
   * Finds the highest index in the current document.
   *
   * @return {number} An integer representing the value of the highest z-index.
   */
  function query() {
    let queryObject = document.querySelectorAll('*');
    let childNodes = Object.keys(queryObject).map(key => queryObject[key]);
    let highest = 0;

    childNodes.forEach((node) => {
      // Get the calculated CSS z-index value.
      let cssStyles = document.defaultView.getComputedStyle(node);
      let cssZIndex: number | string = cssStyles.getPropertyValue('z-index');

      // Get any inline z-index value.
      let inlineZIndex = node.style.zIndex;

      // Coerce the values as integers for comparison.
      cssZIndex = isNumeric(cssZIndex) ? parseInt(cssZIndex, 10) : 0;
      inlineZIndex = isNumeric(inlineZIndex) ? parseInt(inlineZIndex, 10) : 0;

      // Take the highest z-index for this element, whether inline or from CSS.
      let currentZIndex = cssZIndex > inlineZIndex ? cssZIndex : inlineZIndex;

      if ((currentZIndex > highest)) {
        highest = currentZIndex;
      }
    });

    return highest;
  }

  return  query();
};
