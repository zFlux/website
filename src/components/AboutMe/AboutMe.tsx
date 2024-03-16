import React, { FC } from 'react';
import './AboutMe.scss';

// add a list of paragraphs to the props
interface AboutMeProps {
  aboutMeParagraphs: string[];
}

// function to generate the about me paragraphs
const generateAboutMeParagraphs = (aboutMeParagraphs: string[]) => {
  const paragraphs = [];
  for (const paragraph of aboutMeParagraphs) {
    paragraphs.push(
      <p className= "Paragraph" key={paragraph}>
        {paragraph}
      </p>
    );
  }
  return paragraphs;
};

const AboutMe: FC<AboutMeProps> = (props: AboutMeProps) => (
  <div className="AboutMe">
    <div className="Paragraphs">
      {generateAboutMeParagraphs(props.aboutMeParagraphs)}
    </div>
  </div>
);

export default AboutMe;
