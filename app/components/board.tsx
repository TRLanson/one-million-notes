"use client";

import { DocumentData } from "firebase/firestore";
import StickyGrid from "./stickyGrid";


type BoardProps = {
  notes: DocumentData[]
}

export default function Board({notes} : BoardProps) {
    return (
        <div className="border-x-[20px] border-t-[20px] rounded-t-lg border-[#8B4513] bg-[#F5DEB3] shadow-2xl max-w-[95vw] max-h-[95vh] overflow-hidden">
            <StickyGrid notes={notes}/>
        </div>
    );
}
