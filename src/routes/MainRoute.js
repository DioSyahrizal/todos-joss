import React, { useState } from "react";

import Todo from "../components/Todo";
import "../App.css";
import logo from "../logo.svg";

const MainRoute = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditvalue] = useState("");
  const [selectedId, setselectedId] = useState(null);

  function tambahData() {
    if (value) {
      setTodos([...todos, value]);
      setValue("");
    }
  }
  const deleteData = (idx) => {
    const tempData = [...todos];
    tempData.splice(idx, 1);
    setTodos(tempData);
  };

  const editData = () => {
    const tempData = [...todos];
    tempData[selectedId] = editValue;
    setTodos(tempData);
    setselectedId(null);
    setEditvalue(null);
  };

  const enableEdit = (idx, value) => {
    setselectedId(idx);
    setEditvalue(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Todo todos={todos} deleteData={deleteData} enableEdit={enableEdit} />

        {editValue && (
          <>
            <input
              value={editValue}
              onChange={(e) => setEditvalue(e.target.value)}
            />
            <button onClick={() => editData()}>Edit</button>
          </>
        )}

        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={() => tambahData()}>Tambah</button>
      </header>
    </div>
  );
};

export default MainRoute;
