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
            className="bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl text-black 
                   flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={onClick}
            style={style}
        >
            {message}
        </div>
    );
};

export default StickyNote;

