export class Kosar{
    #szuloElem
    #objektum
    constructor(objektum, szuloElem){
        this.#szuloElem = szuloElem
        this.#objektum = objektum
        this.#megjelenit()
    }

    #megjelenit(){
        let txt = 
        `
    <div class="lista">
        <img src="${this.#objektum.borito}">
        <h3>${this.#objektum.nev}</h3>
        <p>${this.#objektum.eloado}</p>
    </div>
        `
        this.#szuloElem.append(txt)
    }
}