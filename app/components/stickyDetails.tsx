"use client";

import { createPortal } from "react-dom";

const StickyDetails = () => {
  return createPortal( // render it ouside the dom so it doesnt get covered
    <div className="w-screen h-screen">
      <div
      className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-screen h-screen bg-yellow-100 border-2 border-black rounded-lg 
                 shadow-[10px_10px_0_rgba(0,0,0,0.5)] text-black p-6"
    >
      <h2 className="text-xl font-bold mb-2">Anonymous</h2>
      <p className="text-lg mb-1">18 years old</p>
      <p className="text-lg mb-4">Toronto, ON</p>
      <p className="text-base leading-relaxed">
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old
      </p>
    </div>
    </div>,
    document.body
  );
};

export default StickyDetails;
