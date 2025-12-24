
let arr=[1, 2, 3, 4, 5]

let sum=0;

//sum
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

console.log("Sum is: " + sum);

//product
let product=1;
for(let i=0;i<arr.length;i++){
    product*=arr[i];
}
console.log("Product is: " + product);