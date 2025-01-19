import { DocumentData } from "firebase/firestore";

type StickyCounterProps = {
  notes: DocumentData[];
};

const StickyCounter = ({ notes }: StickyCounterProps) => {
  return (
    <div className="fixed top-14 right-4 p-2">
      <p className="text-3xl text-bold text-[#8B4513] "
      style={{ fontFamily: "'Futura', cursive"}}
      >
        #Notes: {notes.length}</p>
    </div>
  );
}

export default StickyCounter;