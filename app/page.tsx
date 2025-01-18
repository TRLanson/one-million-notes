"use client";

import { collection, DocumentData, getDocs } from "firebase/firestore";

import { db } from "./components/Firebase";

import { useEffect, useState } from 'react';

import Image from "next/image";
import StickyNote from "./components/stickyNote";
import StickyGrid from "./components/stickyGrid";
import TextBox from "./components/addNote";
import Board from "./components/board";
import MenuBar from "./components/menuBar";
import StickyDetails from "./components/stickyDetails";

export default function Home() {

  const [notes, setNotes] = useState<DocumentData[]>([]);

  const fetchNotes = async () => {
    const notesCollection = collection(db, 'StickyNotes');
    const notesSnapshot = await getDocs(notesCollection);
    const notesList = notesSnapshot.docs.map(doc => doc.data());
    setNotes(notesList);
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {
        notes.length >= 0 &&
        <Board notes={notes}/>
      }
    </div>
  );
}
