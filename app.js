let pokeName = document.querySelector(".pokeName__title");
let pokeNumber = document.querySelector(".pokeNumber");
let pokeWeight = document.querySelector(".pokeWeight")
let pokeTypeOne = document.querySelector(".pokeTypeOne")
let btn = document.querySelector("button");
let image = document.querySelector("img")

let card = document.querySelector('.thecard');

console.log(image)

function generateNew(){
    let rand = Math.floor(Math.random()* 151);

    fetch("https://pokeapi.co/api/v2/pokemon/"+ rand +"/")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        console.log(data["name"])
        pokeName.textContent = data["name"];
        pokeNumber.textContent= data["id"];
        pokeWeight.textContent= data["weight"]

        const dataTypes = data["types"];
        console.log(dataTypes);

        const typeArr = [];
        if (dataTypes.length === 2){
            typeArr.push(dataTypes[0]['type']['name']);
            typeArr.push(dataTypes[1]['type']['name']);
            console.log(typeArr);
        }
        else {
            typeArr.push(dataTypes[0]['type']['name']);
            console.log(typeArr)
        }

        for(let type of typeArr){
            const newLi = document.createElement('li');
            newLi.innerText = type;
            const parentUl = document.querySelector("ul");
            parentUl.appendChild(newLi);
        }

        image.src= data["sprites"]["front_default"];
        console.log(typeArr);
    

    

    })
}

// function reloadPage(){
//     location.reload();
// }

generateNew();

function removeTypes(){
    let list = document.querySelector("ul");
    list.innerHTML = "";
}

function turnCard(){
    card.classList.toggle("turn")
}


function resetCard(){
    card.classList.remove("turn");
}

btn.addEventListener("click", removeTypes);
btn.addEventListener("click", resetCard);
btn.addEventListener("click", generateNew);

card.addEventListener("click", turnCard)