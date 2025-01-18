import { useState } from "react";
import StickyDetails from "./stickyDetails";

interface StickyNoteProps {
    style?: React.CSSProperties;
}

const StickyNote = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="z-0 bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl text-black" onClick={handleClick}>
            {showDetails &&  <StickyDetails/>}

        </div>
    );
};

export default StickyNote;