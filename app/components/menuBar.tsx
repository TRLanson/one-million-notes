import React from 'react';
import { DocumentData } from 'firebase/firestore';
import StickyCounter from './stickyCounter';

const MenuBar = ({ notes }: { notes: DocumentData[] }) => {

  return (
    <nav className="text-black top-0 z-50 rounded-lg my-4">
      <ul className="list-none m-0 p-0 flex flex-col justify-around">
        <li className="flex-1 text-center">
          <div
            className="py-0 md:py-2 block font-bold text-wrap text-3xl md:text-5xl lg:text-7xl whitespace-nowrap text-[#8B4513] drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Futura', cursive" }}
          >
            ONE MILLION NOTES
          </div>
        </li>
        <li className="flex-1 text-center">
          <div
            className="py-0 md:py-2 block font-bold text-xl lg:text-3xl whitespace-nowrap text-[#8B4513] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] text-wrap"
            style={{ fontFamily: "'Futura', cursive" }}
          >
            Goal: Get One Million Notes!
          </div>
        </li>
        <li>
          <StickyCounter notes={notes} />
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
