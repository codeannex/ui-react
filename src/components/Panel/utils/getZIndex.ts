import { getHighestZIndex } from './getHighestZIndex';

export interface ZIndexValues {
  zIndexOverlay: number;
  zIndexPanel: number;
}

export const getZIndexValues = (zIndexProp: number, overlayProp: boolean): ZIndexValues => {
  let zIndex = null;

  const highestZIndex = getHighestZIndex();

  /**
   * if user passes in zindex return
   */
  //
  // if (zIndexProp) {
  //
  // }
  //
  // if (overlay && !zIndexProp) {
  //
  // }

  return {
    zIndexOverlay: highestZIndex,
    zIndexPanel: highestZIndex + 1
  };
};
