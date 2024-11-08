import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { useQuiz } from '../QuizContext';

const Navbar = () => {
  const { resetQuiz } = useQuiz();
  const location = useLocation(); // Get the current path

  // Check if the current path is "/quiz" to determine if the link should be disabled
  const isQuizPage = location.pathname === "/quiz";

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleQuizClick = () => {
    if (!isQuizPage) {
      resetQuiz();
    }
    handleToggle();
  };

  return (
    <nav className="sticky top-0 flex justify-between items-center p-4 bg-blue-600 border-b-2 text-white z-50">
      <div className="ml-2 text-lg font-bold">
        <NavLink to="/">Quiz App</NavLink>
      </div>
      
      {/* Hamburger Icon for mobile */}
      <div className="block md:hidden" onClick={handleToggle}>
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      <div className={`absolute top-16 right-1 w-28 bg-blue-600 rounded-md shadow-md transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => `block px-4 py-2 hover:bg-blue-700 ${isActive ? 'underline' : ''}`}
          onClick={handleToggle}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `block px-4 py-2 hover:bg-blue-700 ${isActive ? 'underline' : ''}`}
          onClick={handleToggle}
        >
          About
        </NavLink>
        <NavLink 
          to="/quiz" 
          className={({ isActive }) => `block px-4 py-2 hover:bg-blue-700 ${isActive ? 'underline' : ''} ${isQuizPage ? 'text-gray-400 cursor-not-allowed' : ''}`}
          onClick={!isQuizPage ? handleQuizClick : undefined}
          style={{ pointerEvents: isQuizPage ? 'none' : 'auto' }}
        >
          Quiz
        </NavLink>
      </div>

      {/* Navbar links for md and larger */}
      <div className="hidden md:flex space-x-4 mr-10">
        <NavLink 
          to="/" 
          className={({ isActive }) => `pl-4 font-semibold hover:underline ${isActive ? 'underline' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `pl-4 font-semibold hover:underline ${isActive ? 'underline' : ''}`}
        >
          About
        </NavLink>
        <NavLink 
          to="/quiz" 
          className={({ isActive }) => `pl-4 font-semibold hover:underline ${isActive ? 'underline' : ''} ${isQuizPage ? 'text-gray-300 cursor-not-allowed' : ''}`}
          onClick={!isQuizPage ? handleQuizClick : undefined}
          style={{ pointerEvents: isQuizPage ? 'none' : 'auto' }}
        >
          Quiz
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
