import React from 'react';
import { useSelector } from 'react-redux';

function DragonsProfile() {
  const { dragons } = useSelector((state) => state.dragons);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Dragons</h2>
      <ul className="list-disc pl-4">
        {dragons
          .filter((dragon) => dragon.reserved)
          .map((dragon) => (
            <li key={dragon.id} className="text-xl">
              {dragon.name}
            </li>
          ))}
      </ul>
    </section>
  );
}

export default DragonsProfile;
