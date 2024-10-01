import { Modell } from "../Modell/Modell.js"
import { Zene } from "../View/Zene.js"
import { ZENÉK } from "../adat.js"

export class Controller{
    #szuloElem
    #lista
    #Elem
    constructor(){
        this.#szuloElem = $(".tartalom")
        this.#lista = ZENÉK
        this.#Elem = Zene
        new Modell(this.#szuloElem, this.#lista, this.#Elem)
    }
  
}