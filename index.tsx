import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import { PanelProvider } from './src/components/Panel/PanelContext';

import { App } from './app';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PanelProvider>
        <App />
      </PanelProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
