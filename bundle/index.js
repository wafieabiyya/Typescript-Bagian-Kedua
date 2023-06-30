"use strict";
let rumah;
rumah = {
    luasRumah: 45,
    kavlingRumah: 65,
    pemilikRumah: "Joko"
};
console.log({ rumah });
//FUNC
//fungsi biasa
function create() {
    return "Test fungsi";
}
//arrow fungsi  
let add = (firstNumber, seccondNumber) => firstNumber + seccondNumber; //arrow fungsi dengan param
const hasilPertambahan = add(1, 2); //insert value param
console.log(hasilPertambahan); //print result
const result = create(); // declare var to make it more simply when we call the function
console.log(result); //call the function with console.log()
//fungsi void
function persegiPanjang(P, L) {
    let luasPersegi = P * L;
    console.log(`Luas Persegi Panjang adalah: ${luasPersegi}`); // void tidak mengembalikan nilai
}
persegiPanjang(5, 4); //we dont need to console.log() the function, we only need call the function itself 
