import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Usuario } from './usuario';

@Controller('usuario')
export class UsuarioController {
  usuario: Usuario[] = [];

  constructor(private readonly appService: AppService) {}

  //Obtiene todos los usuarios
  @Get()
  obtenerUsuarios(): Usuario[] {
    return this.usuario;
  }

  //Obtiene un usuario por su nombre de usuario
  @Get(':nombreUsuario')
  obtenerUsuarioUsername(
    @Param('nombreUsuario') nombreUsuario: string,
  ): Usuario {
    if (this.usuario.length > 0) {
      for (let i = 0; i < this.usuario.length; i++) {
        if (this.usuario[i].nombreUsuario == nombreUsuario) {
          return this.usuario[i];
        }
      }
    }
  }
  @Post()
  ingresaUsuario(@Body() usuario: Usuario, @Res() response) {
    //Valida que el usuario no exista
    if (this.usuario.length > 0) {
      for (let i = 0; i < this.usuario.length; i++) {
        if (this.usuario[i].nombreUsuario == usuario.nombreUsuario) {
          response.status(400).send('El usuario ya existe');
        }
      }
    }
    this.usuario.push(usuario);
    response.status(201).send(usuario);
  }
  @Put(':nombreUsuario')
  actualizaUsuario(
    @Param('nombreUsuario') nombreUsuario: string,
    @Body() usuario: Usuario,
    @Res() response,
  ) {
    if (this.usuario.length > 0) {
      for (let i = 0; i < this.usuario.length; i++) {
        if (this.usuario[i].nombreUsuario == nombreUsuario) {
          this.usuario[i].fechaRegistro = usuario.fechaRegistro;
          this.usuario[i].email = usuario.email;
          this.usuario[i].fotoPerfil = usuario.fotoPerfil;
          response.status(200).send(usuario);
        }
      }
    }
    response.status(404).send('Usuario no encontrado');
  }
  @Delete(':nombreUsuario')
  eliminaUsuario(
    @Param('nombreUsuario') nombreUsuario: string,
    @Res() response,
  ) {
    if (this.usuario.length > 0) {
      for (let i = 0; i < this.usuario.length; i++) {
        if (this.usuario[i].nombreUsuario == nombreUsuario) {
          this.usuario.splice(i, 1);
          response.status(200).send('Usuario eliminado');
        }
      }
    }
    response.status(404).send('Usuario no encontrado');
  }
} // fin de la clase UsuarioController
