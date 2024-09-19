import { LivroDTO } from './../controller/LivroDTO';
import { Livro } from "../domain/Livro";

export class EstanteDeLivro {
    private livros: Livro[] 

    constructor(){
        this.livros = [];
    }

    cadastrarLivro(livroDTO: LivroDTO): void {
        const livro = new Livro(livroDTO);
    }
}