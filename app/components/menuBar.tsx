import React from 'react';

const MenuBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white fixed top-0 w-full z-50">
            <ul className="list-none m-0 p-0 flex justify-around">
                <li className="flex-1 text-center">
                    <a href="/home" className="block py-5 font-bold hover:underline">
                        Home
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a href="/about" className="block py-5 font-bold hover:underline">
                        Our Story
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a href="/contact" className="block py-5 font-bold hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;


