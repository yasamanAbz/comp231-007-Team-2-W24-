import React from "react";
import { useRoom, VideoRenderer } from "@livekit/react-core";

const VideoCall = ({ token, roomName }) => {
  const { room, participants, localParticipant, isConnecting, error } = useRoom(
    { url: process.env.REACT_APP_LIVEKIT_SERVER_URL, token }
  );

  if (isConnecting) {
    return <div>Connecting...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Room: {roomName}</h2>
      <div>
        <h3>Local Participant</h3>
        {localParticipant && <VideoRenderer participant={localParticipant} />}
      </div>
      <div>
        <h3>Participants</h3>
        {participants.map((participant) => (
          <div key={participant.sid}>
            <h4>{participant.identity}</h4>
            <VideoRenderer participant={participant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCall;
