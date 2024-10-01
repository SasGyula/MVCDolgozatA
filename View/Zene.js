export class Zene{
    #szuloElem
    #id
    #objektum = {}
    #gombElem
    constructor(id, szuloElem,objektum){
        this.#id = id
        this.#szuloElem = szuloElem
        this.#objektum = objektum
        this.#megjelenit()
        this.#gombElem = $("button:last")
        this.#gombElem.on("click",(event)=>{
            this.#esemeny("katt")
        }) 
    }

    #megjelenit(){
        let txt = `
        <div class="zene">
        <img src="${this.#objektum.borito}">
        <h3>${this.#objektum.nev}</h3>
        <p>${this.#objektum.eloado}</p>
        <p>${this.#objektum.raktaron}</p>
        <button id="${this.#id}">Kosárba</button>
        <div>
        `
        this.#szuloElem.append(txt)
    }

    #esemeny(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this.#id})
        window.dispatchEvent(e)
    }
}