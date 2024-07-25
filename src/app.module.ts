import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './models/usuario/usuario.controller';
import { FotoController } from './models/foto/foto.controller';
import { ComentarioController } from './models/comentario/comentario.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsuarioController,
    FotoController,
    ComentarioController,
  ],
  providers: [AppService],
})
export class AppModule {}
