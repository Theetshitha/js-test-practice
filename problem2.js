// "use strict"

// 1. printing fizzbuzz--------------------------------

// let n=Number(prompt("enter a number"));

// for(let i=1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz")
        
//     }
//     else if(i%5==0){
//         console.log("Buzz")
        
//     }
//     else{
//         console.log(i);
//     }

// }

// 2. printing array multiples

// let a=prompt("Enter a number");
// let b=prompt("Enter a length");
// let result=mularr(a,b);
// console.log(result)


// function mularr(num,len){
//     var d=[]
   
//     for(let i=0;i<len;i++){
//        d[i]=num*(i+1);
    //    console.log(num,"*",i,"=",d)
//     }
//     console.log(d)
     
// }

// 3.count the positive nos in an array and sum the negative no in an array.

// let arr=[1,2,3,4,5,6,6,7,8,9,-2,-3,-6,-7,-8,-9];
// let c=0;
// let sum=0;

//     for(let i=0;i<arr.length;i++){
//       if(arr[i]>0){
//          c=c+1;
         
//       }
//       if(arr[i]<0){
//          sum+=arr[i];

//       }

//    }
//          console.log(c+", "+sum);


// 4.find the missing number from 1 to 10 in the given array.

// let arr=[1,2,3,5,6,7,8,9,10];

// for(let i=1; i<=10; i++) {
//    if(arr.includes(i))
//    continue;

// console.log(i);

// }

// ---------------------------------------------


// let arr=missing([1,2,3,4,5,6,7,8,9]);
// function missing(arr){
//     let n=arr.length;
//     let total=(n+2)*(n+1)/2;
    
//     for(let i=0;i<n;i++){
//         total-=arr[i];
// }
// return total;
// }
// console.log(arr);

// 5. find the highest and lowest no in given sting.

// var str="5 6 23 47 30 1000 4";
// console.log("Given string ",str);

// var arr=str.split(" ")
// let arr=[5,6,7,8,9,10,30,90,20,13];
// console.log("Given array ",arr);

// for(var i=1;i<arr.length;i++){
//         for(let j=0;j<i;j++)
//         {
//             if(Number(arr[i])<Number(arr[j]))
//             {
//                let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//                 console.log("sorted array ",arr)
//             }
//         }
//     }
//     console.log("sorted array ",arr)

//     let s=arr[arr.length-1]
//     console.log("Biggest no : ",s,"  ","smallest no : ",arr[0]);


