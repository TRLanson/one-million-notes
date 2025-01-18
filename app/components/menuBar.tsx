import React from 'react';

const MenuBar: React.FC = () => {
    return (
        <nav className="bg-[#8B4513] text-white top-0 w-[95vw] z-50 rounded-lg mb-[-15px]">
            <ul className="list-none m-0 p-0 flex justify-around">
                <li className="flex-1 text-center">
                    <a href="/home" className="block py-5 font-bold hover:underline">
                        
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a href="/about" className="block py-5 font-bold hover:underline text-6xl">
                        MILLION NOTES
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a href="/contact" className="block py-5 font-bold hover:underline">
                        
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;


