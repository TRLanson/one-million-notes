import { Inter } from "next/font/google";

import { useState } from "react";
import { useContext } from 'react';
import StickyDetails from "./stickyDetails";

type StickyNotesProp = {
    message: string;
    noteId: string;
    onClick: () => void;
};

const inter = Inter({ weight: "400" })

const StickyNote = ({ message, noteId, onClick }: StickyNotesProp) => {
    return (
        <div
            className="bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl text-black 
                   flex items-center justify-center cursor-pointer"
            onClick={onClick}
        >
            {message}
        </div>
    );

};

export default StickyNote;

