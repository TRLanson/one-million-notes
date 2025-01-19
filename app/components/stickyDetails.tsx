"use client";


import { createPortal } from "react-dom";
import { SyntheticEvent, useRef, useState } from "react";

import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import Popup from "./popup";

type StickyDetailsProps = {
  noteId: string;
  onClose: () => void;
  color: string;
  font: string;
  data: string;
  length: number
};

const StickyDetails = ({ noteId, onClose, color, font, data, length }: StickyDetailsProps) => {

  const textRef = useRef<HTMLTextAreaElement>(null);

  const [popUp, setPopup] = useState<Boolean>(false);
  const [message, setMessage] = useState<String>("");

  const badText = (message: String) => {
    setMessage(message);
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 3000)
  }

  const addNote = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      if (textRef.current && textRef.current.value) {
        if (textRef.current.value.length < 50 || textRef.current.value.length > 300) {
          badText("Text must be at least 50 characters and at most 300 characters.")
        }
        else {
          onClose();
          await addDoc(collection(db, "StickyNotes"), {
            note: textRef.current.value,
            order: length + 1
          })
        }
      }
    }
    catch (e) {
      console.log("Error adding Note", e);
    }
  }

  return createPortal(
    <div
      className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 w-[min(80vw,80vh)] h-[min(80vw,80vh)] border-2 border-black rounded-lg 
                 shadow-[10px_10px_0_rgba(0,0,0,0.5)] text-black p-6"
      style={{ backgroundColor: color, fontFamily: font }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-black font-bold text-4xl"
      >
        X
      </button>

      <h2 className="text-xl font-bold mb-2">Note ID: {noteId}</h2>
      {data != "" ?

        <p className="leading-relaxed text-xl">
          {data}
        </p>
        :
        <div className="w-full h-full flex flex-col items-center">
          <textarea ref={textRef} style={{ backgroundColor: color }} className="text-wrap w-full h-5/6 align-text-top focus:outline-none placeholder-gray-800 text-2xl" placeholder={"Enter Text"} />
          <button onClick={addNote} style={{ backgroundColor: color }} className="w-1/4 h-20 border-2 border-black rounded-lg text-3xl">
            Submit
          </ button>
        </ div>
      }

      {
        popUp &&
        <Popup message={message} />
      }


    </div>,
    document.body
  );
};

export default StickyDetails;
