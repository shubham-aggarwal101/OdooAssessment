import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  // Fetch users from the API when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (phoneNumber) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${phoneNumber}`);
      setUsers(users.filter((user) => user.phoneNumber !== phoneNumber)); // Remove user from the list
    } catch (error) {
      setError("Failed to delete user.");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: 300 }}>
      <h1>Search User</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Search User"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div
            key={user.phoneNumber}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <div>
              <p style={{ fontSize: 18 }}>{user.name}</p>
              <p style={{ fontSize: 12 }}>{user.phoneNumber}</p>
            </div>
            <button
              onClick={() => handleDeleteUser(user.phoneNumber)}
              style={{ width: 150, height: 40 }}
            >
              Delete User
            </button>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default ManageUsers;
