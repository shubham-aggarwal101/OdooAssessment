import React, { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/users", {
        name,
        phoneNumber: phone,
      });
      alert("user registered")
      setSuccess("User registered successfully");
      setError(null);
      setName("");
      setPhone("");
    } catch (error) {
      alert("user registeration failed")
      setError(error.response.data.message);
      setSuccess(null);
    }
  };

  return (
    <>
      <h1>Register User</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit} action="/api/users" method="post">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Phone"
        />
        <br />
        <br />
        <button type="submit" style={{ width: 150, height: 40 }}>
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterUser;
