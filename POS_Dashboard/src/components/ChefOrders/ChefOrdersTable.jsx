import { useState } from "react";
import "./ChefOrders.css";

const ChefOrdersTable = () => {
  const [chefOrders, setChefOrders] = useState([
    { id: 1, name: "Manesh", orders: 3 },
    { id: 2, name: "Pritam", orders: 7 },
    { id: 3, name: "Yash", orders: 5 },
    { id: 4, name: "Tenzen", orders: 8 },
  ]);

  const updateOrders = (id, increment) => {
    setChefOrders(
      chefOrders.map((chef) => {
        if (chef.id === id) {
          const newOrders = increment
            ? chef.orders + 1
            : Math.max(0, chef.orders - 1);
          return { ...chef, orders: newOrders };
        }
        return chef;
      })
    );
  };

  return (
    <section className='chef-orders-card'>
      <div className='chef-table-container'>
        <table className='chef-table'>
          <thead>
            <tr>
              <th>Chef Name</th>
              <th>Orders Taken</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {chefOrders.map((chef) => (
              <tr
                className='table-body'
                key={chef.id}
              >
                <td>{chef.name}</td>
                <td className='text-center'>
                  {chef.orders.toString().padStart(2, "0")}
                </td>
                <td>
                  <div className='chef-actions'>
                    <button
                      className='action-btn decrease'
                      onClick={() =>
                        updateOrders(chef.id, false)
                      }
                      aria-label='Decrease orders'
                    >
                      -
                    </button>
                    <button
                      className='action-btn increase'
                      onClick={() =>
                        updateOrders(chef.id, true)
                      }
                      aria-label='Increase orders'
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ChefOrdersTable;
