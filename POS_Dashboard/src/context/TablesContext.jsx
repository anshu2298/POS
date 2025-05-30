/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

const TablesContext = createContext();

export const useTables = () => useContext(TablesContext);

export const TablesProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = "http://localhost:3000/api/table"; // Update if needed

  // ✅ Fetch all tables
  const fetchTables = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_BASE);
      if (!res.ok)
        throw new Error("Failed to fetch tables");

      const data = await res.json();
      setTables(data);
    } catch (err) {
      console.error("Error fetching tables:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add a new table
  const addTable = async (newTable) => {
    try {
      const res = await fetch(`${API_BASE}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTable),
      });

      if (!res.ok) throw new Error("Failed to add table");

      const savedTable = await res.json();
      setTables((prev) => [...prev, savedTable]);
    } catch (err) {
      console.error("Error adding table:", err);
      setError(err.message);
    }
  };

  // ✅ Delete a table by ID
  const deleteTable = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok)
        throw new Error("Failed to delete table");

      setTables((prev) =>
        prev.filter((table) => table._id !== id)
      );
    } catch (err) {
      console.error("Error deleting table:", err);
      setError(err.message);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <TablesContext.Provider
      value={{
        tables,
        setTables,
        loading,
        error,
        fetchTables,
        addTable,
        deleteTable,
      }}
    >
      {children}
    </TablesContext.Provider>
  );
};
