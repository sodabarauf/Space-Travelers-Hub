import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);

  const handleToggleMission = (missionId, reserved) => {
    if (reserved) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  return (
    <div className="w-full mx-auto my-4 font-mono md:w-5/6">
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs">
            <th className="px-2 py-2 text-left font-semibold uppercase md:px-6 md:py-4 md:text-base">
              Mission
            </th>
            <th className="px-2 py-2 text-left font-semibold uppercase md:px-6 md:py-4 md:text-base">
              Description
            </th>
            <th className="px-2 py-2 text-left font-semibold uppercase md:px-6 md:py-4 md:text-base">
              Status
            </th>
            <th className="px-2 py-2 text-center font-semibold uppercase md:px-6 md:py-4 md:text-base">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr
              key={mission.mission_id}
              className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
            >
              <td className="px-2 py-2 border-2 border-gray-600 font-bold text-xs md:px-6 md:py-4 md:text-xl">
                {mission.mission_name}
              </td>
              <td className="px-2 py-2 border-2 border-gray-600 text-xs md:px-6 md:py-4 md:text-base">
                {mission.description}
              </td>
              <td className="px-2 py-2 border-2 border-gray-600 text-center md:px-6 md:py-4">
                <button
                  className={`px-2 py-1 rounded font-bold text-xs uppercase md:text-sm ${
                    mission.reserved ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'
                  }`}
                  type="button"
                >
                  {mission.reserved ? 'Active Member' : 'Not a Member'}
                </button>
              </td>
              <td className="px-2 py-2 border-2 border-gray-600 text-center md:px-6 md:py-4">
                <button
                  className={`px-2 py-1 rounded text-xs capitalize cursor-pointer font-bold md:text-base ${
                    mission.reserved
                      ? 'text-red-500 border border-red-500'
                      : 'text-blue-500 border border-blue-500'
                  }`}
                  onClick={() => handleToggleMission(mission.mission_id, mission.reserved)}
                  type="button"
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
