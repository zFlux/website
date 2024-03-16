import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ResumeHeader from './components/ResumeHeader/ResumeHeader';
import SkillBlock from './components/SkillBlock/SkillBlock';
import { DANIEL } from './services/static-daniel.service';
import SvgClock from './components/SvgClock/SvgClock';

function App() {
  return (
    <div className="App">
      <ResumeHeader links={DANIEL.links} name={DANIEL.name} email={DANIEL.email} resume={DANIEL.resume} />
      <AboutMe aboutMeParagraphs={DANIEL.aboutMeParagraphs}/>
      <div className="center_container">
        <div className="center_content">  
          <SkillBlock skill={DANIEL.skills[0]}/>
        </div>
        <div className="center_content">
          <SkillBlock skill={DANIEL.skills[1]}/>
        </div>
      </div>
      <div className="SVGClock">
        <SvgClock clockWidth={235} clockHeight={235}/>
    </div>
    </div>
  );
}

export default App;
