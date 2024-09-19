import { Estado } from "../domain/Estado";

export type LivroDTO = {
    titulo: string;
    autor: string;
    anoDeLancamento: number;
    genero: string;
    sinopse: string;
    estado: Estado;
} // DATA TRANSFERENCE OBJECT