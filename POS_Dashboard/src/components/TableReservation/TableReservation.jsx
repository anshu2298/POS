import Table from "./Table";
import StatusLegend from "./StatusLegend";
import "./TableReservation.css";
import { useTables } from "../../context/TablesContext";

const TableReservation = () => {
  const { tables } = useTables();

  return (
    <section className='table-card'>
      <div className='table-header'>
        <h2>Tables</h2>
        <StatusLegend />
      </div>
      <div className='tables-grid'>
        {tables.map((table) => (
          <Table
            key={table._id}
            number={table.name || table.number}
            reserved={table.reserved}
          />
        ))}
      </div>
    </section>
  );
};

export default TableReservation;
