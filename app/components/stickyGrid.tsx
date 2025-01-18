"use client";

import { useMemo } from "react";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import StickyNote from "./stickyNote";

const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const randomRotation = useMemo(() => Math.random() * 60 - 30, []); 
    const randomXOffset = useMemo(() => Math.random() * 50 - 25, []); 
    const randomYOffset = useMemo(() => Math.random() * 50 - 25, []); 

    return (
        <div
            style={{
                ...style,
                transform: `translate(${randomXOffset}px, ${randomYOffset}px) rotate(${randomRotation}deg)`,
            }}
        >
            <StickyNote />
        </div>
    );
};

const StickyGrid = () => {
    
    return (
        <div className="w-screen h-screen">
            <AutoSizer>
                {({ width, height }) => {
                    const cellSize = 160;
                    const columnCount = Math.floor(width / cellSize);

                    return (
                        <Grid
                            columnCount={columnCount}
                            rowCount={1000}
                            columnWidth={150}
                            rowHeight={150}
                            width={width}
                            height={height}
                        >
                            {Cell}
                        </Grid>
                    );
                }}
            </AutoSizer>
        </div>
    );
};

export default StickyGrid;
