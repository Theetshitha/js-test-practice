// "use strict"

// 1.reverse each letter in a sentence

// let str="the sky is blue";
// let r="";

// for(let i=str.length-1;i>0;i--){
// r+=str[i];
// }
// console.log(r);

// 2.reverse the word in a sentence

// let str="the sky is blue";
// str=str.replaceAll("  ","")

// let arr=str.split(" ");
// console.log(arr);
// let a1=[];
// let j=0;

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
//     a1[j]=arr[i];
//     j++;
// }

// console.log(a1.join(" "));


// 3.remove the letters abc from an array

// let str="hello am fine"
// console.log(str);

// str=str.toLocaleLowerCase();

// if((str.includes("a")||str.includes("b")||str.includes("c"))){
// str=str.replaceAll("a"," ");
// str=str.replaceAll("b"," ");
// str=str.replaceAll("c"," ");
// }
// else{
//     str="null";
// }
// console.log(str);


// 4. find the unique positive number from an array

// let arr=[-5,5,-4,-7,2,6,-8,-1,2,5,-5];
// let a1=[];
// let c=0;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<0)
//     continue;

//     a1[c]=arr[i];
//     c++
// }

// console.log(a1);

// let a2=[];
// let c1=0;
// for(let j=0;j<a1.length;j++){
//     if(a2.indexOf(a1[j])==-1){
//         a2[c1]=a1[j];
//         c1++
//     }
// } 
// console.log(a2);


//5. mirror array

// let arr=[0,2,4,6,8,7,5];
// let c=arr.length-1;
// for(let i=arr.length-1;i>-1;i--){
// arr[c]=arr[i];
// c++;
// }
// console.log(arr)

// function missing(arr) 
// {
//     var n = arr.length;
//     var total = ((n + 2) * (n + 1)) / 2;
//     for (let i = 0; i < n; i++) 
//     {
//       total -= arr[i];
//     }
//     return total;
//   }
  
//   var arr = missing([4,9,2,5,6,8,7,1]);
//   console.log(arr);


// ----------------------------

// function isAnagram(str1, str2) {
//     // Removes spaces and convert into the lowercase letter
  
//     str1 = str1.replace(/\s/g, '').toLowerCase()
//     str2 = str2.replace(/\s/g, '').toLowerCase()
//     // console.log(str1, str2)
  
//     if (str1.length !== str2.length) {
//       return false
//     }
  
//     // Sort the characters in the given string
//     str1 = str1.split('').sort().join('')
//     str2 = str2.split('').sort().join('')
  
//     // Compare the sorted String
  
//     return str1 === str2
//   }
  
//   const check = isAnagram('modi', 'monu')
//   console.log(check) // False
  

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false
//     }
//     str1 = str1.replace(/\s/g, '').toLowerCase()
//     str2 = str2.replace(/\s/g, '').toLowerCase()
//     let counter = {}
//     for (let letters of str1) {
//       counter[letters] = counter[letters] ? counter[letters] + 1 : 1
//     }
//     for (let items of str2) {
//       if (!counter[items]) {
//         return false
//       }
//       counter[items] -= 1
//     }
//     return true
//   }
//   let str1 = 'I am Monu'
//   let str2 = 'am I OnMU'
//   const checkAnagram = isAnagram(str1, str2)
//   console.log(checkAnagram)



// Rectangle
// Perimeter of Rectangle = 2(l + b)
// Area of Rectangle  = l × b
// Where 
// ‘l’ is Length
// ‘b’ is Breadth

// Square
// Area of Square = a2
// Perimeter of Square = 4a
// Where 
// ‘a’ is the length of sides of a Square

// Triangle
// Area of Triangle= 1/2 × b × h
// Where 
// ‘b’ is the base of the triangle and 
// ‘h’ is the height of the triangle

// Trapezoid
// Area of Trapezoid = 1/2 × (b1 + b2) × h
// Where 
// b1 and b2 are the bases of Trapezoid
// h is height of Trapezoid

// Circle
// Area of Circle = π × r2
// Circumference of Circle = 2πr
// Where 
// ‘r’ is radius of a Circle

// Cube
// Surface Area of Cube = 6a2
// Volume of Cube = a3
// Where 
// ‘a’ is the length of sides of Cube

// Cylinder
// Curved Surface Area of Cylinder = 2πrh
// Total Surface Area of Cylinder = 2πr(r + h)
// Volume of Cylinder = V = πr2h
// Where 
// ‘r’ is the radius of base of Cylinder
// ‘h’ is the height of Cylinder

// Cone
// Curved Surface Area of Cone = πrl
// Total Surface Area of Cone = πr(r + l) = πr[r + √(h2 + r2)]
// Volume of Cone = V = 1/3× πr2h
// where, 
// ‘r’ is the Radius of base of Cone
// h is the Height of the Cone

// Sphere
// Surface Area of a Sphere = S = 4πr2
// Volume of a Sphere = V = 4/3 × πr3
// Where, 
// r is the Radius of Sphere

