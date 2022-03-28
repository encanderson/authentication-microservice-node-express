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
import { NotAuthenticate } from "../../errors";

passport.use(
  new LocalStrategy(
    {
      usernameField: "cpf",
      passwordField: "password",
    },
    async (cpf, password, done) => {
      try {
        const user = await AuthRepository.verifyUser(hashFunction(cpf));

        if (!user) {
          throw new NotAuthenticate("Usuário não encontrado.");
        }

        await comparePassword(password, user.password);

        delete user.password;

        const code = generateCode();

        await sendEmail(user.email, "Código de Verificação", htmlVerify(code));

        await AuthRepository.update(hashFunction(cpf), { code: code });

        done(null, {
          app: user.app,
          userId: hashFunction(cpf),
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
