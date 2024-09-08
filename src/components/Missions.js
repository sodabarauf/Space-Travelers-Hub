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
    <div className="w-5/6 mx-auto my-4 font-mono">
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">
          Error:
          <span>{error}</span>
        </p>
      )}
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <th className="px-6 py-4 text-left font-semibold uppercase">Mission</th>
            <th className="px-6 py-4 text-left font-semibold uppercase">Description</th>
            <th className="px-6 py-4 text-left font-semibold uppercase">Status</th>
            <th className="px-6 py-4 text-center font-semibold uppercase">Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.mission_id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
              <td className="px-6 py-4 border-2 border-gray-600 font-bold text-xl">
                {mission.mission_name}
              </td>
              <td className="px-6 py-4 border-2 border-gray-600">{mission.description}</td>
              <td className="px-6 py-4 border-2 border-gray-600 text-center">
                <button
                  className={`px-2 py-1 rounded font-bold text-xs uppercase font-mono ${
                    mission.reserved ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'
                  }`}
                  type="button"
                >
                  {mission.reserved ? 'Active Member' : 'Not a Member'}
                </button>
              </td>
              <td className="px-6 py-4 border-2 border-gray-600 text-center">
                <button
                  className={`px-2 py-1 rounded text-base capitalize cursor-pointer font-mono font-bold ${
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
