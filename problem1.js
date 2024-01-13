// "use strict"
// console.log("-1.--------------------------------JS logical problem one");

// arr=[1,2,"13","4","645"];
// arr=[true,false,"13","4","645"];
// let arr=[1,2,NaN,3,4,5,"13","4","645"];


// let sum=0;
// for(i=0;i<=arr.length-1;i++){
//     if(isNaN(arr[i]))
//     continue;

//     if(typeof(arr[i])=="number")
//     sum +=arr[i];

// }
// console.log(sum);

// let a=arrsum([1, 2, NaN, 3, 4, 5, "13", "4", "645"]);


// console.log("--2.--------------------------------JS logical problem two");
  
// function sLarge(arr) {
  
//     let largest = arr[0];
//     let secbig = null;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secbig = largest;
//         largest = arr[i];
//       } else if (secbig === null || (arr[i] > secbig && arr[i] !== largest)) {
//         secbig = arr[i];
//       }
//     }
  
//     return secbig;
//   }
  
//  let arr = [60,99,55,44,68,30,80,62,10];
//  secbig = sLarge(arr);
  
//   console.log('Second largest element:', secbig);


// 3. object to array

// let x={a:1,b:2,c:3,d:5};

// let obj=objfun({a:1,b:2,c:3,d:5});
// function objfun(x){
    

//     let obj2=[];
//     for(let i in x){
//        obj2[i]=[i,x[i]];
//     }
//     console.log(obj2)
// }


// problem ---------------------4

// var arr=[5,6,2,30,7,8,4];
// var temp;
// var a;
// var b;


// var result=prompt("enter a function asen or desen or none");
// result=result.toLocaleLowerCase();

// if(result=="asen"){
//      a=asen();
// }
// else if(result=="desen"){
//      b=desen();
// }
// else if(result=="none"){
//     console.log(arr);
// }
// else{
//     console.log("Invalid Input");
// }


// function asen(){
//     for(i=1;i<arr.length;i++)
//     {
//         for(j=0;j<i;j++)
//         {
//             if(arr[i]<arr[j])
//             {
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// function desen(){
//     for(i=1;i<arr.length;i++)
//     {
//         for(j=0;j<i;j++)
//         {
//             if(arr[i]>arr[j])
//             {
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// var a=asen();
// var d=desen();


// var obj={}

// function objectToArray(obj) {
//     const arr = [];
  
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         arr.push([key, obj[key]]);
//       }
//     }
  
//     return arr;
//   }
  
//   const obj = { a: 1, b: 2, c: 3 };
//   const arr = objectToArray(obj);
  
//   console.log(arr); // Output: [["a", 1], ["b", 2], ["c", 3]]
  




// 5.remove the duplicate element in array

// let arr=[1,2,4,5,3,2,1,6,5];
// console.log(arr)
// let a1=[];
// let c=0;

// for(var i=0;i<arr.length-1;i++){
//     if(a1.indexOf(arr[i])==-1){
//         a1[c]=arr[i];
//         c++
//     }
// }
// console.log(a1)


