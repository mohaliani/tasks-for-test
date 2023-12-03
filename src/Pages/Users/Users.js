import React, { useState } from "react";
import "./Users.css"; // Import the Users.css file

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 28 },
    { id: 4, name: "Bob Anderson", age: 35 },
    { id: 5, name: "Emily Davis", age: 22 },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAge, setUpdatedAge] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdate = () => {
    if (editingUser) {
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id
          ? {
              ...user,
              name: updatedName || user.name,
              age: updatedAge || user.age,
            }
          : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
      setUpdatedName("");
      setUpdatedAge("");
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUpdatedName(user.name);
    setUpdatedAge(user.age);
  };

  return (
    <div className="user-table-container"> {/* Assign the container class */}
      <h1>User List</h1>
      <table className="user-table"> {/* Assign the table class */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUser?.id === user.id ? (
                  <input
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUser?.id === user.id ? (
                  <input
                    value={updatedAge}
                    onChange={(e) => setUpdatedAge(e.target.value)}
                  />
                ) : (
                  user.age
                )}
              </td>
              <td>
                {editingUser?.id === user.id ? (
                  <button className="update" onClick={handleUpdate}>
                    Save
                  </button>
                ) : (
                  <>
                    <button className="edit" onClick={() => handleEdit(user)}>
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
