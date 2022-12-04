import { IsNotEmpty } from 'class-validator';

export class caracteristicaProdutoDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  descricao: string;
}
