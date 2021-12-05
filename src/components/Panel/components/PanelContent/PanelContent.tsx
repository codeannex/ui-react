import * as React from 'react';

export interface PanelContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PanelContent = ({ children }: PanelContentProps): JSX.Element => {

  return (
    <>
      {children}
    </>
  );
};
