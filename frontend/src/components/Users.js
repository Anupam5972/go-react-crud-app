import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios.get('http://localhost:8000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/users/${id}`)
            .then(response => {
                console.log(response.data);
                window.alert('User Deleted');
                fetchUsers();
            })
            .catch(error => {
                console.error(`Error deleting user ${id}:`, error);
                window.alert('Error deleting user. Please try again.');
            });
    };

    return (
        <div className='user-container'>
            <h2>Users</h2>
            <button onClick={fetchUsers} className='button' style={{ fontFamily: 'Poppins' }}>Display Users</button>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id)} className='button' style={{ fontFamily: 'Poppins' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
