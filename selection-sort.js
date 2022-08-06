let array = [3, 2, 10, 435, 1, 40, 16, 18, 5, 20];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let j_min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[j_min]) {  // compares current selection (j) against current min
                j_min = j;  // sets min as current selection
            }
        }
        // swaps current position on i-loop for the newly found min on j-loop
        // j-loop starts looping after the previouly sorted i-loop, ie (let j = i + 1;)
        [array[i], array[j_min]] = [array[j_min], array[i]];
    }
    return array;
}

console.log(selectionSort(array));