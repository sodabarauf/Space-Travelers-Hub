import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <nav className="flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-lg mx-auto py-4 px-4 sm:px-8 border-b border-gray-300">
    {/* Left Container */}
    <div className="flex justify-center items-center mb-4 sm:mb-0">
      <img src={planet} alt="Logo" className="w-10 sm:w-12 lg:w-16" />
      <h1 className="ml-2 text-lg sm:text-xl lg:text-2xl font-mono capitalize">
        Space Travelers&apos; Hub
      </h1>
    </div>

    {/* Links */}
    <ul className="list-none flex flex-col sm:flex-row justify-center items-center font-mono text-base sm:text-lg lg:text-xl">
      <li className="mb-2 sm:mb-0 sm:mr-4">
        <NavLink
          to="/"
          className="no-underline text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Rockets
        </NavLink>
      </li>
      <li className="mb-2 sm:mb-0 sm:mr-4">
        <NavLink
          to="/missions"
          className="no-underline text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Missions
        </NavLink>
      </li>
      <li className="mb-2 sm:mb-0 sm:mr-4">
        <NavLink
          to="/dragons"
          className="no-underline text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Dragons
        </NavLink>
      </li>
      <li className="mb-2 sm:mb-0">
        <NavLink
          to="/profile"
          className="no-underline text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
