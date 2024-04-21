import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "./Create";
import { BsCircleFill, BsFillTrashFill ,BsFillCheckCircleFill} from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, [todos]);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/"+id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/delete/"+id)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  }


  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done?<BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>:<BsCircleFill className="icon" />}
              <p className={todo.done? "line_through":""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill classname="icon" onClick={()=>handleDelete(todo._id)}/>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
