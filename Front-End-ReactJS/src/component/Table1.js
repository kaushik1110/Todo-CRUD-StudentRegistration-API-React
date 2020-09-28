import React from "react";
import "./table.css";

const Table1 = ({ data, clickOnDelete, clickOnUpdate }) => {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>SirName</th>
          <th>Age</th>
          <th>Action</th>
        </tr>

        {data.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => clickOnDelete(item._id)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => clickOnUpdate(item)}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table1;
