function hobby(huidigeLeeftijd, streefLeeftijd, consumptie, verbruik, prijs) {
    var jarenNogteLeven = streefLeeftijd - huidigeLeeftijd;
    var dagenNogteLeven = jarenNogteLeven * 365;
    var totaalConsumptie = verbruik * dagenNogteLeven;
    var kosten = totaalConsumptie * prijs;
    
    console.log("Je bent " + huidigeLeeftijd + " en je wordt " + streefLeeftijd + " Je gaat " + consumptie + " " + verbruik + " drinken in je leven. Dat kost " + prijs +  " euro"); 
}

hobby(20, 80, "Boba", 0.2, 3.50);
