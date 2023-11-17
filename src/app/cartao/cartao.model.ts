import CheckList from "./checklist.model";

export default class Cartao{
    nome: string = '';
    descricao: string = '';
    detalhe: string = '';
    concluido: boolean = false;
    checklist: CheckList [] = [];
}