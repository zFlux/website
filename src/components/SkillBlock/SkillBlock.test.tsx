import React from 'react';
import ReactDOM from 'react-dom';
import SkillBlock from './SkillBlock';
import { Skill } from '../../models/skill.model';

it('should mount', () => {
  const div = document.createElement('div');
  const skill: Skill = { skillTitle: '', skillDetails: [] };
  ReactDOM.render(<SkillBlock skill={skill}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});