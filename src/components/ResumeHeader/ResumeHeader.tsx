import React, { FC } from 'react';
import './ResumeHeader.scss';
import { DANIEL } from '../../static-daniel.service';
import SvgClock from '../SvgClock/SvgClock';

interface ResumeHeaderProps {}

// function to iterate Daniel.links and generate the links
const generateLinks = () => {
  const links = [];
  for (const link of DANIEL.links) {
    links.push(<a href={link.link} aria-label={link.label}><img id="header-image" src={"assets/img/icons/" + link.image} alt={link.altText}/></a>)
  }
  return links;
};

const ResumeHeader: FC<ResumeHeaderProps> = () => (
  <div id="resume-header">
    <div>
      <h1 id="resume-name">{DANIEL.name}</h1>
      <div id="email"><a id="email" href={"mailto:" + DANIEL.email} target="_top">{DANIEL.email}</a></div>
      <div id="links">{generateLinks()}</div>
      <span className="hidden-xs">
        <SvgClock clockWidth={225} clockHeight={225}/>
      </span>
    </div>
  </div>
);

export default ResumeHeader;
