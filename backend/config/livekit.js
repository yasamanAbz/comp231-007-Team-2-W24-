// config/livekit.js
import { AccessToken } from "livekit-server-sdk";

const livekitConfig = {
  apiKey: process.env.LIVEKIT_API_KEY,
  apiSecret: process.env.LIVEKIT_API_SECRET,
};

export const generateToken = (room, identity) => {
  const at = new AccessToken(livekitConfig.apiKey, livekitConfig.apiSecret, {
    identity,
  });

  at.addGrant({ roomJoin: true, room });

  const token = at.toJwt();

  return token;
};
