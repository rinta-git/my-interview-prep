//WAP to fetch data from this api: https://jsonplaceholder.typicode.com/todos 
//display the response in a tabluar format

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  const getData = async function (url) {
    let resp = await fetch(url);
    let json = await resp.json();
    setTodos(json);
  };
  useEffect(() => {
    getData(API_URL);
  }, []);
  return (
    <div className="App">
      <table>
        <tr>
          <th>Title</th>
          <th>Status</th>
        </tr>
        {todos &&
          todos.map((item) => (
            <tr id={item.id}>
              <td>{item.title}</td>
              <td>{item.completed ? "Done" : "Not Done"}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;
