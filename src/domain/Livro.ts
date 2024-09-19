import { LivroDTO } from './../controller/LivroDTO';
import { Estado } from "./Estado";

export class Livro {
    private id: string;
    private titulo: string;
    private autor: string;
    private anoDeLancamento: number;
    private genero: string;
    private sinopse: string;
    private estado: Estado;

    constructor(livroDTO: LivroDTO) {
        this.id = crypto.randomUUID();
        this.titulo = livroDTO.titulo;
        this.autor = livroDTO.autor;
        this.anoDeLancamento = livroDTO.anoDeLancamento;
        this.genero = livroDTO.genero;
        this.sinopse = livroDTO.sinopse;
        this.estado = livroDTO.estado;
    }

    marcarComoLido(): void {
        this.estado = Estado.LIDO;
    }
    marcarComoNaoLido(): void {
        this.estado = Estado.A_LER
    }
    marcarComoLendo(): void {
        this.estado = Estado.LENDO
    }

    pegarInformacoes(): string {
        return `Autor: ${this.autor}
                Ano de lançamento: ${this.anoDeLancamento}
                Genero: ${this.genero}
                Sinopse: ${this.sinopse}
        `
    }
}

