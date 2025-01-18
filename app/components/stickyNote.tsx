import { Inter } from "next/font/google";

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
      <p className={`${inter.className} px-2 py-2`}>
        {message}
      </p>
    </div>
  );

};

export default StickyNote;

