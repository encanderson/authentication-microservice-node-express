export class NotFound extends Error {
  idError: number;
  constructor(field: string) {
    super(`${field} não encontrado.`);
    this.name = "NotFound";
  }
}
