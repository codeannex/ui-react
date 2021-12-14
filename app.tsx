import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import { Button, ButtonType, ButtonClasses } from './src';
import { PanelGroup, Panel, PanelPosition } from './src';
import { Portal } from './src/components/Portal';
import { PanelOverlay } from './src/components/Panel/components';
import { panelOverlayContext, panelOverlayActionsContext } from './src/components/Panel/PanelContext';
import { getGuid } from "./utils";

import './scss/reset.scss';
import './scss/app.scss';

const Home = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClose1 = () => {
    console.log('handleClose1');
    console.log(open1);
    console.log('handleClose1');
    setOpen1(false);
  };

  const handleOpen1 = () => {
    console.log('handleOpen1 ====');
    setOpen1(true);
  };

  const handleClose2 = () => {
    console.log('handleClose2');
    setOpen2(false);
  };

  const handleOpen2 = () => {
    console.log('handleOpen2');
    setOpen2(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };

  return (
    <>
      <div>
        <h2 style={{zIndex: 24}}>About</h2>
        <Button
          onClick={handleOpen1}
        >
          Slide left
        </Button>
        <Button
          onClick={handleOpen2}
        >
          Slide Right
        </Button>
        <Button
          onClick={handleOpen3}
        >
          Slide Down
        </Button>
        <Button
          onClick={handleOpen4}
        >
          Slide Up
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
        renderPortal={true}
        position={PanelPosition.RIGHT}
      >
        <div>
          <h2>Panel</h2>
          <button onClick={handleClose1}>Close</button>
        </div>
      </Panel>

      {/*<Panel*/}
      {/*  open={open2}*/}
      {/*  onClosed={handleClose2}*/}
      {/*  controller={true}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.LEFT}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <h2>Panel</h2>*/}
      {/*    <button onClick={handleClose2}>Close</button>*/}
      {/*  </div>*/}
      {/*</Panel>*/}

      {/*<Panel*/}
      {/*  open={open3}*/}
      {/*  onClosed={handleClose3}*/}
      {/*  controller={true}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.TOP}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <h2>Panel</h2>*/}
      {/*    <button onClick={handleClose3}>Close</button>*/}
      {/*  </div>*/}
      {/*</Panel>*/}

      {/*<Panel*/}
      {/*  open={open4}*/}
      {/*  onClosed={handleClose4}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.BOTTOM}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <h2>Panel</h2>*/}
      {/*    <button onClick={handleClose4}>Close</button>*/}
      {/*  </div>*/}
      {/*</Panel>*/}

      {/* ======= PANEL COMPOUND COMPONENTS ======= */}

      {/*<Panel*/}
      {/*  open={open1}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.RIGHT}*/}
      {/*  overlay={true}*/}
      {/*>*/}
      {/*  <Panel.Header>*/}
      {/*    <div>*/}
      {/*      <button onClick={handleClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel.Header>*/}
      {/*  <Panel.Content>*/}
      {/*    Panel Slide Left*/}
      {/*  </Panel.Content>*/}
      {/*</Panel>*/}

      {/*<Panel*/}
      {/*  open={open2}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.LEFT}*/}
      {/*  zindex={300}*/}
      {/*  overlay={true}*/}
      {/*>*/}
      {/*  <Panel.Header>*/}
      {/*    <div>*/}
      {/*      <button onClick={handleClose2}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel.Header>*/}
      {/*  <Panel.Content>*/}
      {/*    Panel Slide Right*/}
      {/*  </Panel.Content>*/}
      {/*</Panel>*/}

      {/* ======= PANEL GROUP COMPOUND COMPONENTS ======= */}

      {/*<PanelGroup>*/}
      {/*  <Panel*/}
      {/*    open={open1}*/}
      {/*    onClosed={handleClose1}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.RIGHT}*/}
      {/*  >*/}
      {/*    <Panel.Header>*/}
      {/*      <div>*/}
      {/*        <button onClick={handleClose1}>Close</button>*/}
      {/*      </div>*/}
      {/*    </Panel.Header>*/}
      {/*    <Panel.Content>*/}
      {/*      Panel Slide Left*/}
      {/*    </Panel.Content>*/}
      {/*  </Panel>*/}

      {/*  <Panel*/}
      {/*    open={open2}*/}
      {/*    onClosed={handleClose2}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.LEFT}*/}
      {/*  >*/}
      {/*    <Panel.Header>*/}
      {/*      <div>*/}
      {/*        <button onClick={handleClose2}>Close</button>*/}
      {/*      </div>*/}
      {/*    </Panel.Header>*/}
      {/*    <Panel.Content>*/}
      {/*      Panel Slide Right*/}
      {/*    </Panel.Content>*/}
      {/*  </Panel>*/}
      {/*</PanelGroup>*/}

      {/* ======= PANEL GROUP STANDARD ======= */}

      {/*<PanelGroup*/}
      {/*  overlay={true}*/}
      {/*  // zindex={600}*/}
      {/*>*/}
      {/*  <Panel*/}
      {/*    controllerId={'1'}*/}
      {/*    open={open1}*/}
      {/*    onClosed={handleClose1}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.RIGHT}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Left</h2>*/}
      {/*      <button onClick={handleClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    controllerId={'2'}*/}
      {/*    open={open2}*/}
      {/*    onClosed={handleClose2}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.LEFT}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Right</h2>*/}
      {/*      <button onClick={handleClose2}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    controllerId={'3'}*/}
      {/*    open={open3}*/}
      {/*    onClosed={handleClose3}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.TOP}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Down</h2>*/}
      {/*      <button onClick={handleClose3}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    controllerId={'4'}*/}
      {/*    open={open4}*/}
      {/*    onClosed={handleClose4}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.BOTTOM}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Up</h2>*/}
      {/*      <button onClick={handleClose4}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*</PanelGroup>*/}

      {/*<PanelGroup*/}
      {/*  overlay={true}*/}
      {/*  // zindex={600}*/}
      {/*>*/}
      {/*  <Panel*/}
      {/*    controllerId={'1'}*/}
      {/*    open={open1}*/}
      {/*    onClosed={handleClose1}*/}
      {/*    renderPortal={true}*/}
      {/*    position={PanelPosition.RIGHT}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Left</h2>*/}
      {/*      <button onClick={handleClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*</PanelGroup>*/}
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
