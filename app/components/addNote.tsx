import React from 'react';

const TextBox = () => {
    return (
        <input
            type="text"
            className="bg-gray-100 w-64 h-10 border border-gray-300 rounded-lg shadow-sm px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Tell us about your day..."
        />
    );
};

export default TextBox;
