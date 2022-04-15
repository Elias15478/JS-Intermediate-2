 
function sumAll(arr) {
    let sum = 0;
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    for (var i = min; i <= max; i++) {
        sum += i;
    }

return sum;
}

console.log(sumAll([10, 5]));
// function sumAll(arr) {
//     let sum = 0;
//     if (arr[0] > arr[1]) {
//         sum = arr[1]
//         arr[1] = arr[0]
//         arr[0] = sum
//         sum = 0
        
//     }
//     for (let i = arr[0]; i <= arr[1]; i++) {
//         sum += i;
        
//     }
//     return sum;
// }console.log(sumAll([1, 5]));