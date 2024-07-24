export class Usuario {
  constructor(
    public nombreUsuario: string,
    public email: string,
    private password: string,
    public fechaRegistro: Date,
    public fotoPerfil: string,
    public seguidores: string[],
    public siguiendo: string[],
    public fotosSubidas: string[],
  ) {}
}
