let x = [1, 3454, 655, 24, 7, 8];
let max = x[0];

for (let i = 1; i < x.length; i++) {
    if (x[i] > max) {
        max = x[i];
    }
}

console.log("The largest number in x", max);
