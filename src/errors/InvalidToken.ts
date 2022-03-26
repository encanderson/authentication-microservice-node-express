export class InvalidToken extends Error {
  idError: number;
  constructor(msg: string) {
    super(msg);
    this.name = "InvalidToken";
  }
}
