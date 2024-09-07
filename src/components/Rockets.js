import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserveRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  if (status) {
    return <div className="text-center text-lg">Loading, please wait...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-lg">Error loading!</div>
    );
  }

  return (
    <div className="flex flex-col gap-12 my-2 pt-10 px-24">
      {rockets.map((rocket) => (
        <section className="flex flex-row gap-2 font-sans" key={rocket.rocket_id}>
          <div className="flex-1">
            <img className="w-full" src={rocket.flickr_images[0]} alt="" />
          </div>
          <div className="flex flex-col flex-4 gap-2">
            <h2 className="text-gray-600 text-2xl font-semibold font-mono">{rocket.rocket_name}</h2>
            <p className="text-gray-600 pr-1 font-mono text-lg leading-6">
              {rocket.reserved ? (
                <span className="bg-teal-400 text-white mr-1 rounded px-1 py-1 w-28 text-base font-mono">
                  Reserved
                </span>
              ) : (
                ''
              )}
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                className="w-[10vw] h-[5vh] bg-gray-200 border border-gray-300 rounded px-2 transition duration-500 text-gray-800 text-base font-mono cursor-pointer"
                onClick={() => dispatch(cancelReservation(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                className="w-[10vw] h-[5vh] bg-blue-600 border-none text-white rounded px-2 transition duration-500 text-base font-mono cursor-pointer hover:bg-blue-800 hover:text-black"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
