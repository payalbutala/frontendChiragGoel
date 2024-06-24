// Using Same Handler
const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleFormField = (fieldName) => (e) => {
    return setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleRegistration = () => {
    console.log("form", form);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div className="user-data">
        <div className="field">
          <label>Name</label>
          <input onChange={handleFormField("Name")} placeholder="Enter Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            onChange={handleFormField("Email")}
            placeholder="Enter Email"
          />
        </div>
        <div className="field">
          <label>Username</label>
          <input
            onChange={handleFormField("Username")}
            placeholder="Enter Username"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            onChange={handleFormField("Password")}
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
