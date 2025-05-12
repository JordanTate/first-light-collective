'use client';

import { createContext, useContext, useState } from 'react';
import Loader from '@/components/ui/Loader';

type LoaderContextType = {
  showLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context)
    throw new Error('UseLoader must be used within a LoaderProvider');
  return context;
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  const showLoader = () => setIsVisible(true);
  const hideLoader = () => setIsVisible(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      <Loader isVisible={isVisible} />
      {children}
    </LoaderContext.Provider>
  );
}
