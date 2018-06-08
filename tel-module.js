// console.log("Script loaded");

// Get the url of the current page
var currentLocation = window.location.pathname;

// Object met propertys, en de nummers als values
var checkLocationNumb = {
    amsterdam: "020-2149692",
    groningen: "050-2003034",
    haag: "070-2002078",
    haarlem: "023-2001054",
    eindhoven: "040-2092053",
    bosch: "073-2001059",
    heerlen: "045-2078032",
    apeldoorn: "055-2002026",
    maastricht: "043-2003022",
    rotterdam: "010-2004073",
    utrecht: "030-2006128",
    enschede: "053-2005015",
    almere: "036-7600712",
    nijmegen: "024-2001027",
    tilburg: "013-2070181",
    dordrecht: "078-2001032",
    amersfoort: "033-2007051",
    arnhem: "026-2001038",
    breda: "076-2005043",
    venlo: "077-2061056"
};

// Pak alle property's in het object
for (property in checkLocationNumb) {
    // Kijkt of het object de property heeft, en als ja kijk of de url met deze property overeenkomt
    if (checkLocationNumb.hasOwnProperty(property)) {
         if (window.location.href.includes(property)) {
             console.log("your url contains the string "+property);
             changeTheNumb(property);
         }
    }
}

function changeTheNumb(property){
    // Pak alle nummer classes
    var numbsCollection = document.querySelectorAll(".location-number-module a .fl-button-text");
    var numbHref = document.querySelectorAll(".location-number-module a.fl-button.fl-scroll-link");
        // Loop hier doorheen en verander de html hiervan.
        for(var i=0; i < numbsCollection.length; i++)
            {
               numbsCollection[i].innerHTML = `Bel direct ${checkLocationNumb[property]}`;
               numbHref[i].href = `tel:${checkLocationNumb[property]}`;
            }
}
