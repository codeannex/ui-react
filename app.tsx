import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import { Button, ButtonType, ButtonClasses } from './src/components/Button';
import { Heading, HeadingType, HeadingClasses } from './src/components/Heading';
import { Panel } from './src/components/Panel';
import { Portal } from './src/components/Portal';

import './scss/reset.scss';
import './scss/app.scss';

const Home = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  return (
    <>
      <div>
        <h2>About</h2>
        <Button onClick={handleOpen1}>Open1</Button>

      </div>
      {open1 && (
        <Panel
          open={open1}
          onClosed={handleClose1}
          renderPortal={true}
        >
          <div>
            <h2>Panel</h2>
          </div>
        </Panel>
      )}
    </>
  );
};

const About = () => {
  return (
    <>
      <div>
        <h2>About</h2>
      </div>
    </>
  );
};


export const App = () => {
  return (
    <div id="page" data-test-id="component-app">
      <header id="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

      </header>
      <main id="main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
