import React, { Fragment } from 'react';

import './App.css';

function App(props: any) {
  return (
    <Fragment>
      <h1>{props.letter}</h1>
    </Fragment>
  );
}

export default App;
