import { Body, Controller, Post, Get } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/criaProduto.dto';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) { }

  @Post()
  async criaProduto(@Body() produtos: CriaProdutoDTO) {
    this.produtoRepository.salvar(produtos);
    return produtos;
  }

  @Get()
  async listarProdutos() {
    return this.produtoRepository.listar();
  }
}
