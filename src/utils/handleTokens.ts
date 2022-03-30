import { Request, Response } from "express";

import { User } from "@src/@types";
import { RefreshToken, AccessToken } from "@src/utils";

export const getTokens = (
  req: Request
): { accessToken: string; refreshToken: string } => {
  const authHeader = req.headers.authorization;

  const parts = authHeader.split(" ");

  let accessToken: string;

  if (parts.length === 2) {
    accessToken = parts[1];
  }
  const refreshToken = req.header("refresh-token");

  return { accessToken, refreshToken };
};

export const setHeaderTokens = (res: Response, user: User): User => {
  res.setHeader("Access-Token", user.accessToken);
  res.setHeader("Refresh-Token", user.refreshToken);

  delete user.accessToken;
  delete user.refreshToken;

  return user;
};

export const setNewCredentials = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { refreshToken } = getTokens(req);

  const credentials = await RefreshToken.verifyToken(refreshToken);

  const user = JSON.parse(credentials);

  const accessToken = AccessToken.generateToken({
    userId: user.userId,
    expires: "15m",
    app: JSON.parse(credentials).app,
    id: user.id,
  });

  const { newRefreshToken } = await RefreshToken.generateToken(user);

  await RefreshToken.deleteToken(refreshToken);

  setHeaderTokens(res, {
    accessToken: accessToken,
    refreshToken: newRefreshToken,
  });
};
