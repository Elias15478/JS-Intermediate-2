function largestOfFour(arr) { 
    let largest = [];
    for(let i=0;i < arr.length; i++){
        let sortedArr = arr[i].sort(function(a, b) {
            return a-b;
        });
        largest.push(sortedArr[sortedArr.length-1]);
    }
    console.log(largest);   
        }
        console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));