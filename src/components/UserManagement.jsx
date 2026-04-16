import React, { useState } from 'react';
import '../UserForm.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newUser = { ...formData, id: Date.now() };
    setUsers([...users, newUser]);
    setFormData({ name: '', email: '', role: '' }); 
  };

  return (
    <div className="container">
      <h2>Citi Account Management</h2>

      <form className="user-form" onSubmit={handleSubmit}>
        {/* Name and Role will sit side-by-side due to flex: 0 0 48% */}
        <div className="input-group">
          <label>Full Name</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Chaitali Merai" />
        </div>
        
        <div className="input-group">
          <label>Role</label>
          <input name="role" value={formData.role} onChange={handleChange} placeholder="e.g. UI Developer" />
        </div>

        {/* Email takes full width */}
        <div className="input-group full-width">
          <label>Email Address</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@citi.com" />
        </div>

        <div className="button-container">
          <button type="submit" className="submit-btn">Create User Account</button>
        </div>
      </form>

      <div className="table-wrapper">
        <table className="citi-table">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Email</th>
              <th className="table-header">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="table-row">
                  <td className="table-cell"><strong>{user.name}</strong></td>
                  <td className="table-cell">{user.email}</td>
                  <td className="table-cell">{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="empty-state">No active accounts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;