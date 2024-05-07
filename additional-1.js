// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrNum = [1, 2, 3, 4, 5];
let arrStr = ['html', 'css', 'javascript', 'java', 'python'];
let arrNumStrBoolean = [100, 'html', 'css', true, false];
for (const arrNumStrBooleanElement of arrNumStrBoolean) {
    console.log(arrNumStrBooleanElement);
}

const arrEmpty = [];
arrEmpty[0] = 10;
arrEmpty[1] = true;
arrEmpty[2] = 12;
arrEmpty[3] = false;
console.log('----------------------------');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

const arrNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('перебрати його циклом while');
let indexWhile = 0;
while (indexWhile < arrNumbers.length) {
    console.log(arrNumbers[indexWhile])
    indexWhile++;
}

console.log('перебрати його циклом for');
// for (let i = 0; i < arrNumbers.length; i++) {
//     console.log(arrNumbers[i]);    
// }
for (const arrNumber of arrNumbers) {
    console.log(arrNumber);
}

console.log('перебрати циклом while та вивести  числа тільки з непарним індексом')
let indexOdd = 0;

while (indexOdd < arrNumbers.length) {
    if (indexOdd % 2 === 1) {
        console.log(arrNumbers[indexOdd]);
    }
    indexOdd++;
}

console.log('перебрати циклом while та вивести  числа тільки парні  значення');
let indexPair = 0;
while (indexPair < arrNumbers.length) {
    if (indexPair % 2 === 0) {
        console.log(arrNumbers[indexPair]);
    }
    indexPair++;
}

console.log('перебрати циклом for та вивести  числа тільки з непарним індексом');
for (let i = 0; i < arrNumbers.length; i++) {
    if (i % 2 === 1) {
        console.log(arrNumbers[i]);
    }
}

console.log('перебрати циклом for та вивести  числа тільки парні  значення');
for (let i = 0; i < arrNumbers.length; i++) {
    if (i % 2 === 0) {
        console.log(arrNumbers[i]);
    }
}

console.log('замінити кожне число кратне 3 на слово "okten');
const arrOkten = [];
for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 3 === 0) {
        arrOkten[i] = 'okten';
    } else {
        arrOkten[i] = arrNumbers[i];
    }
}
console.log(arrOkten);

console.log('вивести масив в зворотньому порядку');
for (let i = arrNumbers.length - 1; i >= 0; i--) {
    console.log(arrNumbers[i]);
}