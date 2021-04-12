import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: ``,
    content: ``,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        id: uuidv4(),
        date: new Date().toLocaleString(),
      };
    });
  }

  return (
    <form>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="Title"
        value={note.title}
      />
      <textarea
        onChange={handleChange}
        name="content"
        cols="30"
        rows="5"
        placeholder="Content"
        value={note.content}
      ></textarea>
      <button
        onClick={(e) => {
          onAdd(note);
          e.preventDefault();

          setNote({
            title: ``,
            content: ``,
          });

          const inputEl = document.getElementsByTagName(`input`)[0];
          inputEl.focus();
        }}
      >
        Add
      </button>
    </form>
  );
};

export default InputArea;
