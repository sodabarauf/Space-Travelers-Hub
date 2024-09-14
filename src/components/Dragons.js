import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserveDragon } from '../redux/dragons/dragonsSlice';

function Dragons() {
  const { dragons, status, error } = useSelector((state) => state.dragons);
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
    <section className="container mx-auto p-4 max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">SpaceX Dragons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
        {dragons.map((dragon) => (
          <div key={dragon.id} className="border p-4 rounded shadow">
            <h1 className="text-xl font-semibold text-center">{dragon.name}</h1>
            <img
              src={dragon.flickr_images[0]}
              alt={dragon.name}
              className="w-full h-64 object-cover"
            />
            <p className="italic text-gray-600 text-center">{dragon.type}</p>
            <div className="mt-4 text-center">
              {dragon.reserved ? (
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => dispatch(cancelReservation(dragon.id))}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => dispatch(reserveDragon(dragon.id))}
                >
                  Reserve Dragon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dragons;
