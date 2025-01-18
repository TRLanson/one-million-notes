"use client";

import StickyGrid from "./stickyGrid";

export default function Board() {
    return (
        <div className="border-[20px] border-[#8B4513] bg-[#F5DEB3] rounded-lg shadow-2xl max-w-[95vw] max-h-[95vh] overflow-hidden">
            <StickyGrid />
        </div>
    );
}
