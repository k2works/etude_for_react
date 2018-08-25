import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './components/StatefulHello';

ReactDOM.render(
  <Hello name="React" enthusiasmLevel={10} />,
  document.getElementById('root'),
);