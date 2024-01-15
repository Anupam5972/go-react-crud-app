import React, { useState } from 'react';
import axios from 'axios';
import './UserDetail.css';
import './button.css';

const UserDetail = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);

    const fetchUserById = () => {
        axios.get(`http://localhost:8000/users/${userId}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
                console.error(`Error fetching user ${userId}:`, error);
                window.alert('User Not Found');
            });
    };

    return (
        <div className='user-detail-container'>
            <h2>User Details</h2>
            <div className='space-between'>
            <label>
                Enter User ID: <br></br>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </label>
            </div>
            <button onClick={fetchUserById} className='button' style={{fontFamily: 'Poppins'}}>Display User by ID</button>
            {user && (
                <table className='user-display'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserDetail;
