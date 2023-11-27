import React, { FC } from 'react';
import './AboutMe.scss';
import { DANIEL } from '../../static-daniel.service';

interface AboutMeProps {}

// function to generate the about me paragraphs
const generateAboutMeParagraphs = () => {
  const aboutMeParagraphs = [];
  for (const paragraph of DANIEL.aboutMeParagraphs) {
    aboutMeParagraphs.push(
      <p className="aboutme-paragraph" key={paragraph}>
        {paragraph}
      </p>
    );
  }
  return aboutMeParagraphs;
};

const AboutMe: FC<AboutMeProps> = () => (
  <div className="container">
    <div id="aboutme">
      <h2 id="aboutme-title">About me</h2>
      <div id="aboutme-paragraphs">
        <div id="aboutmeparts">{generateAboutMeParagraphs()}</div>
      </div>
    </div>
  </div>
);

export default AboutMe;
