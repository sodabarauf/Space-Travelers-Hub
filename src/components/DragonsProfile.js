import { useSelector } from 'react-redux';

const DragonsProfile = () => {
  const { dragons } = useSelector((state) => state.dragons);
  return (
    <section className="font-mono p-4 sm:p-8 lg:p-12">
      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4">My Dragons</h2>
      <ul className="list-none">
        {dragons.filter((dragon) => dragon.reserved)
          .map((dragon) => (
            <li
              key={dragon.id}
              className="border border-gray-300 p-2 sm:p-4 lg:p-6 text-lg sm:text-xl lg:text-2xl capitalize font-normal mb-2"
            >
              {dragon.name}
              {/* Corrected JSX comment here */}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default DragonsProfile;
