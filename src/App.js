import React, { useEffect } from "react";
import "./App.css";

import VideoList from "./ui/VideoList";
import NewVideoForm from "./ui/NewVideoForm";
import VideoPlayer from "./ui/VideoPlayer";
import { VideoContext } from "./data/video/VideoContext";
import useOnlineStatus from "./data/hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (!isOnline) {
      alert("Você desconectou!!");
    }
  }, [isOnline]);
  return (
    <div className="App">
      {isOnline ? "Você está conectado" : "Você desconectou"}
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
