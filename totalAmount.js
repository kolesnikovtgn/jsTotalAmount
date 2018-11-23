let array=[1,2,3,4,5,6,7,8,9,10,-1, 10, -9, 5, 6, -10, 5,6,7, -10, -9, -8, 25, 26,-7,-5, 19,20,21,22,23];

function f(arr) {
    let sumarr = [];
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]+1 == arr[i+1]) {
            sum += arr[i];
            if(((i+1) == (arr.length - 1)) || ((arr[i+1]+1) != (arr[i+2])))  {
                sum += arr[i+1];
            }
        } else {
            sumarr.push(sum);
            sum=0;
        }
    }
    console.log(sumarr)
    return Math.max.apply(Math, sumarr);
};

console.log(f(array));