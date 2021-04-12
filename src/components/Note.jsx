function Note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={() => props.onRemove(props.id)}>Delete</button>
      <div className="date">Created At: {props.createdAt}</div>
    </div>
  );
}

export default Note;
