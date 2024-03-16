import React, { FC } from 'react';
import './SkillBlock.scss';
import { SkillDetail } from '../../models/skill-detail.model';
import { Skill } from '../../models/skill.model';

interface SkillsBlockProps { skill: Skill}

const skillDtailJsx = (skillDetail: SkillDetail) => (
  <div className="Detail">
    <h4 className="Title">{skillDetail.skillDetailTitle}</h4>
    <div className="Items">
      {skillDetail.skillDetailItems.map((skillDetailItem, index) => (
        <div key={index}>{skillDetailItem}</div>
      ))}
    </div>
  </div>
);

const skillJsx = (skillTitle: string, skillDetails: SkillDetail[]) => (
  <div className='SkillBlock'>
    <h3 className="Title">{skillTitle}</h3>
    <div className="Details">
      {skillDetails.map((skillDetail, index) => (
        <div key={index}>{skillDtailJsx(skillDetail)}</div>
      ))}
    </div>
  </div>
);

const SkillsBlock: FC<SkillsBlockProps> = (props: SkillsBlockProps) => (
  <>
    {skillJsx(props.skill.skillTitle, props.skill.skillDetails)}
  </>
);

export default SkillsBlock;
