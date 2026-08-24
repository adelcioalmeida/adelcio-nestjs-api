import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CadastroDto } from './dto/cadastro.dto';

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

}
