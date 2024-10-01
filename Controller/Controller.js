import { Modell } from "../Modell/Modell.js"
import { Kosar } from "../View/Kosar.js"
import { Zene } from "../View/Zene.js"


export class Controller{
    #szuloElem
    #kosarElem
    #lista = []
    #Elem
    #Modell
    #Kosar
    constructor(){
        this.#Modell = new Modell
        this.#szuloElem = $(".tartalom")
        this.#kosarElem = $(".kosar")
        this.#lista = this.#Modell.getLista()
        this.#Elem = Zene
        this.#Kosar = Kosar
        this.#megjelenit(this.#lista, this.#szuloElem, this.#Elem)
        this.#esemeny()
    }
    #esemeny(){
        $(window).on("katt", ((event)=> {
            this.#szuloElem.empty()
            this.#Modell.setLista(event.detail)     
            this.#megjelenit(this.#lista, this.#szuloElem, this.#Elem)
            this.#Modell.kosarba(event.detail)
            this.#kosarElem.empty()
            this.#kosarMegjelenit(this.#Modell.getKosarlista(), this.#kosarElem, this.#Kosar)
        }))
    }
    #megjelenit(lista,szuloElem, Elem){
        for(let i = 0; i<lista.length; i++){
            new Elem(i,szuloElem,lista[i])
        }
    }
    #kosarMegjelenit(lista, szuloElem, Elem){
        for(let i = 0; i<lista.length;i++){
            new Elem(lista[i] ,szuloElem)
        }
    }
}