function Child(props) {
  return (
    <div className="child">
      <h2>Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default Child;