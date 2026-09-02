import React from 'react';
import { Section, TabButton } from '../shared';
import { useTabState } from '../../hooks/useTabState';
import { resumeTabs } from '../../constants';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievment';
import Experience from './Experience';

const Resume = () => {
  const { activeTab, handleTabClick } = useTabState(resumeTabs);

  // Component mapping for dynamic rendering
  const tabComponents = {
    education: <Education />,
    skills: <Skills />,
    achievement: <Achievement />,
    experience: <Experience />,
  };

  return (
    <Section
      id="resume"
      title="3+ years of experience"
      subtitle="my resume.."
    >
      <div className="mb-10">
        <TabButton
          tabs={resumeTabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      {/* Render active tab component */}
      <div className="w-full">
        {tabComponents[activeTab]}
      </div>
    </Section>
  );
};

export default Resume;
