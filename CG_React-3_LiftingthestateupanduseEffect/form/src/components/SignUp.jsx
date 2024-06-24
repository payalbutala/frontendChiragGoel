import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const getData = () => {
    setForm(
      "input".forEach(function (item) {
        form.push(item.value);
      })
    );
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <div className="field">
          <label>Name</label>
          <input placeholder="Enter name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input placeholder="Enter email" />
        </div>
        <div className="field">
          <label>Username</label>
          <input placeholder="Enter username" />
        </div>
        <div className="field">
          <label>Password</label>
          <input placeholder="Enter password" />
        </div>
        <div className="field btn-field">
          <button onClick={handleFormField}>Register</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
