// src/hooks/useTabState.js
/**
 * Custom hook for managing tab/toggle state
 * Makes tab management reusable across components
 */

import { useState } from 'react';

export const useTabState = (tabs, defaultTab = null) => {
  const defaultTabId = defaultTab || (Array.isArray(tabs) && tabs[0]?._id);
  const [activeTab, setActiveTab] = useState(defaultTabId);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const isTabActive = (tabId) => activeTab === tabId;

  return {
    activeTab,
    setActiveTab,
    handleTabClick,
    isTabActive,
  };
};

export default useTabState;
