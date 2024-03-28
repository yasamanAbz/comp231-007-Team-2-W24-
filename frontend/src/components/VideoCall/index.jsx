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
  useLiveKitRoom,
  ConnectionState,
} from "@livekit/components-react";

const serverUrl = process.env.REACT_APP_LIVEKIT_SERVER_URL;

const VideoCall = ({ token }) => {
  const { room } = useLiveKitRoom();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center flex-grow bg-gray-300">
        {room && (
          <LiveKitRoom
            video={true}
            audio={true}
            connect={true}
            token={token}
            serverUrl={serverUrl}
            data-lk-theme="default"
          >
            <div className="flex items-center justify-between p-4 bg-gray-200">
              <span className="text-sm font-semibold">
                <ConnectionState />
              </span>
              <span className="text-lg font-bold"></span>

              <span className="text-sm font-semibold"></span>
            </div>
            <MyVideoConference />
            <RoomAudioRenderer />
            <ControlBar />
          </LiveKitRoom>
        )}
      </div>
      <div className="flex items-center justify-around p-4 bg-gray-100 h-9"></div>
    </div>
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
