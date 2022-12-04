import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { caracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagensProdutoDTO } from './ImagensProduto.dto';

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  valor: number;

  @IsNotEmpty()
  @IsPositive()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @IsArray()
  @ValidateNested()
  @ArrayMinSize(3)
  @Type(() => caracteristicaProdutoDTO)
  caracteristicas: caracteristicaProdutoDTO[];

  @IsArray()
  @ValidateNested()
  @ArrayMinSize(1)
  @Type(() => ImagensProdutoDTO)
  imagens: ImagensProdutoDTO[];

  @IsNotEmpty()
  categoria: string;
}
