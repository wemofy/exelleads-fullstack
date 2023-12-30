import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
      <ul>
        <li className="mb-2">
          <Link to="/profile" className="text-gray-300 hover:text-white">
            Profile
          </Link>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Settings
          </a>
        </li>
        <li className="mb-2">
          <Link
            to="/profile/update-password"
            className="text-gray-300 hover:text-white"
          >
            Update Password
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
