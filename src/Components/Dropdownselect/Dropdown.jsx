import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={toggleDropdown}
        className="w-full text-left bg-white border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center shadow-sm hover:border-gray-400 focus:outline-none"
      >
        <span>{selectedOption}</span>
        <IoIosArrowDown className="text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li
              onClick={() => handleOptionClick("Option 1")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Option 1
            </li>
            <li
              onClick={() => handleOptionClick("Option 2")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Option 2
            </li>
            <li
              onClick={() => handleOptionClick("Option 3")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
