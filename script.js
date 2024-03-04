/*
1.inserisco tutti i percorsi delle immagini in un array
2.inserisco tutti gli elementi html contenenti limmagine con la classe hide 
3.tolgo la classe 
 
 */
const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
]

play();

// elements
const caruselImage = document.querySelector(".carusel-image")
// arrows
const upArrow = document.querySelector(".up")
const downArrow = document.querySelector(".down")


let loopcarosel = '';

// counter
let counter = 0


for(let i = 0; i < images.length; i++){
  
  // la variabile img equivale all elemento images con indice i
  const img = images[i];

  // add with the for loop all the images
  caruselImage.innerHTML += `<img class="img hide" src="${img}">`;
}

// freccia sopra
upArrow.addEventListener("click", function(){




  // aggiungo la classe hide all elemento con counter non ancora incrementato
  imagesCollection[counter++].classList.add("hide");
  // tolgo la classe hide all elemneto con contatore incrementato
  imagesCollection[counter].classList.remove("hide")

  if(counter === images.length-1){
   upArrow.classList.add("hide")
  }

  // se il counter raggiunge l ultimo elemento dell array la freccia su acquisisce hide
  downArrow.classList.remove("hide")

  // console.log(counter);

})




downArrow.classList.add("hide")

// freccia sotto
downArrow.addEventListener("click", function(){

  upArrow.classList.remove("hide")

// aggiungo la classe hide all elemento con contatore decrementato 
  imagesCollection[counter--].classList.add("hide");
// tolgo la classe hide all elemento con il contatore decrementato
  imagesCollection[counter].classList.remove("hide")

  // se il contatore raggiunge lo 0, quindi il limite dell array la freccia in giu riceve la classe hide
  if(counter === 0){
    downArrow.classList.add("hide")
  }

  console.log(counter);
})

// tutte le immmagini che ho aggiunto le raccolgo in questa costante che poi mmi permetterà di modificarne la classe
const imagesCollection = document.getElementsByClassName("img");
// grazie all uso del contatore rimuovo la classe hide all immagine desiderata
imagesCollection[counter].classList.remove("hide");



console.log( imagesCollection);
 //function

 function play(){
  loopcarosel = setInterval(upArrow, 3000);
 }

 function stop (){
  clearInterval(loopcarosel);
 }