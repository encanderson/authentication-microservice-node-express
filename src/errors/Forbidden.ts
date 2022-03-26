export class Forbidden extends Error {
  idError: number;
  constructor(msg: string) {
    super(`Acesso negado - ${msg}`);
    this.name = "Forbidden";
  }
}
