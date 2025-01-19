"use client";

import { collection, DocumentData, onSnapshot, orderBy, query} from "firebase/firestore";

import { db } from "./components/Firebase";

import { useEffect, useState } from 'react';

import Board from "./components/board";
import MenuBar from "./components/menuBar";

export default function Home() {

  const [notes, setNotes] = useState<DocumentData[]>([]);

  const fetchNotesLive = async () => {
    const notesCollection = collection(db, 'StickyNotes');
    const q = query(notesCollection, orderBy("order"));
    onSnapshot(q, (snapshot) => {
      const notesList = snapshot.docs.map(doc => doc.data());
      setNotes(notesList);
    });
  }

  useEffect(() => {
    fetchNotesLive();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#B88A60]">

      <MenuBar/>
      
      {
        notes.length >= 0 &&
        <Board notes={notes} />
      }
    </div>
  );
}
