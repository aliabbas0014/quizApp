import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-center py-4 mt-auto">
      <p className="text-xs md:text-sm lg:text-base text-white ">
        &copy; {new Date().getFullYear()} Quiz App. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

