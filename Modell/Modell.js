export class Modell{
    #kosarLista = []
    #lista = []
    #szuloElem
    #Elem
    constructor(szuloElem, lista, Elem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#Elem = Elem
        this.#megjelenit(this.#lista, this.#szuloElem, this.#Elem)
    }
    #megjelenit(lista,szuloElem, Elem){
        for(let i = 0; i<lista.length; i++){
            new Elem(i,szuloElem,lista[i])
        }
    }
}