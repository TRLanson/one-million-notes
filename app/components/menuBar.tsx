import React from 'react';

const MenuBar: React.FC = () => {
    return (
        <nav className=" text-black top-0 w-[95vw] z-50 rounded-lg mb-[-15px]">
            <ul className="list-none m-0 p-0 flex justify-around">
                <li className="flex-1 text-center ">
                    <a className="block py-5 font-bold text-6xl whitespace-nowrap ">
                        ONE MILLION NOTES
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;


