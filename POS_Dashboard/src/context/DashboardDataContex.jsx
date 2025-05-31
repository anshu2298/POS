import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { API_PATHS } from "../utils/apiPaths";
const DashboardDataContext = createContext();

export const DashboardDataProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState("weekly");
  const [orderStats, setOrderStats] = useState([]);
  const [chefOrders, setChefOrders] = useState([
    {
      id: 1,
      name: "Manesh",
      orders: 0,
      duration: 0,
      orderIds: [],
    },
    {
      id: 2,
      name: "Pritam",
      orders: 0,
      duration: 0,
      orderIds: [],
    },
    {
      id: 3,
      name: "Yash",
      orders: 0,
      duration: 0,
      orderIds: [],
    },
    {
      id: 4,
      name: "Tenzen",
      orders: 0,
      duration: 0,
      orderIds: [],
    },
  ]);

  // Fetch and distribute incoming orders to chefs with least prep time
  const fetchIncomingOrders = async () => {
    try {
      const res = await fetch(
        API_PATHS.ORDERS.GET_PREP_TIME
      );
      const incomingOrders = await res.json();

      const updatedChefs = [...chefOrders].map((chef) => ({
        ...chef,
        orders: 0,
        duration: 0,
      }));

      incomingOrders.forEach((order) => {
        const leastLoadedChef = updatedChefs.reduce(
          (minChef, chef) =>
            chef.duration < minChef.duration
              ? chef
              : minChef
        );

        leastLoadedChef.orders += 1;
        leastLoadedChef.duration += order.duration;
      });

      setChefOrders(updatedChefs);
    } catch (error) {
      console.error(
        "Error fetching incoming orders:",
        error
      );
    }
  };

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(API_PATHS.ORDERS.GET);
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Fetch all clients
  const fetchClients = async () => {
    try {
      const res = await fetch(API_PATHS.CUSTOMERS.GET);
      const data = await res.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  // Fetch order stats filtered by time (daily/weekly/etc.)
  const fetchOrderStats = async () => {
    try {
      const response = await fetch(
        `${API_PATHS.ORDERS.GET}?filter=${
          timeFilter || "daily"
        }`
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error("Failed to fetch orders");

      const counts = {
        Served: 0,
        "Dine In": 0,
        "Take Away": 0,
      };

      data.forEach((order) => {
        const type = order.serviceType;

        // Count service types
        if (
          Object.prototype.hasOwnProperty.call(counts, type)
        ) {
          counts[type]++;
        }

        // Count served orders only for Dine In orders that are Done
        if (
          order.status === "Done" &&
          order.serviceType === "Dine In"
        ) {
          counts.Served++;
        }
      });

      const total = Object.values(counts).reduce(
        (sum, count) => sum + count,
        0
      );

      const stats = Object.entries(counts).map(
        ([type, count]) => ({
          type,
          count,
          percentage: total
            ? Math.round((count / total) * 100)
            : 0,
        })
      );

      setOrderStats(stats);
    } catch (error) {
      console.error("Error fetching order stats:", error);
    }
  };

  // Refetch all basic dashboard data
  const refetchAll = async () => {
    setLoading(true);
    await Promise.all([fetchOrders(), fetchClients()]);
    setLoading(false);
  };

  // On first mount
  useEffect(() => {
    refetchAll();
    fetchIncomingOrders();
  }, []);

  // When time filter changes, re-fetch order stats
  useEffect(() => {
    fetchOrderStats();
  }, [timeFilter]);

  return (
    <DashboardDataContext.Provider
      value={{
        orders,
        clients,
        loading,
        refetchAll,
        chefOrders,
        orderStats,
        timeFilter,
        setTimeFilter,
      }}
    >
      {children}
    </DashboardDataContext.Provider>
  );
};

export const useDashboardData = () =>
  useContext(DashboardDataContext);
