"use strict"

// function duplicate_arr(input){ 
// 	var duplicate_elements = []; 
//     let c=0;
// 	for (let element of input) { 
// 		if (input.indexOf(element)!== input.lastIndexOf(element)) { 

// 			duplicate_elements[c]=element;
//             c++; 
// 		} 
// 	} 
// 	return [...new Set(duplicate_elements)]; 
// }; 
// let arr =duplicate_arr([1, 1, 2, 2, 3, 3, 4, 5, 6,6,6,1]); 
// console.log(arr);


// let arr=[1,2,4,5,3,2,1,6,5];
// console.log(arr)
// let a1=[];
// let c1=0;

// for(var i=0;i<duplicate_elements.length-1;i++){
//     if(a1.indexOf(duplicate_elements[i])==-1){
//         a1[c1]=duplicate_elements[i];
//         c1++
//     }
// }
// console.log(a1)


// var arm=prompt("enter a number");

// var a=arm.split("");
// console.log(a);

// var b=parseInt(arm);
// console.log(b);

// var c=0;

//     for( var i=0;i<=a.length;i++){
//         c=i;
        
//     }
//     console.log(c);

// var d=[];
// var e=0;

//     for(var j=0;j<=a.length-1;j++){
//         d[e]=(a[j]**c);
//         e++;
//     }
//     console.log(d);

    
// var result=0;
//     for(var k=0;k<=d.length-1;k++){
//         result+=d[k];
//     }

// console.log(result);

// if(b===result){
//     console.log(b+" is a Armstrong number")
// }
// else{
//     console.log(b+" is not a Armstrong number")

// }

// var count=prompt("Enter a count for fabinocii");

// let a=0;
// let b=1;
// let c=0;


// for(var i=0;i<=count;i++)
// {
//     c = a + b;
//     a = b;
//     b = c;
 
// }

// -------------------------------

   //  var i = 2;

   //  function isPrime(n) {

   //    //   if (n == 0 || n == 1) {
   //    //   return false;
   //    //   }

   //      if (n == i) return true;
   //      console.log(i)
   //      if (n % i == 0) {
   //      return false;
   //      }
   //      i++;
   //      return isPrime(n);
   //  }


   //  isPrime(35) ? document.write(" true\n") : document.write(" false\n");

for(let i=1;i<50;i++){
   if(i%2!=0 && i%3!=0 && i%5!=0){
      console.log(i,"it is a prime number")
   }
   else{
      console.log(i,"not a prime no")
   }
}