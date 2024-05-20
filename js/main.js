// let login, pass

// login = prompt('ведите свой логин')
// pass = prompt('ведите свой пароль')

// login = (login == 'admin') //true
// pass = (pass== '1234')//true
// if(login){
//     console.log('добро пожаловать админ')
// } else if(pass){
//     console.log('вы вошли в систему')
// }else{
//     console.log('Неврный логин')
// }

// let login = prompt('ведите свой логин')
// let pass = prompt('ведите свой пароль')

// let loginWelcome = console.log('добро пожаловать админ')
// let passWelcome = console.log("пароль совпал")

// let resule = (login == 'admin') ? welcome :
//              (pass == "1234")  ? passWelcome : buy


// let js = prompt('каое название')
// if (js == "esmascript"){
//     console.log('верно');
// } else {
//         console.log('Не знаете? ECMAScript!')
// }

// let js = prompt('каое название')
// let result = (js == "esmascript") ? 'верно' : 'Не знаете?\nECMAScript!'



// let js = prompt('число')
// if (js > 0){
//     alert(1)
// } else if (js < 0){
//     alert(-1)
// }  else{
//     alert(0)
// }


// if(num >= 1){
//     console.log("значение больше нуля")
// } else if(num < 0){
//     console.log('значение меньше нуля')
// }else {
//     console.log('значение ровно нулю')
// }


// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = (a + b < 4) ? 'Мало' : 'Много'

// let message

// let result = (login == 'сотрудник') ? message = "привет":
//              (login == 'директор') : message = 'здравствуйте':
//              (login == "") : message ="нет логина":
//             message 
// let login, pass

// let resulut = (login == "007") || (pass == "4923") ?  'добро пожаловать студент'
let login = prompt('пароль')
let pass = prompt('логин')

let resulut = (login == "admin") || (pass == "4923") ?  'добро пожаловать админ':
              (login == "007") || (pass == "4923") ?  'добро пожаловать студент':
              'доступ закрыт'