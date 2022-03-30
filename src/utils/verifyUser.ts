import { User } from "../@types";
import { NotAuthenticate } from "../errors";
import { AccessToken } from "./";
import { sendEmail } from "../api/services";
import { htmlCode } from "../api/models";

export const isUser = async (user: User): Promise<void> => {
  if (!user) {
    throw new NotAuthenticate("Usuário não reconhecido.");
  }

  if (!user.active) {
    const token = AccessToken.generateToken({
      userId: user.userId,
      expires: "180m",
      app: user.app,
    });

    await sendEmail(
      user.email,
      "Verificação de email",
      htmlCode(token, "confirmar-registro")
    );

    throw new NotAuthenticate(
      "Email não confirmado, por favor, verifique o seu email."
    );
  }
};
