
import React from 'react';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-6 sm:px-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Calculator size={28} />
          <h1 className="text-xl font-bold">Conversion Insights Calculator</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hidden md:block">
              <a href="#" className="hover:text-accent transition-colors duration-200">Home</a>
            </li>
            <li className="hidden md:block">
              <a href="#" className="hover:text-accent transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
