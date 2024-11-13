import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        className="p-2 rounded-l-md border-2 border-r-0 border-gray-300"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-r-lg border-2 border-l-0 border-gray-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
