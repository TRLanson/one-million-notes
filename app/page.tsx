import Image from "next/image";
import StickyNote from "./components/stickyNote";
import TextBox from "./components/addNote";

export default function Home() {
  return (
    <div>
      <StickyNote/>
      <TextBox/>
    </div>
  );
}
