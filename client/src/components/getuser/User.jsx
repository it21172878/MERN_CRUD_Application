import React from 'react';
import './user.css';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className="userTable">
      <Link to={'/add'} className="addButton">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Dilanka</td>
            <td>sd@gmail.com</td>
            <td>
              <button>Delete</button>
              <Link to={'/edit'}>Edit</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
