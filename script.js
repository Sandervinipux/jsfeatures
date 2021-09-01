"use strict";
let number = 10;
//Замыкания (сама функция, вместе с тем что ей доступно)
function showMessage(text) {
    console.log(text);
    //let number = 20;
    console.log(number);

}

showMessage("Hello!!!");
console.log(number);

const server = function(){
    console.log('server start...');

};

server();

const calc = (x, y) => x+y;
//const calc = (x, y) => {
//  return x+y    
//};

console.log(calc(10,5));

//Задание приветствие и число п

"use strict";
let number = 3.14;
function showMessage(text) {
    console.log(text);
    console.log(number);

}

showMessage("Hello!!!");
console.log(number);


server();