(X)Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
- verkrijg van elk object in de array de stock
- verkrijg van elk object in de array hoeveel er verkocht zijn
- verkrijg het aantal wanneer je deze van elkaar aftrekt
- tel deze allemaal bij elkaar op

(X)Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
-plaats in de dom
-in css stylesheet met color property

(X)Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
-map methode 

(X)Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
-filter

(X)Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
-filter

(X)Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
-sort

(X)Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.
-bereken van elk object de price x aantal 
-tel dit ook weer bij elkaar op
-maak een element voor dom

(X)Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina
- bereken van elk object price x aantal verkocht
- tel dit bij elkaar op
- maak een element voor dom

(X) Opdracht 4: Geef de type-namen van twee tv's weer op de pagina. 
-maak twee elementen voor dom

(X)Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
- maak een functie, je levert een array aan van screen sizes
- op basis van deze array maakt deze functie een string

(X)Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
- maak een functie en spit out a string

()Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
- functie om inches nr cm te berekenen
-functie die die functie gebruikt

(X) Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
- schrijf een functie die alledrie de functies combineert
