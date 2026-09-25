import Child from "./Child";
import "../App.css";

function Parent() {
  return (
    <div>
      <h1>Student Details</h1>

      <Child
        name="Purva Bhujbal"
        course="MCA"
        age="23"
      />
    </div>
  );
}

export default Parent;