// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s = `hello world`;
// let ss = `lorem ipsum`;
// let sss = `javascript is cool`;
// console.log(s.length);
// console.log(ss.length);
// console.log(sss.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s = `hello world`;
// let ss = `lorem ipsum`;
// let sss = `javascript is cool`;
// console.log(s.toUpperCase());
// console.log(ss.toUpperCase());
// console.log(sss.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s = `HELLO WORLD`;
// let lowercasse = s.toLowerCase();
// console.log(lowercasse);
// let ss = 'LOREM IPSUM';
// let sss = 'JAVASCRIPT IS COOL';
// console.log(ss.toLowerCase());
// console.log(sss.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let ds = ' dirty string   ';
// console.log(ds.trim());

// - Напишітьфункцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str);
// function stringToarray(str) {
//     return str.split(` `);
// }
//     console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map((n) => {
//     return n + ` `;
// })
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел,та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums(array,direction){
//     if (direction == 'ascending'){
//       return nums.sort((a, b) => a - b);;
//     }
//     else if (direction == 'descending' ){
//          return nums.sort((a, b) => b - a);
//     }
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((m1,m2) => m2.monthDuration - m1.monthDuration));
// let filter = coursesAndDurationArray.filter((item,index) =>{
//     return item.monthDuration > 5 ;
// });
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }