import React, { useState } from 'react';
import { Link } from 'react-scroll';

interface HeaderProps {
  isHovered: boolean;
  handleHoverEnter: () => void;
  handleHoverLeave: () => void;
}
const navigationData = [
  { url: '/', id: 'home', label: '{ Home }' },
  { url: '/about', id: 'about', label: '{ About }' },
  { url: '/projects', id: 'projects', label: '{ Projects }' },
  { url: '/about', id: 'contact', label: '{ Contact Me }' },
];

const Header: React.FC<HeaderProps> = ({
  isHovered,
  handleHoverEnter,
  handleHoverLeave,
}) => {
  return (
    <header className="fixed top-0 w-full p-4 flex justify-end z-50">
      <nav>
        <ul className="flex">
          {navigationData.map((item, index) => (
            <li className="mx-2 text-sm" key={index}>
              <Link
                className="cursor-pointer hover:text-primary-3"
                to={item.id}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                activeClass="text-primary-3"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
