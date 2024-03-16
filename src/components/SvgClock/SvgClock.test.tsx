import React from 'react';
import ReactDOM from 'react-dom';
import SvgClock from './SvgClock';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SvgClock clockWidth={225} clockHeight={225} />, div);
  ReactDOM.unmountComponentAtNode(div);
});