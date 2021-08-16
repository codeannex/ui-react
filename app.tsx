import React from "react";

import { Button, ButtonType, ButtonClasses } from './src/components/Button';
import { Heading, HeadingType, HeadingClasses } from './src/components/Heading';

export const App = () => {

  const handler = () => {
    console.log('clicked');
  };

  return (
    <div data-test-id="component-app">
      <h1>Application</h1>
      <Button 
        label="Pooo" 
        classPrefix="abc-"
        onClick={handler} 
        buttonClass={ButtonClasses.DANGER}
        type={ButtonType.BUTTON}
      />
      <Heading 
        el={HeadingType.H1} 
        label="Heading"
      />
    </div>
  );
};
