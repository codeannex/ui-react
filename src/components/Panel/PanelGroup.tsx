import * as React from 'react';

import { Panel } from './Panel';
import { PanelOverlay } from './components';

import { getHighestZIndex } from "./utils/getHighestZIndex";

export interface PanelGroupProp extends React.HTMLAttributes<HTMLDivElement> {
  controller?: boolean;
}

export const PanelGroup = ({
  children
}: PanelGroupProp): JSX.Element => {

  const [highetsZIndex, setHighestZIndex] = React.useState(null);

  /**
   * Handles finding the highest index on the page after render. This value
   * will be used as the benchmark to set the z-index of the panel
   * components.
   */
  React.useEffect(() => {
    const highestIndex = getHighestZIndex();

    setHighestZIndex(highestIndex);
  }, [getHighestZIndex])

  // React.useEffect(() => {
  //   React.Children.map(children, (child: React.ReactElement) => {
  //     if (child && child.type === Panel) {
  //       console.log(child);
  //     }
  //   });
  // }, []);

  return (
    <div>
      {/*<PanelOverlay visibility={} />*/}
      {children}
    </div>
  );
};
