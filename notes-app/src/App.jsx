import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(""); //title
  const [description, setDescription] = useState(""); //description
  const [notes, setNotes] = useState([]); // empty list to add all notes
  const [editingIndex, setEditingIndex] = useState(null);

  function addBtn() {
    if (title.trim() == "" || description.trim() == "") return;

    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = { title, description };
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      const newNote = { title, description };
      setNotes([...notes, newNote]);
    }

    setTitle("");
    setDescription("");
  }

  function deleteBtn(index) {
    setNotes(notes.filter((_, i) => i !== index));
  }

  function editBtn(index) {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditingIndex(index);
  }

  return (
    <div className="container">
      <h1>Notes App</h1>
      <div className="content">
        <input
          type="text"
          value={title}
          id="title"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          id="description"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="addbtn" onClick={addBtn}>
          Add Note
        </button>
      </div>
      <ul className="list">
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button id="deletebtn" onClick={() => deleteBtn(index)}>
              Delete
            </button>
            <button id="editbtn" onClick={() => editBtn(index)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
