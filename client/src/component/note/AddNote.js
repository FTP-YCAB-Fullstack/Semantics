import React, { useState, useEffect } from "react";

const AddNote = ({ editNote, setEditNote, handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteUpdate, setNoteUpdate] = useState({});

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (!editNote) {
      if (noteText.trim().length > 0) {
        handleAddNote({ text: noteText });
        setNoteText("");
      }
    } else {
      if (noteText.trim().length > 0) {
        handleAddNote({
          id: noteUpdate.id,
          text: noteText,
          date: noteUpdate.date,
        });
        setNoteText("");
        setEditNote(null);
      }
    }
  };

  useEffect(() => {
    if (editNote) {
      setNoteUpdate({
        id: editNote.id,
        text: editNote.text,
        date: editNote.date,
      });
      setNoteText(editNote.text);
    }
  }, [editNote]);

  return (
    <div className="note new">
      <textarea
        id="text-input"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small className="font-semibold">
          {characterLimit - noteText.length} Remaining
        </small>
        <button
          className="save px-3 py-1 rounded-md hover:bg-green-500 hover:text-black"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
