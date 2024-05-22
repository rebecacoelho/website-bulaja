"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface MedicineContextProps {
  selectedMedicine: Medicine | null;
  setSelectedMedicine: (medicine: Medicine | null) => void;
}

const MedicineContext = createContext<MedicineContextProps | undefined>(undefined);

export const MedicineProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  return (
    <MedicineContext.Provider value={{ selectedMedicine, setSelectedMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicine = (): MedicineContextProps => {
  const context = useContext(MedicineContext);
  if (context === undefined) {
    throw new Error('useMedicine must be used within a MedicineProvider');
  }
  return context;
};
