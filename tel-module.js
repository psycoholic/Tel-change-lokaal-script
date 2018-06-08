// console.log("Script loaded");

// Get the url of the current page
var currentLocation = window.location.pathname;

// Object met propertys, en de nummers als values
var checkLocationNumb = {
  alkmaar: "020-2149692",
  amstelveen: "050-2003034",
  Dordrecht: "070-2002078",
  Groningen: "023-2001054"
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
    var numbsCollection = document.querySelectorAll(".telChange");
        // Loop hier doorheen en verander de html hiervan.
        for(var i=0; i < numbsCollection.length; i++)
            {
               numbsCollection[i].innerHTML = checkLocationNumb[property];
            }
}
