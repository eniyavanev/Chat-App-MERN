import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // optional for extra custom styling
  dark?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
  dark = false,
}) => {
  const themeClass = dark ? "bg-gray-800 text-white" : "bg-white text-gray-700";

  return (
    <div
      className={`${themeClass} rounded-2xl flex items-center px-4 py-2 shadow-xl shadow-black/20  ${className}`}
    >
      <IoSearch className="text-xl" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full ml-3 bg-transparent focus:outline-none text-sm sm:text-base placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchInput;
