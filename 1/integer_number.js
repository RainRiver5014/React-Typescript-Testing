function isDivisibleBy(x, mod) {
    return x % mod === 0;
}
function output(intNumber) {
    if (isDivisibleBy(intNumber, 2))
        console.log("candy");
    if (isDivisibleBy(intNumber, 11))
        console.log("bar");
    if (isDivisibleBy(intNumber, 22))
        console.log("candybar");
    if (!isDivisibleBy(intNumber, 2) && !isDivisibleBy(intNumber, 11))
        console.log(intNumber);
}
output(20);
