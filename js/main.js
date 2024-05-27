// let i = 0
// console.log('цикл while')
// while ( i < 5 ){
//     console.log(++i);
// }


// console.log('do while')
// let u = 0
// do{
//     console.log(++u)
// }while ( u < 5)


// console.log('цикл for')
// for(let a = 0;a < 5; ++a){
//     console.log(a)
// }

// let num 

// while (true){
//     let value = +prompt('введите число')
//     num += value 
//     if( value == false) break

// }

// console.log(`сумма: ${num}`)


// let num1 = +prompt('введите первое число')
// let num2 = +prompt('введите второе число')
// let value = prompt('введите математический оператор')
// switch(value){
//     case '+':
//         console.log(num1 + num2)
//         break
//     case'-':
//         console.log(num1 - num2)
//         break
//     case'*':
//         console.log(num1 * num2)
//         break
//     case'/':
//         console.log(num1 / num2)
//         break
//     default:
//         console.log('такого математического оператора не существует')
//         break
// }



// const number = +prompt('Введите число между 0 и 3', '');
// switch(number){
//     case 0:
//     alert('Вы ввели число 0');
//     break
//     case 1:                         
//     alert('Вы ввели число 1')
//     case 2:
//     alert('Вы ввели число 2, а может и 3')
//     case 3:
//     alert('Вы ввели число 2, а может и 3')
//     break
// }
  

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//     }

let browser

    if(browser == 'Edge'){
         alert( "You've got the Edge!" )
    } else if (browser == 'Chrome', browser == 'Firefox', browser == 'Safari', browser == 'Opera'){
        alert( 'Okay we support these browsers too' )
    }  {
        alert( 'We hope that this page looks ok!' )
    }
