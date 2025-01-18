interface StickyNoteProps {
  style?: React.CSSProperties;
}

type StickyNotesProp = {
  message: String,
}

const StickyNote = ({message} : StickyNotesProp) => {
  return (
    <div className="bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl text-black">
      {message}
    </div>
  );
};

export default StickyNote;
