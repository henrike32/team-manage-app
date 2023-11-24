import React, { createContext, useState, FC } from 'react';

interface DataContextProps {
  children: React.ReactNode;
}

interface DataContextValue {
  employees: YourEmployeeType[]; // Replace YourEmployeeType with your actual type
  selectedTeam: string;
  setTeam: (team: string) => void;
  handleEmployeeCardClick: (event: MouseEvent<HTMLDivElement>) => void; // Replace with the correct type
  handleTeamSelectionChange: (event: MouseEvent<HTMLDivElement>) => void; // Replace with the correct type
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

const DataContextProvider: FC<DataContextProps> = ({ children }) => {
  // Your implementation...
};

export { DataContext, DataContextProvider };
