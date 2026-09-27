import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Name: " + name +
      "\nCourse: " + course
    );
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Course:</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BTech">BTech</option>
        </select>

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;