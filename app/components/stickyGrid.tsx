"use client";

import { useMemo } from "react";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import StickyNote from "./stickyNote";
import { DocumentData } from "firebase/firestore";

type ExtraProps = {
  columnCount: number,
}

const Cell = ({ columnIndex, rowIndex, style, data }: GridChildComponentProps) => {
  const randomRotation = useMemo(() => Math.random() * 60 - 30, []);
  const randomXOffset = useMemo(() => Math.random() * 50 - 25, []);
  const randomYOffset = useMemo(() => Math.random() * 50 - 25, []);

  const notes = data[0];
  const columnCount = data[1];

  let message = '';

  if (notes.length && ((rowIndex * columnCount) + columnIndex) < notes.length) {
    message = notes[rowIndex * columnCount + columnIndex].note;
    if (message.length >= 100) {
      message = message.slice(0, 100) + "...";
    }
  }


  return (
    <div
      style={{
        ...style,
        transform: `translate(${randomXOffset}px, ${randomYOffset}px) rotate(${randomRotation}deg)`,
      }}
    >

        <StickyNote message={message} />

    </div>
  );
};

const StickyGrid = ({ notes }: DocumentData) => {

  return (
    <div className="w-screen h-screen">
      <AutoSizer>
        {({ width, height }) => {

          const cellSize = 160;
          const columnCount = Math.floor(width / cellSize);

          const dataColumnCount = [notes, columnCount]

          return (
            <Grid
              columnCount={columnCount}
              rowCount={1000}
              columnWidth={160}
              rowHeight={160}
              width={width}
              height={height}
              itemData={dataColumnCount}
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
