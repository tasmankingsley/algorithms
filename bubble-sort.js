let array = [3, 2, 10, 435, 1, 40, 16, 18, 5, 20];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // ES6 array destructuring
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));