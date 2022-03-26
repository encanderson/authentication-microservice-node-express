import crypto from "crypto";
import * as bcrypt from "bcrypt";

export const hashFunction = (field: string): string => {
  const hash = crypto.createHash("sha256").update(field).digest("hex");

  return hash;
};

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};
