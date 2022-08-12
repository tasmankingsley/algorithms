let array = [3, 2, 10, 435, 1, 40, 16, 18, 5, 20];

function quick_sort(array) {
    if (array.length === 0) {
        return [];
    } else {
        const pivot = array[0];

        let lesser = [];
        let equal = [];
        let greater = [];
        
        for (let i of array) {
            if (i < pivot) {
                lesser.push(i);
            } else if (i > pivot) {
                greater.push(i);
            } else {
                equal.push(i);
            }
        }
        return [...quick_sort(lesser), ...equal, ...quick_sort(greater)];
    }
}

console.log(quick_sort(array));
