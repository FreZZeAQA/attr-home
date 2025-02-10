'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ContextGlobalType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextGlobalProviderProps {
  children: ReactNode;
}

export const ContextGlobal = createContext<ContextGlobalType>({
  show: false,
  setShow: () => {
  },
});

export const GlobalProvider: React.FC<ContextGlobalProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ContextGlobal.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobal = () => useContext(ContextGlobal);
