
function sum(array) {
    if(array.length == 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1))
    }
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 4, 6, 2, 44, 56, 9]));
console.log(sum([2]));
console.log(sum([]));