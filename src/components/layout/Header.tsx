import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const navigationData = [
  { url: '/', label: '{ Home }' },
  { url: '/about', label: '{ About }' },
  { url: '/projects', label: '{ Projects }' },
  { url: '/about', label: '{ Contact Me }' },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 w-full p-4 flex justify-end z-50">
      <nav>
        <ul className="flex">
          {navigationData.map((item, index) => (
            <li className="mx-2 text-sm" key={index}>
              <Link to={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
