import React from 'react';
import ReactDOM from 'react-dom';
import ResumeHeader from './ResumeHeader';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResumeHeader links={[]} name='' email='' resume=''/>, div);
  ReactDOM.unmountComponentAtNode(div);
});