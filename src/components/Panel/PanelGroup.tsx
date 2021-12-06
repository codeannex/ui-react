import * as React from 'react';

import { PanelOverlay } from './components';

import { getHighestZIndex } from "./utils/getHighestZIndex";

import { getGuid } from '../../../utils';

export interface PanelGroupProp extends React.HTMLAttributes<HTMLDivElement> {
  controller?: boolean;
}

export const PanelGroup = ({
  children
}: PanelGroupProp): JSX.Element => {

  const [highestZIndex, setHighestZIndex] = React.useState(null);

  /**
   * Handles finding the highest index on the page after render. This value
   * will be used as the benchmark to set the z-index of the panel
   * components.
   */
  React.useEffect(() => {
    const highestIndex = getHighestZIndex();

    setHighestZIndex(highestIndex);
  }, [getHighestZIndex])

  const renderGroupPanelChildren = (children): React.ReactElement => {
    let incrementor = highestZIndex + 1;

    return (
      <React.Fragment>
        {React.Children.map(children || null, (child) => {
          const newProps = {...child.props, ZIndex: incrementor };

          incrementor++;

          return <child.type {...newProps } key={getGuid()} />;
        })}
      </React.Fragment>
    );
  };
  /**
   * Left off with getting the overlay to work.
   */
  return (
    <div>
      <>
        <PanelOverlay visibility={false} />
        {renderGroupPanelChildren(children)}
      </>
    </div>
  );
};
