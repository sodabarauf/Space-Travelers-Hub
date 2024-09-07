import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <section className="font-mono p-4 sm:p-8 lg:p-12">
      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4">My Rockets</h2>
      <ul className="list-none">
        {rockets.filter((rocket) => rocket.reserved)
          .map((rocket) => (
            <li
              key={rocket.rocket_id}
              className="border border-gray-300 p-2 sm:p-4 lg:p-6 text-lg sm:text-xl lg:text-2xl capitalize font-normal mb-2"
            >
              {rocket.rocket_name}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default RocketsProfile;
