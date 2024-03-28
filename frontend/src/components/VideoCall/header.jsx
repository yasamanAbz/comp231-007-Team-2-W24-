import React, { useState, useEffect } from "react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
  ConnectionState,
  ParticipantName,
  useLiveKitRoom,
  useConnectionState,
} from "@livekit/components-react";

const Header = ({ room }) => {
  console.log(room);
  // const connectionState = useConnectionState(room);
  const [connectionState, setConnectionState] = useState(room.state);
  useEffect(() => {
    const handleStateChange = (newState) => {
      setConnectionState(newState);
    };
    console.log(room, "inEffect");
    room.on("stateChanged", handleStateChange);

    return () => {
      room.off("stateChanged", handleStateChange);
    };
  }, [room?.state]);
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <span className="text-sm font-semibold">{connectionState}</span>
      <span className="text-lg font-bold">
        <ParticipantName />
      </span>
      <span className="text-sm font-semibold">00:00</span>
    </div>
  );
};

export default Header;
