// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

////////////////////////////////OPDRACHT 1/////////////////////////////////////////////////
//verkrijg van elk object in de array de stock
const stock = inventory.map((tvstock) => {
    return tvstock.originalStock;
})
console.log(stock);

//verkrijg van elk object in de array hoeveel er verkocht zijn
const sold = inventory.map((tvsold) => {
  return tvsold.sold;
})
console.log(sold);

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


////////////////////////////////OPDRACHT 2/////////////////////////////////////////////////
//get all the tv type names
const tvNames = inventory.map((tvName) => {
  return tvName.name;
})
console.log(tvNames);

//get all the objects that are sold out
const soldOut = inventory.filter((soldOutTvs) => {
  if (soldOutTvs.originalStock === soldOutTvs.sold) {
    return true;
  }
})
console.log(soldOut);

//get all the objects that got ambilight
const gotAmbiLight = inventory.filter((ambiLightTvs) => {
  if (ambiLightTvs.options.ambiLight === true) {
    return true;
  }
})
console.log(gotAmbiLight);

//sort the tv's from lowest to highest prize
inventory.sort((a, b) => {
  return a.price - b.price;
})
console.log(inventory);


////////////////////////////////OPDRACHT 3/////////////////////////////////////////////////
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
//Geef de type-namen van twee tv's weer op de pagina

//get the tv names (with find?)
//first one
const tvName = inventory.find((name) => {
  if (name.name.includes('4')){
    return true;
  }
})
const tvName1 = tvName.name;
console.log(tvName1);

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

//creeer element
const tv2 = document.createElement(`p`);
//zet er iets in
tv2.textContent = tvName2.toString();
//sla referentie op in container
const tvTwo = document.getElementById("tv2");
//zet het in de container/dom
tvTwo.appendChild(tv2);


////////////////////////////////OPDRACHT 5/////////////////////////////////////////////////


