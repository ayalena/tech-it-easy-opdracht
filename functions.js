// Opdracht 5 en bonusopdracht

///////////////////////////////////////////////OPDRACHT 5///////////////////////////////////////////////////////////////
//5a Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//maak een functie, je levert een array aan van namen
//op basis van deze array maakt deze functie een string

//this works, but doesn't take an array
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

const sortButton = document.getElementById('sort-on-price');
const ambilightButton = document.getElementById('get-ambilight');
const soldOutButton = document.getElementById('sold-out-items');

function sortOnPrice () {
    let prices = inventory.sort((a, b) => {
        return a.price - b.price;
    })
    console.log(prices);
};

//get all the objects that got ambilight C
function getAmbiLightTvs () {
    let ambiTvs = inventory.filter((ambiLightTvs) => {
        if (ambiLightTvs.options.ambiLight === true) {
            return true;
        }
    })
    console.log(ambiTvs);
}

//get all the objects that are sold out B
function getSoldOutTvs () {
    let soldTvs = inventory.filter((soldOutTvs) => {
        if (soldOutTvs.originalStock === soldOutTvs.sold) {
            return true;
        }
    })
    console.log(soldTvs);
}

sortButton.addEventListener('click', sortOnPrice);
soldOutButton.addEventListener('click', getSoldOutTvs);
ambilightButton.addEventListener('click', getAmbiLightTvs);
