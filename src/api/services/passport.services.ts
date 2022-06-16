import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as BearerStrategy } from "passport-http-bearer";

import { AuthRepository } from "../repositories";
import {
  AccessToken,
  hashFunction,
  comparePassword,
  generateCode,
} from "@src/utils";
import { Blocklist } from "../subscribers";
import { htmlVerify } from "../models";
import { sendEmail } from "./";

passport.use(
  new LocalStrategy(
    {
      usernameField: "cpf",
      passwordField: "password",
    },
    async (cpf, password, done) => {
      try {
        const user_id = hashFunction(cpf);
        const user = await AuthRepository.verifyUser(user_id);

        await comparePassword(password, user.password);

        delete user.password;

        const code = generateCode();

        await sendEmail(user.email, "Código de Verificação", htmlVerify(code));

        await AuthRepository.update(user_id, { code: code });

        done(null, {
          app: user.app,
          user_id: user_id,
          id: user.id,
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      await Blocklist.verifyToken(token);
      const payload = AccessToken.verifyToken(token);
      done(null, payload);
    } catch (err) {
      if (err.message === "jwt expired") {
        done(err, null);
      } else {
        done(err);
      }
    }
  })
);

export const initialize = (app: express.Application): void => {
  app.use(passport.initialize());
};
