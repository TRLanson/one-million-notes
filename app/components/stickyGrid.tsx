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

const Cell = ({ columnIndex, rowIndex, style, data }: GridChildComponentProps) => {
    const { notes, columnCount, handleNoteClick, selectedNote } = data;

    const index = rowIndex * columnCount + columnIndex;
    const noteData = notes[index];

 

    const randomRotation = useMemo(() => Math.random() * 60 - 30, []);
    const randomXOffset = useMemo(() => Math.random() * 50 - 25, []);
    const randomYOffset = useMemo(() => Math.random() * 50 - 25, []);

    const noteId = noteData?.id ?? index.toString();    
  
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

          
                 <StickyNote
                 message={message}
                 noteId={noteId}
                 onClick={() => handleNoteClick(noteId)}


             

        </div>
    );

};

const StickyGrid = ({ notes }: DocumentData) => {

    const [selectedNote, setSelectedNote] = useState<string | null>(null);


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
                rowCount={1000}
                columnWidth={160}
                rowHeight={160}
                width={width}
                height={height}
                itemData={{
                  notes,
                  columnCount,
                  handleNoteClick,
                  selectedNote,
                }}
              >
                {Cell}
              </Grid>

              {selectedNote && (
                <StickyDetails
                  noteId={selectedNote}
                  onClose={handleClose}
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
