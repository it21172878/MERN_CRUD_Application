import React from 'react';
import { Link } from 'react-router-dom';
import '../adduser/add.css';

const Edit = () => {
  return (
    <div className="addUser">
      <Link to={'/'}>Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="first name"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="last name"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="email"
          ></input>
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
