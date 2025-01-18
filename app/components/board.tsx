"use client";

import { DocumentData } from "firebase/firestore";
import StickyGrid from "./stickyGrid";

type BoardProps = {
  notes: DocumentData[]
}

export default function Board({notes} : BoardProps) {
    return (
        <div className="border-[20px] border-[#8B4513] bg-[#F5DEB3] rounded-lg shadow-2xl max-w-[95vw] max-h-[95vh] overflow-hidden">
            <StickyGrid notes={notes}/>
        </div>
    );
}
