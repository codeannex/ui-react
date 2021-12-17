import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Button } from './src';
import { PanelGroup, Panel, PanelPosition } from './src';

import './scss/reset.scss';
import './scss/app.scss';

const Home = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  // ============================ panel 1
  const panelOpen1 = () => {
    setOpen1(true);
  };

  const panelClose1 = () => {
    setOpen1(false);
  };

  const handleOnOpen1 = () => {
    // console.log('callback on open');
    // on open callback
  };

  const handleOnOpened1 = () => {
    // console.log('callback on opened');
    // on opened callback
  };

  const handleOnClose1 = () => {
    // console.log('callback on close');
    // on closed callback
  };

  const handleOnClosed1 = () => {
    // console.log('callback on closed');
    // on closed callback
    setOpen1(false);
  };

  // ============================ panel 2
  const panelOpen2 = () => {
    setOpen2(true);
  };

  const panelClose2 = () => {
    setOpen2(false);
  };

  const handleOnOpen2 = () => {
    // console.log('callback on open');
    // on open callback
  };

  const handleOnOpened2 = () => {
    // console.log('callback on opened');
    // on opened callback
  };

  const handleOnClose2 = () => {
    // console.log('callback on close');
    // on closed callback
  };

  const handleOnClosed2 = () => {
    // console.log('callback on closed');
    // on closed callback
    setOpen2(false);
  };

  // ============================ panel 3
  const panelOpen3 = () => {
    setOpen3(true);
  };

  const panelClose3 = () => {
    setOpen3(false);
  };

  const handleOnOpen3 = () => {
    // console.log('callback on open');
    // on open callback
  };

  const handleOnOpened3 = () => {
    // console.log('callback on opened');
    // on opened callback
  };

  const handleOnClose3 = () => {
    // console.log('callback on close');
    // on closed callback
  };

  const handleOnClosed3 = () => {
    // console.log('callback on closed');
    // on closed callback
    setOpen3(false);
  };

  // ============================ panel 3
  const panelOpen4 = () => {
    setOpen4(true);
  };

  const panelClose4 = () => {
    setOpen4(false);
  };

  const handleOnOpen4 = () => {
    // console.log('callback on open');
    // on open callback
  };

  const handleOnOpened4 = () => {
    // console.log('callback on opened');
    // on opened callback
  };

  const handleOnClose4 = () => {
    // console.log('callback on close');
    // on closed callback
  };

  const handleOnClosed4 = () => {
    // console.log('callback on closed');
    // on closed callback
    setOpen4(false);
  };



  return (
    <>
      <div>
        <h2 style={{zIndex: 24}}>About</h2>
        <Button
          onClick={panelOpen1}
        >
          Slide left
        </Button>
        <Button
          onClick={panelOpen2}
        >
          Slide Right
        </Button>
        <Button
          onClick={panelOpen3}
        >
          Slide Down
        </Button>
        <Button
          onClick={panelOpen4}
        >
          Slide Up
        </Button>
      </div>

      {/* ======= Panels ======= */}

      {/*<Panel*/}
      {/*  open={open1}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.RIGHT}*/}
      {/*  overlay={true}*/}
      {/*  zindex={600}*/}

      {/*  onOpen={handleOnOpen1}*/}
      {/*  onOpened={handleOnOpened1}*/}
      {/*  onClose={handleOnClose1}*/}
      {/*  onClosed={handleOnClosed1}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <h2>Panel</h2>*/}
      {/*  </div>*/}
      {/*</Panel>*/}

      {/*<Panel*/}
      {/*  open={open1}*/}
      {/*  renderPortal={true}*/}
      {/*  position={PanelPosition.RIGHT}*/}
      {/*  overlay={true}*/}
      {/*  zindex={600}*/}

      {/*  onOpen={handleOnOpen1}*/}
      {/*  onOpened={handleOnOpened1}*/}
      {/*  onClose={handleOnClose1}*/}
      {/*  onClosed={handleOnClosed1}*/}
      {/*>*/}
      {/*  <Panel.Header>*/}
      {/*    <div>*/}
      {/*      <button onClick={panelClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel.Header>*/}
      {/*  <Panel.Content>*/}
      {/*    Panel Slide Left*/}
      {/*  </Panel.Content>*/}
      {/*</Panel>*/}

      <PanelGroup
        overlay={true}
        zindex={600}
      >
        <Panel
          controllerId={'1'}
          open={open1}
          position={PanelPosition.RIGHT}
          renderPortal={true}

          onOpen={handleOnOpen1}
          onOpened={handleOnOpened1}
          onClose={handleOnClose1}
          onClosed={handleOnClosed1}
        >
          <div>
            <h2>Panel Slide Left</h2>
            <button onClick={panelClose1}>Close</button>
          </div>
        </Panel>
        <Panel
          controllerId={'2'}
          open={open2}
          position={PanelPosition.LEFT}
          renderPortal={true}

          onOpen={handleOnOpen2}
          onOpened={handleOnOpened2}
          onClose={handleOnClose2}
          onClosed={handleOnClosed2}
        >
          <div>
            <h2>Panel Slide Right</h2>
            <button onClick={panelClose2}>Close</button>
          </div>
        </Panel>
        <Panel
          controllerId={'3'}
          open={open3}
          position={PanelPosition.TOP}
          renderPortal={true}

          onOpen={handleOnOpen3}
          onOpened={handleOnOpened3}
          onClose={handleOnClose3}
          onClosed={handleOnClosed3}
        >
          <div>
            <h2>Panel Slide Down</h2>
            <button onClick={panelClose3}>Close</button>
          </div>
        </Panel>
        <Panel
          controllerId={'4'}
          open={open4}
          position={PanelPosition.BOTTOM}
          renderPortal={true}

          onOpen={handleOnOpen4}
          onOpened={handleOnOpened4}
          onClose={handleOnClose4}
          onClosed={handleOnClosed4}
        >
          <div>
            <h2>Panel Slide UP</h2>
            <button onClick={panelClose4}>Close</button>
          </div>
        </Panel>
      </PanelGroup>
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
