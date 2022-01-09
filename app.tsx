import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import { Button, ButtonType, Panel, PanelLoaderTheme, PanelPosition } from './src';

import './scss/reset.scss';
import './scss/app.scss';

const Home = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const [loading1, setLoading1] = React.useState(true);

  const panelRef = React.useRef(undefined);

  const stopLoading = () => {
    setLoading1(false);
  };

  // ============================ panel 1
  const panelOpen1 = () => {
    setOpen1(true);
    setLoading1(true);
  };

  const panelClose1 = () => {
    setOpen1(false);
  };

  const handleOnOpened1 = () => {
    console.log('callback on opened 1');
  };

  const handleOnClose1 = () => {
    console.log('callback on close');
    setOpen1(false);
  };

  const handleOnClosed1 = () => {
    console.log('callback on closed');
  };

  // ============================ panel 2
  const panelOpen2 = () => {
    setOpen2(true);
  };

  const panelClose2 = () => {
    setOpen1(false);
  };

  const handleOnOpened2 = () => {
    console.log('callback on opened 2');
  };

  const handleOnClose2 = () => {
    console.log('callback on close');
    setOpen2(false);
  };

  const handleOnClosed2 = () => {
    console.log('callback on closed');
  };

  // ============================ panel 3
  const panelOpen3 = () => {
    setOpen3(true);
  };

  const panelClose3 = () => {
    setOpen3(false);
  };

  const handleOnOpened3 = () => {
    console.log('callback on opened 3');
  };

  const handleOnClose3 = () => {
    console.log('callback on close');
    setOpen3(false);
  };

  const handleOnClosed3 = () => {
    console.log('callback on closed');
  };

  // ============================ panel 4
  const panelOpen4 = () => {
    setOpen4(true);
  };

  const panelClose4 = () => {
    setOpen4(false);
  };

  const handleOnOpened4 = () => {
    console.log('callback on opened 4');
  };

  const handleOnClose4 = () => {
    console.log('callback on close');
    setOpen4(false);
  };

  const handleOnClosed4 = () => {
    console.log('callback on closed');
  };

  // ============================ panel 5
  const panelOpen5 = () => {
    console.log('panel open');
    setOpen5(true);
  };

  const panelClose5 = () => {
    setOpen5(false);
  };

  const handleOnOpened5 = () => {
    console.log('callback on opened 5');
  };

  const handleOnClose5 = () => {
    console.log('callback on close');
    setOpen5(false);
  };

  const handleOnClosed5 = () => {
    console.log('callback on closed');
  };

  React.useEffect(() => {
    console.log(panelRef && panelRef.current);
  });

  return (
    <>
      <div>
        <h2 style={{zIndex: 24}}>About</h2>
        <Button
          onClick={panelOpen1}
          type={ButtonType.SUBMIT}
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
        <Button
          onClick={stopLoading}
        >
          Stop Loading
        </Button>
      </div>

      {/* ======= Panels ======= */}

      <Panel
        open={open1}
        expanse={'50%'}
        loaderTheme={PanelLoaderTheme.DARK}
        loading={loading1}
        renderPortal={true}
        position={PanelPosition.RIGHT}
        overlay={true}
        zindex={600}
        ref={panelRef}

        onOpened={handleOnOpened1}
        onClose={handleOnClose1}
        onClosed={handleOnClosed1}
      >
        <div>
          <h2>Panel</h2>
        </div>
      </Panel>

      {/* <Panel
        open={open1}
        renderPortal={true}
        position={PanelPosition.RIGHT}
        overlay={true}
        zindex={600}

        onOpen={handleOnOpen1}
        onOpened={handleOnOpened1}
        onClose={handleOnClose1}
        onClosed={handleOnClosed1}
      >
        <Panel.Header>
          <div>
            <button onClick={panelClose1}>Close</button>
          </div>
        </Panel.Header>
        <Panel.Content>
          Panel Slide Left
        </Panel.Content>
      </Panel> */}

      {/*<PanelGroup zindex={600} overlay={false}>*/}
      {/*  <Panel*/}
      {/*    open={open1}*/}
      {/*    position={PanelPosition.RIGHT}*/}
      {/*    renderPortal={true}*/}

      {/*    onOpened={handleOnOpened1}*/}
      {/*    onClose={handleOnClose1}*/}
      {/*    onClosed={handleOnClosed1}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Left</h2>*/}
      {/*      <button onClick={panelClose1}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    open={open2}*/}
      {/*    position={PanelPosition.LEFT}*/}
      {/*    renderPortal={true}*/}

      {/*    onOpened={handleOnOpened2}*/}
      {/*    onClose={handleOnClose2}*/}
      {/*    onClosed={handleOnClosed2}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Right</h2>*/}
      {/*      <button onClick={panelClose2}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    open={open3}*/}
      {/*    position={PanelPosition.TOP}*/}
      {/*    renderPortal={true}*/}

      {/*    onOpened={handleOnOpened3}*/}
      {/*    onClose={handleOnClose3}*/}
      {/*    onClosed={handleOnClosed3}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide Down</h2>*/}
      {/*      <button onClick={panelClose3}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*  <Panel*/}
      {/*    open={open4}*/}
      {/*    position={PanelPosition.BOTTOM}*/}
      {/*    renderPortal={true}*/}
      {/*    expanse={"50%"}*/}

      {/*    onOpened={handleOnOpened4}*/}
      {/*    onClose={handleOnClose4}*/}
      {/*    onClosed={handleOnClosed4}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <h2>Panel Slide UP</h2>*/}
      {/*      <button onClick={panelClose4}>Close</button>*/}
      {/*    </div>*/}
      {/*  </Panel>*/}
      {/*</PanelGroup>*/}

      {/* ======= Panels Nested ======= */}

      {/* <Panel
        open={open1}
        position={PanelPosition.RIGHT}

        onOpened={handleOnOpened1}
        onClose={handleOnClose1}
        onClosed={handleOnClosed1}
      >
        <Panel
          open={open5}
          expanse={'100%'}
          position={PanelPosition.LEFT}

          onOpened={handleOnOpened5}
          onClose={handleOnClose5}
          onClosed={handleOnClosed5}
        >
          <div>
            Inner Panel
          </div>
        </Panel>
        <div>
          <h2>Panel</h2>
          <button onClick={panelOpen5}>Open Inner Panel</button>
        </div>
      </Panel> */}
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
