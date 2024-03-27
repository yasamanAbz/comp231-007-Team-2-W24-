import React from "react";
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
} from "@livekit/components-react";
// 1️⃣ Import the react hook.
const serverUrl = process.env.REACT_APP_LIVEKIT_SERVER_URL;
const VideoCall = ({ token, roomName }) => {
  return (
    <>
      {/* Header: Call Status, Participants' Names, and Duration */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <span className="text-sm font-semibold">
          {/* <ConnectionState /> */}
        </span>
        <span className="text-lg font-bold">{/* <ParticipantName /> */}</span>
        <span className="text-sm font-semibold">00:00</span>
      </div>

      {/* Main Video Feed */}
      <div className="flex items-center justify-center flex-grow bg-gray-300">
        <LiveKitRoom
          video={true}
          audio={true}
          token={token}
          serverUrl={serverUrl}
          data-lk-theme="default"
        >
          <MyVideoConference />
          <RoomAudioRenderer />
          <ControlBar />
        </LiveKitRoom>
      </div>
    </>
  );
};
function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout tracks={tracks}>
      <ParticipantTile />
    </GridLayout>
  );
}

export default VideoCall;
