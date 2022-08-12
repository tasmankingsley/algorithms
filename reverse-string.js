let str = 'string';

// Option 1

// function reverse_string(str) {
//     return str.split('').reverse().join('');
// }

// Option 2

function reverse_string(str) {
    let rev_str = '';

    for (let i = str.length  - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    
    return rev_str;
}

console.log(reverse_string(str));
