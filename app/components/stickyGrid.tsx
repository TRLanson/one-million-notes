"use client";

import { useMemo } from "react";
import { useState } from "react";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import StickyNote from "./stickyNote";
import { DocumentData } from "firebase/firestore";
import StickyDetails from "./stickyDetails";

type ExtraProps = {
  columnCount: number,
}

const colorArray = ["#FFF68D", "#F79FD4", "#C59AF0", "#80E5FF", "#8FFFF0"];

const Cell = ({ columnIndex, rowIndex, style, data }: GridChildComponentProps) => {
  const { notes, columnCount, handleNoteClick, selectedNote, setSelectedNoteColor } = data;

  const index = rowIndex * columnCount + columnIndex;
  const noteData = notes[index];


  const randomRotation = useMemo(() => Math.random() * 60 - 30, []);
  const randomXOffset = useMemo(() => Math.random() * 50 - 25, []);
  const randomYOffset = useMemo(() => Math.random() * 50 - 25, []);
  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
  }, []);


  const noteId = noteData?.id ?? index.toString();

  let message = '';

  if (notes.length && ((rowIndex * columnCount) + columnIndex) < notes.length) {
    message = notes[rowIndex * columnCount + columnIndex].note;
    if (message.length >= 100) {
      message = message.slice(0, 100) + "...";
    }
  }

  const handleClick = () => {
    handleNoteClick(noteId);
    setSelectedNoteColor(randomColor);
  };

  return (
    <div
      style={{
        ...style,
        transform: `translate(${randomXOffset}px, ${randomYOffset}px) rotate(${randomRotation}deg)`,

      }}
    >
      <StickyNote
        message={message}
        noteId={noteId}
        onClick={() => handleClick()}
        style={{
          backgroundColor: randomColor,
        }}
      />
    </div>
  );

};

const StickyGrid = ({ notes }: DocumentData) => {

  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [selectedNoteColor, setSelectedNoteColor] = useState<string>("");

  const handleNoteClick = (noteId: string) => {
    if (selectedNote && selectedNote !== noteId) { //ignore clicks if it is from the same note
      return;
    }


    setSelectedNote((prev) => (prev === noteId ? null : noteId));
  };

  //close note from x
  const handleClose = () => {
    setSelectedNote(null);
  };

  let note = "";
  if (Number(selectedNote) < notes.length) {
    note = notes[Number(selectedNote)].note;
  }


  return (
    <div className="w-screen h-screen">
      <AutoSizer>
        {({ width, height }) => {
          const cellSize = 160;
          const columnCount = Math.floor(width / cellSize);

          return (
            <>
              <Grid
                columnCount={columnCount}
                rowCount={90909}
                columnWidth={160}
                rowHeight={160}
                width={width}
                height={height}
                itemData={{
                  notes,
                  columnCount,
                  handleNoteClick,
                  selectedNote,
                  setSelectedNoteColor,
                }}
              >
                {Cell}
              </Grid>

              {selectedNote && (
                <StickyDetails
                  noteId={selectedNote}
                  onClose={handleClose}
                  color={selectedNoteColor}
                  data={note}
                />
              )}
            </>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default StickyGrid;
