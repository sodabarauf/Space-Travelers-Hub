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
    <div className="flex flex-col gap-6 my-2 px-4 pt-8 sm:px-8 lg:gap-12 lg:my-4 lg:pt-10 lg:px-24">
      {rockets.map((rocket) => (
        <section
          className="flex flex-col sm:flex-row gap-4 font-sans"
          key={rocket.rocket_id}
        >
          <div className="flex-2 mb-4 sm:mb-0">
            <img 
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              src={rocket.flickr_images[0]}
              alt={rocket.rocket_name}
            />
          </div>
          <div className="flex flex-col flex-4 gap-2">
            <h2 className="text-gray-600 text-xl sm:text-2xl font-semibold font-mono">
              {rocket.rocket_name}
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg pr-2 leading-6 font-mono">
              {rocket.reserved && (
                <span className="bg-teal-400 text-white rounded px-2 py-1 mr-2 text-xs sm:text-base">
                  Reserved
                </span>
              )}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                type="button"
                className="w-full sm:w-[10vw] h-[5vh] bg-gray-200 border border-gray-300 rounded transition duration-500 text-gray-800 text-sm sm:text-base font-mono cursor-pointer"
                onClick={() => dispatch(cancelReservation(rocket.id))}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                className="w-full sm:w-[10vw] h-[5vh] bg-blue-600 text-white rounded transition duration-500 text-sm sm:text-base font-mono cursor-pointer hover:bg-blue-800 hover:text-black"
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
