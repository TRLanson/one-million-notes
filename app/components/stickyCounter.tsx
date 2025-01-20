"use client";

import { DocumentData } from "firebase/firestore";

type StickyCounterProps = {
  notes: DocumentData[];
};

const StickyCounter = ({ notes }: StickyCounterProps) => {
  return (
    <div className="md:fixed md:top-24 md:right-6 md:p-2
      text-center">
      <p className="text-base md:text-xl lg:text-3xl text-bold text-[#8B4513] "
      style={{ fontFamily: "'Futura', cursive"}}
      >
        #Notes: {notes.length}</p>
    </div>
  );
}

export default StickyCounter;
