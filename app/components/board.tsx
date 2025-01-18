"use client";

import StickyGrid from "./stickyGrid";

//#F5DEB3] light b
export default function Board() {
    return (
        <div className="border-x-[20px] border-b-[20px] border-[#8B4513] bg-[#F5DEB3] rounded-lg shadow-2xl max-w-[95vw] max-h-[85vh] overflow-hidden ">
            <StickyGrid />
        </div>
    );
}
