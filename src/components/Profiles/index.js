import React from 'react';
import { useSelector } from 'react-redux';
import { Profile, ProfileDetail } from './Profile';

const Profiles = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const joinedMissions = missions.filter((mission) => mission.joined);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-grid">
      <Profile title="My Missions">
        {joinedMissions.length > 0 &&
          joinedMissions.map(({ id, name }) => (
            <ProfileDetail key={id} name={name} />
          ))}
        {joinedMissions <= 0 && <ProfileDetail name="No Missions Joined" />}
      </Profile>
      <Profile title="My Rockets">
        {rocketsReserved.length > 0 &&
          rocketsReserved.map(({ id, rocket_name: name }) => (
            <ProfileDetail key={id} name={name} />
          ))}
        {rocketsReserved <= 0 && <ProfileDetail name="No Rocket Reserved" />}
      </Profile>
    </div>
  );
};

export default Profiles;
