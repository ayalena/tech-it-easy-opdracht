//Opdrachten 1 t/m 4

////////////////////////////////////////////OPDRACHT 1/////////////////////////////////////////////////////////////////
//1A. Verkrijg van elk object in de array de stock
const stock = inventory.map((tvstock) => {
    return tvstock.originalStock;
})
console.log(stock);

//1B. Verkrijg van elk object in de array hoeveel er verkocht zijn
const sold = inventory.map((tvsold) => {
    return tvsold.sold;
})
console.log(sold);

//1C
//add the arrays (separately)
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let stockTotal = stock.reduce(reducer);
console.log(stockTotal);
let soldTotal = sold.reduce(reducer);
console.log(soldTotal);
//trek ze van elkaar af
let leftToSell = stockTotal - soldTotal;
console.log(leftToSell);

//zet dit getal op de webpagina
//creeer element
const listElement = document.createElement(`p`);
//zet er iets in
listElement.textContent = leftToSell.toString();
//sla referentie op in container
const sellItems = document.getElementById('items-left-to-sell');
//zet het in de container/dom
sellItems.appendChild(listElement);


////////////////////////////////////////////////OPDRACHT 2////////////////////////////////////////////////////////////
//get all the tv type names A
const tvNames = inventory.map((tvName) => {
    return tvName.name;
})
console.log(tvNames);

//get all the objects that are sold out B
const soldOut = inventory.filter((soldOutTvs) => {
    if (soldOutTvs.originalStock === soldOutTvs.sold) {
        return true;
    }
})
console.log(soldOut);

//get all the objects that got ambilight C
const gotAmbiLight = inventory.filter((ambiLightTvs) => {
    if (ambiLightTvs.options.ambiLight === true) {
        return true;
    }
})
console.log(gotAmbiLight);

//sort the tv's from lowest to highest prize D
// inventory.sort((a, b) => {
//   return a.price - b.price;
// })
// console.log(inventory);


////////////////////////////////////////////////OPDRACHT 3//////////////////////////////////////////////////////////////
//Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen
//met de map het bedrag per object
const tvYield = inventory.map((tv) => {
    return tv.price * tv.originalStock;
})
console.log(tvYield);
//met reduce het totaal van alle objecten
let totalYield = tvYield.reduce(reducer);
console.log(totalYield);

//Geef dit in het blauw weer op de pagina.
//creeer element
const listElement2 = document.createElement(`p`);
//zet er iets in
listElement2.textContent = totalYield.toString();
//sla referentie op in container
const tvYields = document.getElementById("total-yield");
//zet het in de container/dom
tvYields.appendChild(listElement2);

//Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's.
const soldYield = inventory.map((tv) => {
    return tv.price * tv.sold;
})
console.log(soldYield);
//met reduce het totaal van alle objecten
let totalSoldYield = soldYield.reduce(reducer);
console.log(totalSoldYield);

//Geef dit in het groen weer op de pagina.
//creeer element
const listElement3 = document.createElement(`p`);
//zet er iets in
listElement3.textContent = totalSoldYield.toString();
//sla referentie op in container
const soldTvYields = document.getElementById("sold-total-yield");
//zet het in de container/dom
soldTvYields.appendChild(listElement3);


////////////////////////////////OPDRACHT 4/////////////////////////////////////////////////
//Geef de type-namen van twee random tv's weer op de pagina
//get the tv names (with find)
//first one
const tvName = inventory.find((name) => {
    if (name.name.includes('4')){
        return true;
    }
})
const tvName1 = tvName.name;
console.log(tvName1);

//zet het op de pagina
//creeer element
const tv1 = document.createElement(`p`);
//zet er iets in
tv1.textContent = tvName1.toString();
//sla referentie op in container
const tvOne = document.getElementById("tv1");
//zet het in de container/dom
tvOne.appendChild(tv1);

//second one
const secondTvName = inventory.find((name) => {
    if (name.name.includes('Q')){
        return true;
    }
})
const tvName2 = secondTvName.name;
console.log(tvName2);

//zet hem op de pagina
//creeer element
const tv2 = document.createElement(`p`);
//zet er iets in
tv2.textContent = tvName2.toString();
//sla referentie op in container
const tvTwo = document.getElementById("tv2");
//zet het in de container/dom
tvTwo.appendChild(tv2);