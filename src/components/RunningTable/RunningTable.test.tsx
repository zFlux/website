import React from 'react';
import ReactDOM from 'react-dom';
import RunningTable from './RunningTable';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RunningTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});