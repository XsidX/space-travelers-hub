import React from 'react';
import { useSelector } from 'react-redux';
import { Profile, ProfileDetail } from './Profile';

const Profiles = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <div className="profile-grid">
      <Profile title="My Missions">
        {joinedMissions.length > 0 &&
          joinedMissions.map(({ id, name }) => (
            <ProfileDetail key={id} name={name} />
          ))}
        {joinedMissions <= 0 && <ProfileDetail name="No Missions Joined" />}
      </Profile>
    </div>
  );
};

export default Profiles;
