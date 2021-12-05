import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import { Button, ButtonType, ButtonClasses } from './src';
import { Panel } from './src/components/Panel/Panel';
import { Portal } from './src/components/Portal';
import { PanelOverlay } from './src/components/Panel/components';
import { panelOverlayContext, panelOverlayActionsContext } from './src/components/Panel/PanelContext';

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
        <h2 style={{zIndex: 24}}>About</h2>
        <Button
          onClick={handleOpen1}
          // buttonClass={ButtonClasses.SECONDARY}
          // classPrefix={'submission'}
          // classes={['a', 'b', '']}
        >
          Open1
        </Button>
        <Button
          onClick={handleOpen2}
          // buttonClass={ButtonClasses.SECONDARY}
          // classPrefix={'submission'}
          // classes={['a', 'b', '']}
        >
          Open2
        </Button>
      </div>
      {/*{open1 && (*/}
      {/*  <Panel*/}
      {/*    open={open1}*/}
      {/*    onClosed={handleClose1}*/}
      {/*    // renderPortal={true}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel</h2>*/}
      {/*      <button onClick={handleClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*)}*/}

      <Panel
        open={open1}
        onClosed={handleClose1}
        controller={true}
        renderPortal={true}
      >
        <div>
          <h2>Panel</h2>
          <button onClick={handleClose1}>Close</button>
        </div>
      </Panel>

      {/*<Panel*/}
      {/*  open={open1}*/}
      {/*  onClosed={handleClose1}*/}
      {/*  renderPortal={true}*/}
      {/*  controller={true}*/}
      {/*>*/}
      {/*  <Panel.Header>*/}
      {/*    <div>*/}
      {/*      <button onClick={handleClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel.Header>*/}
      {/*  <Panel.Content>*/}
      {/*    Panel Content 1*/}
      {/*  </Panel.Content>*/}
      {/*</Panel>*/}

      {/*<Panel*/}
      {/*  open={open2}*/}
      {/*  onClosed={handleClose2}*/}
      {/*  renderPortal={true}*/}
      {/*>*/}
      {/*  <Panel.Header>*/}
      {/*    <div>*/}
      {/*      <button onClick={handleClose2}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel.Header>*/}
      {/*  <Panel.Content>*/}
      {/*    Panel Content 2*/}
      {/*  </Panel.Content>*/}
      {/*</Panel>*/}
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
  const overlay = panelOverlayContext();
  const setOverlay = panelOverlayActionsContext();

  console.log(overlay);

  return (
    <div id="page" data-test-id="component-app">
      <PanelOverlay visibility={overlay} />
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
