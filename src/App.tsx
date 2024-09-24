import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import FeatureList from './components/FeatureList';
import CommandList from './components/CommandList';
import InstallationSteps from './components/InstallationSteps';
import Button from './components/Button';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container" style={{ marginTop: '80px' }}>
        <Section id="intro" title="Welcome to the Future of Discord">
          <p>CyberHarmonix is your ultimate audiovisual companion for a cutting-edge Discord experience!</p>
        </Section>

        <Section id="features" title="Key Features">
          <FeatureList />
        </Section>

        <Section id="commands" title="Main Commands">
          <CommandList />
        </Section>

        <Section id="installation" title="Installation">
          <InstallationSteps />
        </Section>

        <Section id="info" title="More Information">
          <p>For more details, complete instructions, and the source code, visit our GitHub repository.</p>
          <Button href="https://github.com/Maudrigal-Inc/cyberharmonix">Visit the Repository</Button>
        </Section>
      </main>
    </div>
  );
};

export default App;