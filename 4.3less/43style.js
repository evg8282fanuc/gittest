// как проверить что что-то является числом

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand);
}
console.log(isNumber(5))

