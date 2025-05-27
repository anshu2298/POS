import { useState } from "react";
import { LiaChairSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import "./Tables.css";
import { useTables } from "../../../context/TablesContext";

const Tables = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { tables, setTables } = useTables();

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTable, setNewTable] = useState({
    name: "",
    chairs: "02",
  });

  const filteredTables = tables.filter((table) =>
    table.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleAddTable = (e) => {
    e.preventDefault();
    const nextId = tables.length + 1;
    const tableName = newTable.name.trim()
      ? newTable.name
      : String(nextId).padStart(2, "0");

    const newTableEntry = {
      id: nextId,
      name: tableName,
      chairs: newTable.chairs.toString().padStart(2, "0"),
    };

    setTables([...tables, newTableEntry]);
    setShowAddForm(false);
    setNewTable({ name: "", chairs: "02" });
  };

  const handleDeleteTable = (idToDelete) => {
    const filtered = tables.filter(
      (table) => table.id !== idToDelete
    );

    const updatedTables = filtered.map((table, index) => ({
      ...table,
      id: index + 1,
    }));

    setTables(updatedTables);
  };

  return (
    <>
      <div className='card filter-box'>
        <input
          className='filter-input'
          type='text'
          placeholder='Search tables...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IoMdSearch
          size={50}
          className='filter-icon'
        />
      </div>

      <div className='tablepage-card'>
        <h1 className='page-title'>Tables</h1>
        <div className='tablepage-grid'>
          {filteredTables.map((table) => (
            <div
              key={table.id}
              className='table-box'
            >
              <div className='tablebox-header'>
                <RiDeleteBinLine
                  size={20}
                  className='delete-icon'
                  onClick={() =>
                    handleDeleteTable(table.id)
                  }
                />
              </div>
              <div className='tablebox-content'>
                <span className='tablebox-label'>
                  Table
                </span>
                <span className='tablebox-number'>
                  {table.name}
                </span>
              </div>
              <div className='tablebox-footer'>
                <LiaChairSolid size={18} />
                <span className='chair'>
                  {table.chairs}
                </span>
              </div>
            </div>
          ))}

          <button
            className='add-table-card'
            onClick={() => setShowAddForm(true)}
          >
            <AiOutlinePlus size={25} />
          </button>
        </div>

        {showAddForm && (
          <div
            className='modal-overlay'
            onClick={() => setShowAddForm(false)}
          >
            <div
              className='add-table-modal'
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Add New Table</h2>
              <form onSubmit={handleAddTable}>
                <div className='form-group'>
                  <label>Table name (optional)</label>
                  <input
                    type='text'
                    value={newTable.name}
                    onChange={(e) =>
                      setNewTable({
                        ...newTable,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label>Chair</label>
                  <select
                    value={newTable.chairs}
                    onChange={(e) =>
                      setNewTable({
                        ...newTable,
                        chairs: e.target.value,
                      })
                    }
                  >
                    <option value='02'>02</option>
                    <option value='04'>04</option>
                    <option value='06'>06</option>
                  </select>
                </div>
                <div className='modal-actions'>
                  <button
                    type='button'
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </button>
                  <button type='submit'>Create</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tables;
