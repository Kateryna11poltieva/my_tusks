let n = parseInt(prompt('Введіть будь ласка значення довжини масиву'));
let m = parseInt(prompt('Введіть будь ласка значення висоти масиву'));
let k = parseInt(prompt('Введєть значення до якого будуть рахуватися кратність'));
let arr = [];
let multiple = [];
const min = -100;
const max = 200;


for (let i = 0; i < m; i++) {
    arr[i] = [];

    for (let j = 0; j < n; j++) {
        arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        if (arr[i][j] % k === 0 && !multiple.includes(arr[i][j])) {
            multiple.push(arr[i][j])
        }
    }
}
console.log(arr.join('\n'))

console.log(multiple)



