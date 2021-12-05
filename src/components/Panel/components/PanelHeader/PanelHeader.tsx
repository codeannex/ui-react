import * as React from 'react';

export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PanelHeader = ({ children }: PanelHeaderProps): JSX.Element => {

  return (
    <>
      {children}
    </>
  );
};
