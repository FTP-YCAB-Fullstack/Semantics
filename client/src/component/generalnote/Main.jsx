import ReactMarkdown from "react-markdown";
import React from "react";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="md:w-full md:max-h-screen">
      <div className="my-3 mb-3 md:pb-10 mx-2 border-t-8 border-red-300 md:rounded-md ">
        <span className="inline-block bg-pink-300 m-3 py-2 px-3  rounded-sm">
          Preview
        </span>
        <h1 className="text-xl uppercase align-center font-semibold tracking-wide m-2 md:m-5 md:text-2xl ">
          {activeNote.title}
        </h1>
        <ReactMarkdown className="markdown-preview p-2 md:p-8 bg-pink-300 rounded-md h-64 overflow-y-auto md:bg-transparent">
          {activeNote.body}
        </ReactMarkdown>
      </div>
      <div className="mt-5 mb-3 mx-2 rounded-sm border-t-8 border-green-300 md:mb-5 md:rounded-md">
        <span className="inline-block bg-green-300 m-3 py-2 px-3 rounded-sm">
          Edit
        </span>
        <input
          type="text"
          id="title"
          className="mx-3 my-2 px-3 py-2 md:w-5/6"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          className="p-2 md:p-8 bg-green-300 rounded-md h-64 overflow-y-auto md:bg-transparent"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Main;
