var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];
var intersection = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        intersection.push(arr1[i]);
    }
}

console.log(intersection); 

