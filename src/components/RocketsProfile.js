import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <section className="font-mono">
      <h2 className="text-2xl mb-4">My Rockets</h2>
      <ul className="list-none">
        {rockets.filter((rocket) => rocket.reserved)
          .map((rocket) => (
            <li key={rocket.rocket_id} className="border border-gray-300 p-4 text-xl capitalize font-normal">
              {rocket.rocket_name}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default RocketsProfile;
