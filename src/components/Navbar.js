import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <nav className="flex justify-between items-center w-11/12 mx-auto py-4 px-8 border-b border-gray-300">
    {/* Left Container */}
    <div className="flex justify-center items-center">
      <img src={planet} alt="Logo" className="w-16" />
      <h1 className="ml-4 text-2xl font-mono capitalize">Space Travelers&apos; Hub</h1>
    </div>

    {/* Links */}
    <ul className="list-none flex justify-center items-center font-mono text-lg">
      <li>
        <NavLink
          to="/"
          className="no-underline mr-4 text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missions"
          className="no-underline mr-4 text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dragons"
          className="no-underline mr-4 text-primary-color tracking-wider"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Dragons
        </NavLink>
      </li>
      <li>
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
