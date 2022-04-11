const riga = document.querySelector(`.row`)


for (let i = 1; i <= 100; i++) {

    let string
    if (i %  15 === 0) {
        string = "FizzBuzz"
        riga.innerHTML += `<div class="box bg-red">${string}</div>.`
    } else if (i % 5 === 0) {
        string = "Buzz"
        riga.innerHTML += `<div class="box bg-yellow">${string}</div>.`

    } else if (i % 3 === 0) {
        string = "Fizz"
        riga.innerHTML += `<div class="box bg-green">${string}</div>.`

    } else {
        string = i
        riga.innerHTML += `<div class="box bg-standard">${string}</div>.`
    }
    
    console.log(string);

    
    // riga.innerHTML += `<div class="box">${string}</div>.`


}