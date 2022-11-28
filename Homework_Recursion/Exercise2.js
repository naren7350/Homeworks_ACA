function findBiggest(array) {
    if(array.length == 1) {
        return array[0];
    } else if(array.length == 0) {
        return array;
    }

    if(array[0] > array[1]) {
        array[1] = array[0];
    }
    return findBiggest(array.slice(1))
}

console.log(findBiggest([0, 9, 21, 18])); 
console.log(findBiggest([7, 15, 11])); 