// function getAPI(){
//     fetch('http://api.weatherapi.com/v1/search.json?key=dfb545a573604021be494635230205&q=London')
// }

// console.log(getAPI())

// async function waitingForResponse(name) {
//     let response = await fetch(
//         "https://api.weatherapi.com/v1/search.json?key=dfb545a573604021be494635230205&q="
//     );
//     let cityAPI = await response.json();
//     console.log(cityAPI);
// }
// console.log(waitingForResponse('caen'))

/*
let url="http://api.weatherapi.com/v1/search.json?key=dfb545a573604021be494635230205&q="
url+=location.name
return url

let date=document.querySelector("#date")
let bouton=document.querySelector("#ok")
let img=document.querySelector("#starshot")

//bouton pour lancer la fonction 
bouton.addEventListener("click", verifdate)

//fonction pour verifier si la date est valide
function verifdate(){
let ajd=new Date()
let datev=new Date(date.value)
    console.log(ajd)
    console.log(date.value)
    //faire un if : si la date selectionné est supérieur à la date d'ajd, au lieu d'ex afficher 
    if(datev.getTime()>ajd.getTime()){
        alert("Impossible, ce jour n'est pas encore arrivé...")
    }
    else {
        getapi()
    }
}

//fonction pour mettre la date d'ajd au bon format (inutile MAIS fonction interressante)
// function today(){
//     let aujourdhui= new Date()
    
//     let month=aujourdhui.getMonth()
//         if (month<10){  
//             month = '0' + month;
//         }

//     console.log(month)

//     let day=aujourdhui.getDate()
//         if (day<10){
//              day = '0' + day;
//         }

//    console.log(day)

//    return new Date(aujourdhui.getFullYear()+"-"+month+"-"+day)
// }

//fonction qui recup la value de l'input
function getapi(){
    let test=newurl()
    console.log(api(test))
    console.log(date.value)
}


//modif l'url pour add la date formatée
function newurl() {
    let url="https://api.nasa.gov/planetary/apod?api_key=q3FTYte4TvTO14qFNrTJLgQWubCphnmMuXfN78eZ&date=";
    url+=date.value;
    console.log(url);
    return url;
}

//remplacer la fonction api par la nouvelle url
function api(url){
    fetch(url)
    .then(res=>res.json())
    .then(result=>img.src=result.hdurl)
}*/
