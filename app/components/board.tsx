"use client";

import { DocumentData } from "firebase/firestore";
import StickyGrid from "./stickyGrid";
import BoardCorner from "./boardCorner";

type BoardProps = {
  notes: DocumentData[]
}
//F5DEB3
export default function Board({notes} : BoardProps) {
    return (
        <div className="relative shadow-[8px_8px_0_rgba(0,0,0,0.7)] border-x-[40px] border-t-[40px] rounded-t-lg border-[#8B4513] bg-[#F5DEB3] w-[95vw] h-[95vh] overflow-hidden">
            <StickyGrid notes={notes}/>
        </div>
    );
}
