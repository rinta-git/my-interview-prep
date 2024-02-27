//Task: WAP to add items from an input box wen click on button. List the added items. Add two buttons to delete
//and edit. Basicaly a todo list with edit and delete options


import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);
  const [editingText, setEditingText] = useState(null);
  const [updatedText, setUpdatedText] = useState(null);
  const addItem = () => {
    const newItem = {
      id: new Date().getTime(),
      itemName: text,
    };
    setList([...list, newItem]);
    setText("");
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    const newList = [...list].map(item => {
      if(item.id === id){
        item.itemName = updatedText;
      }
      return item
    })
    setList(newList)
    setEditingText("");
    setUpdatedText("")
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      {list &&
        list.map((item) => (
          <div key={item.id}>
            {editingText === item.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              <li>{item.itemName}</li>
            )}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            {editingText === item.id ? (
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            ) : (
              <button onClick={() => setEditingText(item.id)}>Edit</button>
            )}
          </div>
        ))}
    </div>
  );
}

export default App;
