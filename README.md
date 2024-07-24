<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## EJERCICIO

Escenario:
La empresa “Fotogramas” busca crear una red social dedicada a la fotografía, donde los usuarios puedan compartir sus imágenes, conectar con otros amantes de la fotografía, y explorar un universo visual vibrante. La idea es que Fotogramas se convierta en un espacio donde los fotógrafos profesionales y aficionados puedan mostrar su trabajo, recibir retroalimentación y descubrir nuevas tendencias.
Fotogramas ha contratado a tu equipo de desarrollo para crear la plataforma de la red social. Tu tarea es diseñar y construir la aplicación utilizando los conceptos de la programación orientada a objetos.

Objetivo:
Identifica los objetos que serían necesarios para modelar este sistema de reclutamiento.

Usuario:
nombreUsuario: identificador único del usuario
email: correo electrónico del usuario
password: contraseña del usuario
fechaRegistro: fecha de creación de la cuenta
fotoPerfil: ruta a la imagen de perfil del usuario
seguidores:  usuarios que siguen a este usuario
siguiendo:  usuarios que este usuario sigue
fotosSubidas:  fotos que este usuario ha subido


Foto
id: identificador único de la foto, generado automáticamente
ruta: ruta al archivo de imagen de la foto
descripcion: descripción de la foto
hashtags: lista de hashtags asociados a la foto
fechaSubida: fecha en la que se subió la foto
usuario: usuario que subió la foto
meGusta: lista de usuarios que le han dado "me gusta" a la foto
comentarios: lista de comentarios asociados a la foto

Comentario
id: identificador único del comentario, generado automáticamente
texto: texto del comentario
fecha: fecha y hora en la que se escribió el comentario
usuario: usuario que escribió el comentario


Relaciones

Un Usuario puede subir muchas Fotos.
Una Foto pertenece a un único Usuario.
Un Usuario puede seguir a muchos otros Usuarios.
Un Usuario puede dar "Me gusta" a muchas Fotos.
Un Usuario puede comentar muchas Fotos.
Una Foto puede tener muchos Comentarios.
Un Comentario pertenece a una única Foto.



Actividades:
✅ Crea un nuevo proyecto utilizando nestjs llamado “fotogramas-backend”
✅Crea un nuevo repositorio en github llamado “fotogramas-backend”
Sincroniza tu repositorio local con el repositorio de github
Identifica las clases necesarias según el escenario planteado y por cada clase define los atributos especificando el tipo de dato necesario.
Crea las siguientes clases y sus relaciones en la carpeta models
Usuario
Foto
Comentario
Haz un commit con el mensaje “Modelo creado” y luego haz un push al repositorio de github.
Crea una nueva rama en tu repositorio local llamada “feature_usuarios”
Crea el controlador para Usuarios que permita realizar las siguientes acciones
Registrar un nuevo usuario
Obtener un usuario según su nombreUsuario
Obtener todos los usuarios
Eliminar un usuario según su nombreUsuario
Editar foto de perfil
Seguir a un usuario
Crea un servicio para almacenar los datos de los usuarios y que permita dar soporte a las acciones que maneja el controlador de usuarios
Registrar un nuevo usuario (Verificar si existe el usuario según el correo ingresado y que el nombreUsuario sea único)
Obtener un usuario según su nombreUsuario, en caso de que el usuario no exista devolver el código 404.
Obtener todos los usuarios (Excluir la password en la lista )
Eliminar un usuarios según su nombreUsuario
Editar foto de perfil (Solo debe permitir actualizar este campo)
Seguir a un usuario (Debe validar que el usuario al que se desea seguir exista y que no tenga como seguidor al usuario solicitante )
Haz un commit con el mensaje “Módulo de usuarios” y luego haz un push al repositorio de github usando la rama “feature_usuarios”.
Haz un pull request hacia la rama master en github
En el repositorio local cambiarse a la rama ‘main’
Sincronizar los cambios con el repositorio remoto
Crear una nueva rama llamada “feature_fotos”
 Crea el controlador para Fotos que permita realizar las siguientes acciones
subir una nueva foto
Obtener una foto según su id
Obtener todas las fotos dado un usuario
Eliminar una foto según su id
Crea un servicio para almacenar los datos de las fotos y que permita dar soporte a las acciones que maneja el controlador de fotos
Crear una nueva foto, debe verificar que el usuario exista y además agregarlo a la lista de sus fotos subidas
Obtener una foto según su id
Obtener todas las fotos segun un usuario
Eliminar una foto según su id
Haz un commit con el mensaje “Módulo de fotos” y luego haz un push al repositorio de github usando la rama “feature_fotos”.
Repite los pasos 11, 12, 13
