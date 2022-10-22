const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]

let task1 = [...new Set(arr)];

console.log(task1)
console.log(arr)

const obj1 = { id: 1, name: 'userName' };
const obj2 = { id: 1, passsword: 'qwerty' };
let task2 = Object.assign(obj1, obj2);
console.log(task2)

const task3 = (x, y) => x + y;

const sleep = ms => {
    return new Promise(resolve =>
        setTimeout(resolve, ms));
}

sleep(5000).then(() => {
    console.log("Выполнилось через 5 секунд")
});

console.log(sleep(5000))