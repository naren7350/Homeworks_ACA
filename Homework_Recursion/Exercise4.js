function sumOfDigits(number) {
    if(number < 10) {
        return number;
    } 

    let lastDigit = (number % 10);
    let remaining = Math.floor(number / 10);

    return sumOfDigits(lastDigit + sumOfDigits(remaining))
}

console.log(sumOfDigits(1234));
