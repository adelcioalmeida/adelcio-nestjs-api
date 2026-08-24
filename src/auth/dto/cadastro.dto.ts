import { ApiProperty } from '@nestjs/swagger';

export class CadastroDto {
    @ApiProperty({ example: 'Adelcio' })
    nome!: string;

    @ApiProperty({ example: 'adelcio@example.com' })
    email!: string;

    @ApiProperty({ example: 'senha123' })
    senha!: string;
}