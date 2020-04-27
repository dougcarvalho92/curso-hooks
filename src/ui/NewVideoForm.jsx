import React, { useState } from "react";

export default function NewVideoForm() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const [cover, setCover] = useState("");

  function save() {
    const newVideo = {
      title,
      duration,
      url,
      cover,
    };
    //salvar
    reset();
  }
  function reset() {
    setTitle("");
    setUrl("");
    setDuration("");
    setCover("");
  }

  return (
    <div>
      <div className="form">
        <label>Título:</label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <label>Duration:</label>
        <input
          type="text"
          onChange={(event) => {
            setDuration(event.target.value);
          }}
          value={duration}
        />
        <label>Vídeo:</label>
        <input
          type="text"
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          value={url}
        />
        <label>Capa:</label>
        <input
          type="text"
          onChange={(event) => {
            setCover(event.target.value);
          }}
          value={cover}
        />
      </div>
    </div>
  );
}
