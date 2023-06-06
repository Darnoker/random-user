import React from 'react';

const UserInfo = ({ user }) => {
  const { gender, name, location, email, picture } = user;

  return (
    <div className="user-info">
      <img src={picture.large} alt="User" className="user-image" />
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Name:</strong> {`${name.title} ${name.first} ${name.last}`}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Location:</strong>{' '}
        {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`}
      </p>
    </div>
  );
};

export default UserInfo;
