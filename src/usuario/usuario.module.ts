import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailEhUicoValidator } from './validacao/email-eh-unico-validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUicoValidator],
})
export class UsuarioModule { }
