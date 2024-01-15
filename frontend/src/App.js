import React from 'react';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'Poppins' }}>Go API Frontend</h1>

      {/* Display Users */}
      <Users />

      {/* Display User by ID */}
      <UserDetail />

      {/* Create User */}
      <CreateUser />

      {/* Update User */}
      <UpdateUser />
    </div>
  );
}

export default App;
