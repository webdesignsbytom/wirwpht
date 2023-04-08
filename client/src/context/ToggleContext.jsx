import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleTests, setToggleTests] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        setToggleNavigation,
        toggleTests,
        setToggleTests,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
