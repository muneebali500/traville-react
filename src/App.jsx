import { useState, Fragment } from "react";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Note from "./components/Note";

const entries = JSON.parse(localStorage.getItem("notes")) || [];

function App() {
  const [notes, setNotes] = useState([...entries]);
  console.log(notes);

  function addNote(note) {
    if (note.title === `` || note.content === ``) {
      alert(`Please fill in both the title and content fields`);
      return;
    }

    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function removeNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function updateLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  updateLocalStorage();

  return (
    <Fragment>
      <Header />
      <InputArea onAdd={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            title={note.title}
            content={note.content}
            key={note.id}
            id={note.id}
            createdAt={note.date}
            onRemove={removeNote}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
