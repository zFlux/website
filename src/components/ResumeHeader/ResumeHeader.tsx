import React, { FC } from 'react';
import './ResumeHeader.scss';
import { Link } from '../../models/link.model';

interface ResumeHeaderProps {
  links: Link[];
  name: string;
  email: string;
  resume: string;
}

// function to iterate Daniel.links and generate the links
const generateLinks = (links: Link[]) => {
  const linksJsx = [];
  for (const link of links) {
    linksJsx.push(<a href={link.link} aria-label={link.label} className="Link" key={link.link} target="_blank" rel='noreferrer'><img className="Image" src={"/assets/img/icons/" + link.image} alt={link.altText}/></a>)
  }
  return linksJsx;
};

const ResumeHeader: FC<ResumeHeaderProps> = (props: ResumeHeaderProps) => (
  <div className="ResumeHeader">
    <img className="Background" src="/assets/img/stock_wood_planks.webp" alt="Wood"/>
    <div className="Banner">
      <div className="Name">{props.name}</div>
      <div className="Email"><a className="Email" href={"mailto:" + props.email} target="_top">{props.email}</a></div>
      <div className="Links">{generateLinks(props.links)}
        <div className='ResumeContainer'><a href={props.resume} target="_blank" rel='noreferrer' className='Resume'>Résumé</a></div>
      </div>
    </div>
  </div>
);

export default ResumeHeader;
