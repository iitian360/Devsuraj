// src/components/shared/TabButton.js
/**
 * Reusable Tab Button Component
 * Used for displaying tabs in Resume and other sections
 */

import React from 'react';

const TabButton = ({
  tabs,
  activeTab,
  onTabClick,
  className = '',
}) => {
  return (
    <ul className={`w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ${className}`}>
      {tabs.map((tab) => (
        <li
          key={tab._id}
          onClick={() => onTabClick(tab._id)}
          className={`
            px-6 py-3 rounded-lg cursor-pointer
            transition-all duration-300 ease-in-out
            font-medium text-center
            ${
              activeTab === tab._id
                ? 'border-2 border-designColor bg-designColor bg-opacity-10 text-designColor'
                : 'border-2 border-transparent hover:border-designColor hover:bg-designColor hover:bg-opacity-5'
            }
            resumeLi
          `}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default TabButton;
