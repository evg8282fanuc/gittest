// let countt = 0;
// while(countt < 10) {
//     console.log(countt)
    
//     // Можно цикл завершить самостоятельно
//     if (countt==4) {
//         break;
//     }
    
//     countt++
// }

// // цикл do while
// let countt = 10;
// do {
//     console.log(countt);
//     countt--;
// }   while(countt>7)

// // цикл for добавляем 1
// for(let i=0; i<4; i++) {
//     console.log(i)
// }

// // добавляем  2
// for(let i=0; i<12; i+=2) {
//     console.log(i)
// }

// Работа цикла с массивом
// сколько элементов массива столько раз будет выполняться цикл
// let arr = [5, 7, 9, 1, 0]
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]*3)
// }


// ПРЕДПОЧТИТЕЛЬНАЯ ЗАПИСЬ
// цикл for of (берем поочередно элементы из массива)
// // вводим  переменную item
// let arr = [5, 7, 9, 1, 0]
// for(let item of arr) {
//     console.log(item*2)
// }

// цикл for in  для работы с объектами 
// так как в объектах ключи а не индексы

// Создаем объект
let obj = {
   "name": "Petr",
   "age": 25,
   "number": 8888000999 
}

// выведет все ключи
// let obj = {
//    "name": "Petr",
//    "age": 25,
//    "number": 8888000999 
// }
// for(let key in obj) {
//     console.log(key)
// }

// выведет значения ключей
// let obj = {
//    "name": "Petr",
//    "age": 25,
//    "number": 8888000999 
// }
// for(let key in obj) {
//     console.log(obj[key])
// }

// выведет значение всех ключей и значений объекта
// let obj = {
//     "name": "Petr",
//     "age": 25,
//     "number": 8888000999 
//  }
// for(let key in obj) {
//     console.log(`Ключ ${key}, Значение ${obj[key]}`)
// }


// Новый метод forEach позволяет находить Элемент и Индекс в массиве
// ` ` - обратить внимание (Ё)
// let arr = [5, 7, 9, 1, 0];
// arr.forEach(function(item, i, array) {
//     console.log(`Элемент: ${item}
//     Индекс: ${i}
//     Массив: ${array}`)
// })

// let arr = [5, 7, 9, 1, 0];
// arr.forEach(function(item, i, array) {
//     console.log(`Элемент: ${item}
//     Индекс: ${i}
//     Удвоенный элемент: ${item*2}`)
// })

// // Еще один метод
// let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Alex"},
//     {id: 4, name: "Kate"},
// ]
// let a = people.find(function(item) {
//     if(item.id==3) return item
// })
// console.log(a)

// Возвратит индекс элемента findIndex
// let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Alex"},
//     {id: 4, name: "Kate"},
// ]
// let a = people.findIndex(function(item) {
//     if(item.id==3) return item
// })
// console.log(a)

// Возвращает массив из объектов которые подходят под условие
// let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Alex"},
//     {id: 4, name: "Kate"},
// ]
// let a = people.filter(function(item) {
//     if(item.id<3) return item
// })
// console.log(a)

// Метод map
// let arr = [5, 7, 9, 1, 0];
// let newArr = arr.map(function(item, i) {
//         return item*3
// })
// console.log(newArr)

//Еще один способ создать массив
// let arr = []
// for(let i=0; i<20; i+=2) {
//     arr.push(i)
// }
// console.log(arr)


// let arr = []
// for(let i=30; i>0; i-=3) {
//     arr.push(i)
// }
// console.log(arr)


// let arr = []
// for(let i=30; i>0; i--) {
//     if(i%3==0) {
//         arr.push(i)
//     }
// }
// console.log(arr)

// массив равный квадрату его индекса
// let arr = []
// for(let i=0; i<10; i++) {
//     arr.push(Math.pow(i,2)) 
//     // число возводится во вторую степень
//     // arr.push(i*i) 
// }
// console.log(arr)

// Найдем количество четных элементов в массиве
// let arr1 = [7,4,5,8,7,4,5,8,6,5,4]
// let count = 0;
// for(let i=0; i<arr1.length; i++) {
//     if(arr1[i]%2==0) {
//         count++;
//     }
// }
// console.log("Всего четных элементов: " + count)