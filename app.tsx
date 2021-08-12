import React from "react";

import { Button, ButtonStyle } from './src/components/Button';

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
        buttonStyle={ButtonStyle.Danger}
      />
    </div>
  );
};
