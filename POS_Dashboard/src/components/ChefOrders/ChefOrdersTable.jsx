import "./ChefOrders.css";

const ChefOrdersTable = ({ chefOrders }) => {
  return (
    <section className='chef-orders-card'>
      <div className='chef-table-container'>
        <table className='chef-table'>
          <thead>
            <tr>
              <th>Chef Name</th>
              <th>Orders Taken</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ChefOrdersTable;
