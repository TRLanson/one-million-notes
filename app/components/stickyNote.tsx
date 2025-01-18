import { useState } from "react";
import { useContext } from 'react';
import StickyDetails from "./stickyDetails";

interface StickyNoteProps {
    style?: React.CSSProperties;
}

const StickyNote = ({ style }: StickyNoteProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl text-black" style={style} onClick={handleClick}>
            {isOpen && <StickyDetails />}
        </div>
    );
};

export default StickyNote;