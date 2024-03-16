import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './AboutMe';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutMe aboutMeParagraphs={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});