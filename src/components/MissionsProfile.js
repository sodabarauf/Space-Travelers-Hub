import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissionsId = useSelector((state) => state.missions.joinedMissions);
  const joinedMissions = missions.filter(
    (mission) => joinedMissionsId.includes(mission.mission_id),
  );

  return (
    <div className="w-full mx-auto my-4 font-mono sm:w-4/5 md:w-3/4 lg:w-5/6">
      {/* My Missions Section */}
      <section className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4 sm:text-xl md:text-2xl">My Missions</h2>
        <ul className="list-none space-y-2">
          {joinedMissions.map((mission) => (
            <li
              key={mission.mission_id}
              className="border border-gray-300 p-2 text-sm sm:text-base md:text-lg sm:p-4 capitalize font-medium"
            >
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </section>

      {/* Extra Mission Information */}
      <div className="my-4">
        <ul className="list-none p-0 border border-gray-300 rounded-md w-full">
          {joinedMissions.map((mission, index) => (
            <li
              key={mission.mission_id}  {/* Use mission_id as the key */}
              className={`py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-300 text-sm sm:text-base md:text-lg ${
                index === joinedMissions.length - 1 ? 'border-none' : ''
              }`}  {/* Ensure this expression is correctly wrapped */}
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

