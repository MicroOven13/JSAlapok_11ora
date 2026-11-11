<<<<<<< HEAD
const focimElem = document.getElementById("focim")
focimElem.textContent = "Mátrix Rendszer"   

const statuszElemek = document.getElementsByClassName("statusz-szoveg")
console.log(statuszElemek)
console.log(statuszElemek.length) /* lista hossza */

statuszElemek[0].textContent="Rendszer ellenőrzése folyamatban..."
statuszElemek[1].textContent="Kapcsolódás a hálózathoz..."

const listaElemek = document.querySelectorAll(".lista-elem")/* ha query sellectort hasznalunk es van egy class akkor kell egy . a meghivott fugveny elejere */

console.log(listaElemek[0].textContent) /* textcontenttel csak a szoveget kapjuk meg */

listaElemek[1].textContent="Szerver állapot: ONLINE"

const nevInput = document.querySelector("#jatekos-nev-input") /* a # miatt tudja hogy ez egy ID */

const inditoGomb = document.querySelector("#indito-gomb")

const eredmenyDiv = document.getElementById("eredmeny")

inditoGomb.addEventListener("click",fuggveny)
function fuggveny(){
    const gombFelirat=inditoGomb.textContent
    const jatekosNev=nevInput.value



    eredmenyDiv.insertAdjacentHTML("beforeend",`<span>${jatekosNev}, ${gombFelirat} </span>`)
    eredmenyDiv.textContent= ` ${jatekosNev}, ${gombFelirat}`
}
=======
const focimElem=document.getElementById("focim")
focimElem.textContent="focim"

let statuszElemek=document.getElementsByClassName
statuszElemek.textContent="statuszElemek"

console.log(statuszElemek)  








let listaElem=document.querySelectorAll(".listaElem")
listaElemek.textContent="listaElem"
>>>>>>> f5c4884e7a71a0f78b834d76673e94ff78ec89e5
