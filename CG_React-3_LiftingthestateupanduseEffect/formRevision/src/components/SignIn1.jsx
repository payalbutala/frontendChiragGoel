// Using Same Handler
const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  function handleFormField(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleRegistration() {
    console.log("form", form);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <div className="user-data">
        <div className="field">
          <label>Name</label>
          <input
            onChange={handleFormField}
            id="Name"
            placeholder="Enter Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            onChange={handleFormField}
            id="Email"
            placeholder="Enter Email"
          />
        </div>
        <div className="field">
          <label>Username</label>
          <input
            onChange={handleFormField}
            id="Username"
            placeholder="Enter Username"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            onChange={handleFormField}
            id="Password"
            placeholder="Enter Password"
          />
        </div>
        <div className="field btn-field">
          <button onClick={handleRegistration}>Register</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
