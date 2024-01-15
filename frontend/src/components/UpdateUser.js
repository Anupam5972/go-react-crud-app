import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUser.css';
import './button.css';

const UpdateUser = () => {
    const [userId, setUserId] = useState('');
    const [updatedUser, setUpdatedUser] = useState({ name: '', email: '' });

    const handleUpdateUser = () => {
        axios.put(`http://localhost:8000/users/${userId}`, updatedUser)
            .then(response => {
                console.log(response.data);
                window.alert('User updated successfully!');
            })
            .catch(error => {
                console.error(`Error updating user ${userId}:`, error);
                window.alert('Error updating user. Please try again.');
            });
    };

    return (
        <div className="update-user-container">
            <h2>Update User</h2>
            <div className="update-user-form">
                <label>
                    <span>User ID:</span>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <label>
                    <span>New Name:</span>
                    <input type="text" value={updatedUser.name} onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })} />
                </label>
                <label>
                    <span>New Email:</span>
                    <input type="text" value={updatedUser.email} onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })} />
                </label>
                <button onClick={handleUpdateUser} className='button' style={{fontFamily: 'Poppins'}}>Update User</button>
            </div>
        </div>
    );
};

export default UpdateUser;
