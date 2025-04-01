import React from "react";

interface Users {
  id: number;
  name: string;
}
const UserDashboard = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();
  return (
    <main>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default UserDashboard;
