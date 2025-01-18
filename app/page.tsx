import Image from "next/image";
import StickyNote from "./components/stickyNote";
import AddNote from "./components/addNote";
import MenuBar from "./components/menuBar";

export default function Home() {
  return (
    <div>
      <StickyNote/>
      <AddNote/>
      <MenuBar/>
    </div>
  );
}
