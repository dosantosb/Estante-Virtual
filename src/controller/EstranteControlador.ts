// Digite 1 para ver livros \\         
// Digite 2 buscar livros \\          
// Digite 3 para adicionar livro \\ 
// Digite 4 para excluir livro \\  
// Digite 5 para atualizar livro \\

import { EstanteDeLivro } from "../service/EstanteDeLivro";
import prompt from "prompt-sync";

export class EstanteControlador {
    estanteDeLivro: EstanteDeLivro = new EstanteDeLivro();

    pegarEntrada(): number {
        const teclado = prompt();
        const opcaoEscolhida = +teclado('Escolha uma das opções acima: ');
        return opcaoEscolhida;
    }

    iniciar(): void {
        while(true) {
            this.mostrarOpcoes();
            const opcaoEscolhida = this.pegarEntrada();

            switch (opcaoEscolhida) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4: 
                    break;
                case 5:
                    break;
                case 9: 
                    console.log("Saindo...");
                    return;
                default:
                    console.log("Opção inválida");
                                                
            }
        }
    }
    
    mostrarOpcoes(): void {
        console.log('Nossa estante virtual! \n')
        console.log('Digite 1 para ver livros');
        console.log('Digite 2 buscar livros');
        console.log('Digite 3 para adicionar livro');
        console.log('Digite 4 para excluir livro');
        console.log('Digite 5 para atualizar livro');   
        console.log('Digite 9 para sair\n');   
    }


}