import React from 'react';
import ReactDOM from 'react-dom';
import ResumeHeader from './ResumeHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResumeHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});