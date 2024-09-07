import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <nav className="flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-lg mx-auto py-4 px-4 sm:px-8 border-b border-gray-300">
    {/* Left Container */}
    <div className="flex justify-center items-center mb-4 sm:mb-0">
      <img src={planet} alt="Logo" className="w-12 sm:w-16" />
      <h1 className="ml-2 sm:ml-4 text-xl sm:text-2xl font-mono capitalize">
        Space Travelers&apos; Hub
      </h1>
    </div>

    {/* Links */}
    <ul className="list-none flex flex-col sm:flex-row justify-center items-center font-mono text-base sm:text-lg">
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
