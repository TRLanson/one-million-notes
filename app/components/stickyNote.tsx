import { Inter } from "next/font/google";

interface StickyNoteProps {
  style?: React.CSSProperties;
}

type StickyNotesProp = {
  message: String,
}

const inter = Inter({ weight: "400" })

const StickyNote = ({ message }: StickyNotesProp) => {
  return (
    <div className="bg-yellow-100 w-48 h-48 border-2 border-black rounded-lg shadow-2xl text-black">
      <p className={`${inter.className} px-2 py-2`}>
        {message}
      </p>
    </div>
  );
};

export default StickyNote;

