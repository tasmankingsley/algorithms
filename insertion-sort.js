let array = [3, 2, 10, 435, 1, 40, 16, 18, 5, 20];

function insertion_sort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        for (var j = i - 1; j >= 0 && array[j] > current; j--) {
          array[j + 1] = array[j];
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(insertion_sort(array));