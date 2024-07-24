import { Foto } from '../foto/foto';

export class Comentario {
  constructor(
    public id: string,
    public texto: string,
    public fecha: Date,
    public usuario: string,
    public foto: Foto,
  ) {}
}
