import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { ProdutoRepository } from './produto.repository';
import { v4 as uuid } from 'uuid';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) { }

  @Post()
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
    produtoEntity.categoria = dadosDoProduto.categoria;
    produtoEntity.descricao = dadosDoProduto.descricao;
    produtoEntity.imagens = dadosDoProduto.imagens;
    produtoEntity.nome = dadosDoProduto.nome;
    produtoEntity.quantidadeDisponivel = dadosDoProduto.quantidadeDisponivel;
    produtoEntity.valor = dadosDoProduto.valor;
    produtoEntity.id = uuid();

    this.produtoRepository.salvar(produtoEntity);

    return produtoEntity;
  }

  @Get()
  async listarProdutos() {
    return this.produtoRepository.listar();
  }

  @Put('/:id')
  async atualizaProduto(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
    const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados)

    return produtoAtualizado;
  }

  @Delete('/:id')
  async removeProduto(@Param('id') id: string) {
    const produtoRemovido = await this.produtoRepository.remove(id);

    return {
      produto: produtoRemovido,
      message: 'Produto removido com sucesso'
    }
  }

}
