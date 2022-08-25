import React from 'react';
import propTypes from 'prop-types';

export const Profile = ({ children, title }) => {
  return (
    <ul className="profile">
      <li>
        <h2 className="profile__title">{title}</h2>
      </li>
      {children}
    </ul>
  );
};

export const ProfileDetail = ({ name }) => {
  return (
    <li className="profile__content-wrapper">
      <h3 className="profile__content-name">{name}</h3>
    </li>
  );
};

Profile.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
};

ProfileDetail.propTypes = {
  name: propTypes.string,
};

ProfileDetail.defaultProps = {
  name: '',
};
