import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ResumeHeader from './components/ResumeHeader/ResumeHeader';
import RunningTable from './components/RunningTable/RunningTable';

function App() {
  return (
    <div className="App">
      <ResumeHeader />
      <RunningTable />
      <AboutMe />
    </div>
  );
}

export default App;
