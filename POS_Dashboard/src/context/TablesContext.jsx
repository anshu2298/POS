import React, {
  createContext,
  useState,
  useContext,
} from "react";

const TablesContext = createContext();

export const useTables = () => useContext(TablesContext);

export const TablesProvider = ({ children }) => {
  const [tables, setTables] = useState([]);

  return (
    <TablesContext.Provider value={{ tables, setTables }}>
      {children}
    </TablesContext.Provider>
  );
};
