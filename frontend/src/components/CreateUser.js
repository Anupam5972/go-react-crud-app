import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';
import './button.css';

const CreateUser = () => {
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    const handleCreateUser = () => {
        if (newUser.name.trim() === '' || newUser.email.trim() === '') {
            window.alert('Please enter both name and email before creating a user.');
            return;
        }

        axios.post('http://localhost:8000/users', newUser)
            .then(response => {
                console.log('User created successfully:', response.data);
                window.alert('User created successfully!');
            })
            .catch(error => {
                console.error('Error creating user:', error);
                window.alert('Error creating user. Please try again.');
            });
    };

    return (
        <div className="create-user-container">
            <h2>Create User</h2>
            <div className="create-user-form">
                <label>
                    Name:
                    <input type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type="text" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                </label>
                <button onClick={handleCreateUser} className='button' style={{fontFamily: 'Poppins'}}>Create User</button>
            </div>
        </div>
    );
};

export default CreateUser;
