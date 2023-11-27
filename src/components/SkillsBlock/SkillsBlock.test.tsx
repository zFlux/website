import React from 'react';
import ReactDOM from 'react-dom';
import SkillsBlock from './SkillsBlock';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillsBlock />, div);
  ReactDOM.unmountComponentAtNode(div);
});