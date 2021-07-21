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

/////////////////////////////////////////////OPDRACHT 1/////////////////////////////////////////////////////////////////
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


///////////////////////////////////////////////OPDRACHT 5///////////////////////////////////////////////////////////////
//5a Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//maak een functie, je levert een array aan van namen
//op basis van deze array maakt deze functie een string

function joinProperties () {
    let properties = inventory.map((inv) => {
    return (inv.brand + " " + inv.type + " - " + inv.name).toString();
  })
  return properties;
}

console.log(joinProperties()[1]);

//Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-
function price () {
  const tvPrice = inventory.map((inv) => {
    return `€${inv.price}`;
  })
  return tvPrice;
}

console.log(price()[0]);

//Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm)
// function toCm (num) {
//   return Math.round(num * 2.54);
// }
//
// console.log(toCm(32));

// function inchesToCm () {
//   let cm = inventory.map((inv) => {
//     return inv.availableSizes[0]  + " inch (" + Math.round(inv.availableSizes * 2.54) + " cm)";
//   })
//   return cm;
// };
//
// console.log(inchesToCm()[0]);

let tvSizes = inventory.map((tvSize) => {
  return tvSize.availableSizes;
});

function inchesToCm (tvSizes) {
  let allSizes = "";
  for (let i = 0; i < tvSizes.length; i++) {
    let sizeInCm = Math.floor(tvSizes[i] * 2.54);
    allSizes = allSizes + tvSizes[i] + " inch " + "(" + sizeInCm + " cm" + ") | ";

  };
  return allSizes;
};

console.log(inchesToCm(tvSizes[1]));

//Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//creeer element
const tvInformation = document.createElement(`p`);
//zet er iets in
let newline = "\r\n";
tvInformation.textContent = joinProperties()[0] + newline + newline + price()[0] + newline + newline + inchesToCm([0]);
//sla referentie op in container
const tvInfo = document.getElementById("tvInformation");
//zet het in de container/dom
tvInfo.appendChild(tvInformation);

//5e Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
//functie
function allProperties () {

    // const allInfo = inventory.map((inv) => {
    //   return joinProperties(inv)[0] + newline + price(inv)[0] + newline + inchesToCm(inv)[0];
    // })
    // return allInfo;
    // for (let i = 0; i < allInfo.length; i++) {
    //   console.log(allProperties()[i]);
    // }
    // return allInfo;
  for (let i = 0; i < inventory.length; i++) {
    console.log(joinProperties(inventory)[i] + newline + price(inventory)[i] + newline + inchesToCm(tvSizes[i]));
  }
}

allProperties(inventory);

// for (let i = 0; i < inventory.length; i++) {
//   console.log(allProperties()[i]);
// }

// //creeer element
// const allTvs = document.createElement(`p`);
// //zet er iets in
// allTvs.textContent = allProperties;
// //sla referentie op in container
// const allTvInfo = document.getElementById("allTvInformation");
// //zet het in de container/dom
// allTvInfo.appendChild(allTvs);

//creeer element
// const allTvInformation = document.createElement(`p`);
// //zet er iets in
// allTvInformation.textContent = joinProperties()[0] + newline + newline + price()[0] + newline + newline + inchesToCm([0]);
// //sla referentie op in container
// const allTvInfo = document.getElementById("allTvInformation");
// //zet het in de container/dom
// allTvInfo.appendChild(allTvInformation);

function generateTvInformation () {
  for (let i = 0; i < inventory.length ; i++) {
    const allTvInformation = document.createElement(`p`);
    allTvInformation.textContent = joinProperties(inventory)[i] + newline + price(inventory)[i] + newline + inchesToCm(tvSizes[i]);
    const allTvInfo = document.getElementById("allTvInformation");
    allTvInfo.appendChild(allTvInformation);
  }
}
(generateTvInformation(inventory));

//////////////////////////////////////////BONUSOPDRACHT/////////////////////////////////////////////////////////////////
//Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: Google eens naar het onclick event van buttons!

//maak functies van de code
//sort the tv's from lowest to highest prize D

// let button1 = document.getElementById("button1").onclick = function() {sortOnPrice()};
// button1.textContent = "Sort on Price";
// const buttonOne = document.getElementById("button1");
// buttonOne.appendChild(button1);

function sortOnPrice () {
  let prices = "";
  prices = inventory.map((a, b) => {
    return a.price - b.price;
  })
  console.log(prices);
};

//creeer element
// const button1 = document.createElement(`button`);
// //zet er iets in
// button1.textContent = "";
// //sla referentie op in container
// const buttonOne = document.getElementById("button1");
// //zet het in de container/dom
// buttonOne.appendChild(button1);
//
// button1.onclick = sortOnPrice;
// button1.addEventListener("click", sortOnPrice);


//get all the objects that got ambilight C
function getAmbiLightTvs () {

  inventory.map((ambiLightTvs) => {
    if (ambiLightTvs.options.ambiLight === true) {
      return true;
    }
  })
  console.log(getAmbiLightTvs());
}


// //creeer element
// const button2 = document.createElement(`button`);
// //zet er iets in
// button2.textContent = "AmbiLights";
// //sla referentie op in container
// const buttonTwo = document.getElementById("button2");
// //zet het in de container/dom
// buttonTwo.appendChild(button2);
//
// buttonTwo.onclick = getAmbiLightTvs;
// buttonTwo.addEventListener("click", getAmbiLightTvs);

//get all the objects that are sold out B
function getSoldOutTvs () {
  inventory.map((soldOutTvs) => {
    if (soldOutTvs.originalStock === soldOutTvs.sold) {
      return true;
    }
  })
  console.log(getSoldOutTvs());
}


//first, make 3 buttons in html (X)
//onclick events
//creeer element
// const button3 = document.createElement(`button`);
// //zet er iets in
// button3.textContent = "Sold Out Items";
// //sla referentie op in container
// const buttonThree = document.getElementById("button3");
// //zet het in de container/dom
// buttonThree.appendChild(button3);
//
// buttonThree.onclick = getSoldOutTvs;
// buttonThree.addEventListener("click", getSoldOutTvs);
