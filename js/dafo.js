let przycisk = document.querySelector('button');
let inpimie = document.getElementById('imie');
let pimie = document.getElementById('name');
let inpnazwisko = document.getElementById('nazwisko');
let pnazwisko = document.getElementById('surname');
let inpnumer = document.getElementById('numer');
let pnumer = document.getElementById('phone');
przycisk.onclick = function () {
    pimie.textContent = inpimie.value
    pnazwisko.textContent = inpnazwisko.value
    pnumer.textContent = inpnumer.value

}
console.log(pimie);
console.log(pnazwisko);
console.log(pnumer);