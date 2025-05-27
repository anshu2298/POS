import Table from "./Table";
import StatusLegend from "./StatusLegend";
import "./TableReservation.css";
import { useTables } from "../../context/TablesContext";

const TableReservation = () => {
  const { tables, setTables } = useTables();

  const toggleReservation = (id) => {
    setTables(
      tables.map((table) =>
        table.id === id
          ? { ...table, reserved: !table.reserved }
          : table
      )
    );
  };

  return (
    <section className='table-card'>
      <div className='table-header'>
        <h2>Tables</h2>
        <StatusLegend />
      </div>
      <div className='tables-grid'>
        {tables.map((table) => (
          <Table
            key={table.id}
            number={table.name || table.number}
            reserved={table.reserved}
            onClick={() => toggleReservation(table.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TableReservation;
