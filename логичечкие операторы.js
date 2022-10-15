// const hamburger = 5;
// const fries = 0; 

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));


const hamburger = 2;
const fries = 1; 
if (hamburger === 3 && fries) {
 console.log('Все сыты!');
} else{
    console.log('Мы уходим');
}

console.log( NaN || 2 || undefined );  

console.log( NaN && 2 && undefined ); 


console.log( 1 && 2 && 3 ); 


console.log( !1 && 2 || !3 ); 

console.log( 25 || null && !3 ); 

console.log( NaN || null || !3 || undefined || 5); 


console.log( NaN || null && !3 && undefined || 5);



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

