"use client";

import { createPortal } from "react-dom";

type StickyDetailsProps = {
  noteId: string;
  onClose: () => void;
  color: string;
  font: string;
  data: string;
};

const StickyDetails = ({ noteId, onClose, color, font, data }: StickyDetailsProps) => {

  return createPortal(
    <div
      className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 w-[min(80vw,80vh)] h-[min(80vw,80vh)] border-2 border-black rounded-lg 
                 shadow-[10px_10px_0_rgba(0,0,0,0.5)] text-black p-6"
      style={{ backgroundColor: color, fontFamily: font }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-black font-bold text-4xl"
      >
        X
      </button>

      <h2 className="text-xl font-bold mb-4">Note ID: {noteId}</h2>
      <p className="text-base leading-relaxed">
        {data}
      </p>
    </div>,
    document.body
  );
};

export default StickyDetails;
