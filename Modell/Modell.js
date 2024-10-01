
import { ZENÉK } from "../adat.js"

export class Modell{
    #kosarLista = []
    #lista = []
    constructor(){
        this.#lista = ZENÉK
        this.#kosarLista = []
    }
    getLista(){
        return this.#lista
    }
    setLista(id){
        this.#lista[id].raktaron--
        if(this.#lista[id].raktaron < 0){
            this.#lista[id].raktaron = 0
        }
    }
    kosarba(id){
        this.#kosarLista.push(this.#lista[id])
    }
    getKosarlista(){
        return this.#kosarLista
    }
}