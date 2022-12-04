export class ProdutoEntity {
    id: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: CaracteristicasEntity[];
    imagens: ImagesEntity[];
    categoria: string;
}

export class ImagesEntity {
    url: string;
    descricao: string;
}

export class CaracteristicasEntity {
    nome: string;
    descricao: string;
}