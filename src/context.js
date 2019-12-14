import React from 'react';

const defaultValue = {
  user: { key: '', name: '' },
  stage: 0,
  voicesCount: 0,
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
