"use strict";

// if(4 == 9) {
//     console.log('Ok!');
//  } else {
//         console.log("error");
//     }


// if (num <49) {
//     console.log('Error');
// } else if (num >100) {
//   console.log('Багато');
//  } else {
//     console.log('OK!');
//  }

//  (num === 50) ? console.log('OK!') : console.log('Error'); 


 const num = '50'; 
 switch (num) {
    case 49: 
    console.log('Неверно');
    break;
    case '100':
    console.log('Неверно');
     break;
     case '50': 
     console.log('В точку!');
     break;
     default:
        console.log('Не в этот раз');
        break;

 }