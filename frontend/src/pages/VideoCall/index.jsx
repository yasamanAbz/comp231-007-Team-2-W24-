import React, { useState, useEffect } from "react";
import VideoCall from "components/VideoCall";

const VideoCallPage = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const backendUrl = process.env.BACKEND_URL;
    // Fetch the token from your server for the current user
    // and set it in the state
    fetch(`${backendUrl}/livekit/token?room=my-room&identity=user1`)
      .then((response) => response.json())
      .then((data) => setToken(data.token))
      .catch((error) => console.error("Error fetching token:", error));
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <VideoCall token={token} roomName="my-room" />
    </div>
  );
};

export default VideoCallPage;
