import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CadastroDto } from './dto/cadastro.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtPayload } from './strategies/jwt.strategy';

interface RequestWithUser extends Request {
  user: { userId: JwtPayload['sub']; email: JwtPayload['email'] };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dados: LoginDto) {
    return this.authService.login(dados);
  }

  @Post('cadastro')
  cadastrar(@Body() dados: CadastroDto) {
    return this.authService.cadastrar(dados);
  }

  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  perfil(@Req() req: RequestWithUser) {
    return req.user;
  }
}
