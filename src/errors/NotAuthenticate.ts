export class NotAuthenticate extends Error {
  idError: number;
  constructor(msg: string) {
    super(msg);
    this.name = "NotAuthenticate";
  }
}
