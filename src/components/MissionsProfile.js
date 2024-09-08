import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissionsId = useSelector((state) => state.missions.joinedMissions);
  const joinedMissions = missions.filter(
    (mission) => joinedMissionsId.includes(mission.mission_id),
  );

  return (
    <div className="w-5/6 mx-auto my-4 font-mono">
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl mb-4">My Missions</h2>
        <ul className="list-none space-y-2">
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id} className="border border-gray-300 p-4 text-xl capitalize font-normal">
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </section>
      <div className="my_missions">
        <ul className="list-none p-0 border border-gray-300 rounded-md w-full">
          {joinedMissions.map((mission) => (
            <li
              key={mission.mission_id}
              className={`py-2 px-4 border-b border-gray-300 ${mission === joinedMissions[joinedMissions.length - 1] ? 'border-none' : ''}`}
            >
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MissionsProfile;
