import React from 'react';

const MenuBar: React.FC = () => {
    return (
        <nav className="text-black top-0 z-50 rounded-lg my-4">
            <ul className="list-none m-0 p-0 flex justify-around">
                <li className="flex-1 text-center">
                    <a
                        className="py-2 block font-bold text-7xl whitespace-nowrap text-[#8B4513] drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]"
                        style={{ fontFamily: "'Futura', cursive"}}
                        >
                        ONE MILLION NOTES
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;
