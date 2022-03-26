export class NotSupport extends Error {
  idError: number;
  constructor(contentType: string) {
    super(`O tipo de conteúdo ${contentType} não é suportado`);
    this.name = "NotSupport";
  }
}
