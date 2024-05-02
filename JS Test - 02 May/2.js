var arr = [1, 2, 3, 3, 4, 5, 5];
var Arr = [];

for (let i = 0; i < arr.length; i++) {
    if (!Arr.includes(arr[i])) {
        Arr.push(arr[i]);
    }
}

console.log(Arr); 

