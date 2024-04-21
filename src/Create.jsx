import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {
        console.log(result);
        setTask("");
      })
      .catch((error) => console.log(error));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
