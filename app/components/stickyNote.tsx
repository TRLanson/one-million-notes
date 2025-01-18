    interface StickyNoteProps {
        style?: React.CSSProperties;
    }

    const StickyNote = ({style}: StickyNoteProps) => {
        return (
            <div className="bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl" style={style}>
            </div>
        );
    };

    export default StickyNote;