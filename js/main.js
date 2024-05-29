// let name = 'моника'//глобальная переменная
// function showMessage() {
//     name = 'петя'
//    let  name = 'м'//локальная переменная

// }

// console.log(name)//моника
// showMessage()//вызвали функцию

// console.log(name)//петя

// function message(a){
//     console.log(`привет ${a}`);
// }
// message('moniks')

// function message(a, b){
//     console.log(b);
// }
// message('moniks')//undefined

// function sum(a, b){
//     return a + b
//     console.log(a + b);
// }
// let result = sum(1,2)
// console.log(result);

//   function checkAge(age) {
//     return result = (age > 18) ? true : confirm('Родители разрешили?')
// }
//   checkAge()

function sum(num){
    let num = 3
    for(let i = 1;i <= num;i++) sum += i
    console.log(sum);
}
sum(num)