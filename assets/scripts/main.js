"use strict";

// pirmas taskas

// let klausimas = prompt('Koks tavo vardas?');

// let arLietuvis =  confirm('ar esi lietuvis?');

// let divas = document.querySelector('div');

// if(arLietuvis == true){
//     divas.classList.add('flag');
// }

// antras taskas
//  let whoAreYou = prompt('Who are you');
 
//  if(whoAreYou == false){
//      alert('Canceled');
//  }else if(whoAreYou == "admin"){
//    let pass = prompt('enter your password');
//    if(pass == 'master'){
//        alert('welcome');
//    }
//  }else{
//      alert('I dont know You');
//  }

//  trecias taskas

// let skaicius = prompt("iveskite skaiciu?");
// // console.log(laikas);

// if(skaicius%3 == 0 && skaicius%5 == 0){
//     alert('FizzBuzz');
// }else if(skaicius%5 == 0){
//     alert('Buzz');
// }else if(skaicius%3 == 0){
//     alert('Fizz');
// }

//  ND
// Iveskite du skaicius ir veiksma kuri nori atlikt;

// let pirmasSkaicius = Number(prompt('Iveskite pirma skaiciu'));
// let veiksmas = prompt('iveskite veiksmas');
// let antrasSkaicius = Number(prompt('Iveskite antra skaiciu'));

// if(veiksmas == "+"){
//     alert( pirmasSkaicius + antrasSkaicius);
// }else if(veiksmas == "-"){
//     alert( pirmasSkaicius - antrasSkaicius);
// }else if(veiksmas == "*"){
//     alert( pirmasSkaicius * antrasSkaicius);
// }else if(veiksmas == "/"){
//     alert( pirmasSkaicius / antrasSkaicius);
// }


// daily kata1

// const gimimoMetai = Number(prompt("Iveskite gimimo metus"));

// let currentTime = new Date();
// let year = currentTime.getFullYear();

// let amzius = year - gimimoMetai;

// alert('Jums yra ' + amzius + ' metai');

// 

// let skaicius = prompt('enter number');
// let i = 1;

// while(i<=skaicius){
//     if(i%2==0){
//         alert(i);       
//     }
//     i++;
// }

// trikampis ********************
// let space = " ";
// let tarpai = 10;
// let stars = "*";
// let starsNumb = 1;
// let sum = "";




// for(let i=0;i<10;i++){
//     sum=  space.repeat(tarpai) + stars.repeat(starsNumb) + space.repeat(tarpai);
//     console.log(sum);
//     starsNumb+=2;
//     tarpai--;

// }

// 

// let ivestis = prompt("ivesktie zodi").toLocaleLowerCase().split("");

// let counter = 0;
// let len = ivestis.length -1;
// for(let i=0;i<ivestis.length;i++){
//     if(ivestis[i]==ivestis[len -i]){
//         counter++;
//     }
// }

// if(counter == ivestis.length){
//     alert("palindromas");
// }

// ***************** CALCULATOR START *******************

let number = null;
let result = '';
let test = true;
let divas = document.querySelector('div');

function manoSkaicius(numb){
    // jei skaicius vedamas pirma kart, tenkinama pirma salyga, jei ne antra
    if(test == true){
        number = numb.textContent;
        test = false;
        divas.textContent = result + numb.textContent;
    } else {
        number = number + numb.textContent;
        divas.textContent = result + number;
    }
}

function manoVeiksmas(veiksm){
    result += number.toString() + veiksm.textContent;
    divas.textContent = result;
    number =null;
    test = true;
}

function rezultatas(){
    result = eval(result + number.toString());
    document.querySelector('#result').textContent = result;
}

function anuliavimas(){
    divas.textContent = 0;
    number = null;
    result = '';
    test = true;
}


// ***************** CALCULATOR END *******************