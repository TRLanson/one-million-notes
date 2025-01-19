import { useState } from "react";
import { useContext } from 'react';
import StickyDetails from "./stickyDetails";

type StickyNotesProp = {
    message: string;
    noteId: string;
    onClick: () => void;
    style?: React.CSSProperties;
};

const StickyNote = ({ message, noteId, onClick, style }: StickyNotesProp) => {
    return (
        <div
            className="p-5 shadow-[5px_5px_0_rgba(0,0,0,0.5)] bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg text-black 
                   flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={onClick}
            style={style}   
        >
            {message}
        </div>
    );
};

export default StickyNote;

