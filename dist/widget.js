import React, { useState, useEffect } from 'react';
const DEFAULT_REFRESH_INTERVAL = 2000;

const Widget = ({
  Component,
  refreshInterval
}) => {
  const [refreshHook, setRefreshHook] = useState(false);
  useEffect(() => {
    if (!refreshInterval || typeof refreshInterval === 'number' && refreshInterval >= 1000) {
      const interval = setInterval(() => setRefreshHook(refreshHook => !refreshHook), refreshInterval || DEFAULT_REFRESH_INTERVAL);
      return () => clearInterval(interval);
    }
  }, []);
  return React.createElement(Component, {
    refreshHook: refreshHook
  });
};

export default Widget;