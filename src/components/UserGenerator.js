import React, { useState } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';

const UserGenerator = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const userData = response.data.results[0];
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Random User Generator</h1>
        <button className="button" onClick={fetchRandomUser}>
          Fetch Random User
        </button>
        <div className="user-info-container">
          {user && (
            <div className="user-card">
              <UserInfo user={user} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserGenerator;
