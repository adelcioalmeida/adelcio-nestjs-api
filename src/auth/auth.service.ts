import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CadastroDto } from './dto/cadastro.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dados: LoginDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        email: dados.email,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const senhaValida = await bcrypt.compare(dados.senha, usuario.senha);

    if (!senhaValida) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = await this.jwtService.signAsync({
      sub: usuario.id,
      email: usuario.email,
    });

    return {
      access_token: token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    };
  }

  async cadastrar(dados: CadastroDto) {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: {
        email: dados.email,
      },
    });

    if (usuarioExistente) {
      throw new ConflictException('Email já cadastrado');
    }

    const senhaHash = await bcrypt.hash(dados.senha, 10);

    const usuario = await this.prisma.usuario.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        senha: senhaHash,
      },
    });

    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };
  }
}
