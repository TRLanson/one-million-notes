import Image from "next/image";
import StickyNote from "./components/stickyNote";
import StickyGrid from "./components/stickyGrid";
import TextBox from "./components/addNote";
import Board from "./components/board";
import MenuBar from "./components/menuBar";
import StickyDetails from "./components/stickyDetails";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen font-sans">
      <MenuBar />
      <div className="">
        <Board />
      </div>

    </div>

  );
}
