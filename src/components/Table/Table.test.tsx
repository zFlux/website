import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table data={[
    {date:'2019-10-20', race:'Toronto Waterfront Marathon', km:'42.2', time: '4:17:17'}]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});