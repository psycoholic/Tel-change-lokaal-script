// console.log("Script loaded");

var urlResult;
var textResult;
var arrayResult = [];

var temp = [];

// Get the url of the current page
var currentLocation = window.location.pathname;

// Locations object
var checkLocationNumb = {
  location: ["alkmaar", "amstelveen", "Dordrecht", "Groningen"],
  number: ["072514558", "0725144658", "0725132658"]
};

// Loopt door de Object arrays heen, en geeft de waarde terug aan arrayResult

function arrayLoop() {
          for(var i=0; i < checkLocationNumb.location.length; i++) {
            temp = checkLocationNumb.location[i]; // Slaat 1 waarde op
            console.log(temp + "TEMP" ); // log 4 times
            arrayResult.push(temp); // Push elke item in de array
            console.log(arrayResult);
          };
        // return arrayResult;
  }
arrayLoop();

// Slaat het resultaat op om te vergelijken
var locationConfirm = arrayResult;

  // Looped door location array heen, en checked voor elk item. Als hij true is sla deze waarde op in urlResult En voer vergelijk functie uit.
  for (var i=0; i < checkLocationNumb.location.length; i++) {
      if(window.location.href.indexOf(checkLocationNumb.location[i]) > -1) {
           console.log("your url contains the string "+checkLocationNumb.location[i]);
          urlResult = checkLocationNumb.location[i];
          console.log(urlResult + " Page Url Location");
          changeNumb();
      }
  }

// Vergelijk de waarde van urlResult met locationConfirm als deze waar is verander het telefoonnummer

// if (arrayResult.includes(urlResult)) {
//     console.log("Succes");
//     console.log(textResult);
//     textResult = "Succesvol Tel Nr Veranderd";
//     console.log(textResult);
//   } else {console.log("Fail");}

function changeNumb() {
  if (urlResult == locationConfirm ) {
    console.log("Succes");
    console.log(textResult);
    textResult = "Succesvol Tel Nr Veranderd";
    console.log(textResult);
  } else {console.log("Fail");}

  var numbsCollection = document.querySelectorAll(".telChange");
  for(var i=0; i < numbsCollection.length; i++)
  {
      // console.log(numbsCollection[i].className);
     numbsCollection[i].innerHTML = textResult;
  }
}
