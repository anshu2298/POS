/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { API_PATHS } from "../utils/apiPaths";
import toast from "react-hot-toast";
const TablesContext = createContext();

export const useTables = () => useContext(TablesContext);

export const TablesProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch all tables
  const fetchTables = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_PATHS.TABLES.GET);
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
      setLoading(true);
      const res = await fetch(API_PATHS.TABLES.ADD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTable),
      });

      if (!res.ok) throw new Error("Failed to add table");

      const savedTable = await res.json();
      setTables((prev) => [...prev, savedTable]);
      toast.success("Table Added..!");
    } catch (err) {
      console.error("Error adding table:", err);
      toast.error("Table creation falied.!");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete a table by ID
  const deleteTable = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(API_PATHS.TABLES.DELETE(id), {
        method: "DELETE",
      });

      if (!res.ok)
        throw new Error("Failed to delete table");

      setTables((prev) =>
        prev.filter((table) => table._id !== id)
      );
      toast.success("Table Deleted");
    } catch (err) {
      console.error("Error deleting table:", err);
      setError(err.message);
    } finally {
      setLoading(false);
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
