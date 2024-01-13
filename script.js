// arr=[1,2,"13","4","645"];
// sum=0;
// for(i=0;i<=arr.length-1;i++){
//     if(typeof(arr[i])=="string")
//     continue;

//     sum +=arr[i];
// }
// console.log(sum);





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




// let sum=0;
// function arrsum(x){
  
//     for(i=0;i<=x.length;i++){
//         if (typeof x[i] === "number" && x[i] === x[i]) {
//                 sum += x[i];
//     }
// }
//     console.log(sum);
//     console.log(arrsum(a))
//     }
//     let a=[1, 2, NaN, 3, 4, 5, "13", "4", "645"];
   



// let arr = [1, 2, NaN, 3, 4, 5, "13", "4", "645"];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number" && arr[i] === arr[i]) {
//     sum += arr[i];
//   } else if (typeof arr[i] === "string" && !isNaN(Number(arr[i]))) {
//     sum += Number(arr[i]);
//   }
// }

// console.log(sum);




// let a=[1, 2, 3, 4, 5, "13", "4", "645",NaN]
// let b=arrsum(a)
// function arrsum()
//    {
//         let sum=0;
//         for(i=0;i<a.length;i++)
//             {
                
//                 if (typeof a[i] === "number" && a[i] === a[i]) 
//                 sum += a[i];


//             }
//             console.log(sum);
//     }

// let arr=([10,400,300,20,500,100,80])
// let large=arr[0];
// let secondlarge=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         secondlarge=large;
//         large=arr[i];
//     }
//     else if(arr[i]>secondlarge){
//         secondlarge=arr[i];
//     }

// }
// console.log(secondlarge)


// let arr=([-10,-4000,-999,-10000,-300,-20,-5000,-100,-80,-110])
// let large=arr[0];
// let secondlarge=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         secondlarge=large;
//         large=arr[i];
//     }
//     else if(arr[i]>secondlarge && arr[i]!==secondlarge){
//         secondlarge=arr[i];
//     }
    
// }
// console.log(secondlarge)

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//       return 'Array should have at least two elements.';
//     }
  
//     let largest = arr[0];
//     let secondLargest = -Infinity;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
  
//     if (secondLargest === -Infinity) {
//       return 'No second largest element found.';
//     }
  
//     return secondLargest;
//   }
  
//   const arr = [-10, -4000, -999, -10000, -300, -20, -5000, -100, -80, -110];
//   const secondLargest = findSecondLargest(arr);
  
//   console.log('Second largest element:', secondLargest);
  
// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//       return 'Array should have at least two elements.';
//     }
  
//     let largest = arr[0];
//     let secondLargest = null;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (secondLargest === null || (arr[i] > secondLargest && arr[i] !== largest)) {
//         secondLargest = arr[i];
//       }
//     }
  
//     if (secondLargest === null) {
//       return 'No second largest element found.';
//     }
  
//     return secondLargest;
//   }
  
//   const arr = [60,99,55,44,68,30,80,62,10];
//   const secondLargest = findSecondLargest(arr);
  
//   console.log('Second largest element:', secondLargest);
  

  
  
// function findSecondLargest(arr) {
  
//     let largest = arr[0];
//     let secondLargest = null;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (secondLargest === null || (arr[i] > secondLargest && arr[i] !== largest)) {
//         secondLargest = arr[i];
//       }
//     }
  
//     return secondLargest;
//   }
  
//   const arr = [60,99,55,44,68,30,80,62,10];
//   const secondLargest = findSecondLargest(arr);
  
//   console.log('Second largest element:', secondLargest);
  

// function objectToArray(obj) {
//     const result = [];
  
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result.push([key, obj[key]]);
//       }
//     }
  
//     return result;
//   }
  
//   const obj = { a: 1, b: 2, c: 3 };
//   const arr = objectToArray(obj);
//   console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]


// function objectToArray(obj) {
//     const keys = ['key1', 'key2', 'key3']; 
//     const result = Array(keys.length * 2); 
//     for (let i = 0; i < keys.length; i++) {
//       const key = keys[i];
//       const value = obj[key];
//       result[i * 2] = key;
//       result[i * 2 + 1] = value;
//     }
  
//     return result;
//   }
  
//   const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
//   const arr = objectToArray(obj);
//   console.log(arr); // Output: ['key1', 'value1', 'key2', 'value2', 'key3', 'value3']
  

// function objectToArray(obj) {
//     const keys = ['D', 'B', 'C']; // Known keys
//     const result = Array(keys.length);
  
//     for (let i = 0; i < keys.length; i++) {
//       const key = keys[i];
//       result[i] = [key, obj[key]];
//     }
  
//     return result;
//   }
  
//   const obj = { D: 1, B: 2, C: 3 };
//   const arr = objectToArray(obj);
//   console.log(arr); // Output: [["D", 1], ["B", 2], ["C", 3]]
  

// function objectToArray(obj) {
//     const keys = ['D', 'B', 'C']; // Known keys
//     const result = [
//       [keys[0], obj[keys[0]]],
//       [keys[1], obj[keys[1]]],
//       [keys[2], obj[keys[2]]]
//     ];
  
//     return result;
//   }
  
//   const obj = { D: 1, B: 2, C: 3 };
//   const arr = objectToArray(obj);
//   console.log('Output:', arr); // Output: [["D", 1], ["B", 2], ["C", 3]]
  
// console.log("----------------------------------JS logical problem three");

// let obj = { A: 1, B: 2, C: 3 };
// let keys = ['A', 'B', 'C']; 
// let arr = objectToArray(obj);

// function objectToArray(obj) {
    
//     let result = [
//       [keys[0], obj[keys[0]]],
//       [keys[1], obj[keys[1]]],
//       [keys[2], obj[keys[2]]]
//     ];
  
//     return result;
//   }
  
//   let output = '[';
//   for (let i = 0; i < arr.length; i++) {
//     output += '[' + arr[i][0] + ', ' + arr[i][1] + ']';
//     if (i < arr.length - 1) {
//       output += ', ';
//     }
//   }
//   output += ']';
  
//   console.log(output);
  



// const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

// function removeDuplicate(arr) {
//     const result = [];
//     let idx = 0;
//     const tmp = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!tmp[arr[i]]) {
//             tmp[arr[i]] = 1;
//             console.log(arr[i])
//             result[idx] = arr[i];
//             idx++;
//         } 
//     }
//     return result;
// }

// console.log(removeDuplicate(input));

// ------3 trying-------------------------------------------

// object to array-------------------------------------
// let a=[2,5,6,7,9,22,6,2,5,"a","b","a"];
// let i;
// let b=[]
// for(i=0;i<a.length;i++){
//      b[i]=a[i]
// }
// console.log(b);

// let obj={a:1,b:3,c:4,d:2};
// key=Object.keys(obj)
// console.log(key);
// values=Object.values(obj)
// console.log(values);

// let c=[];
// let d=[];
// let i;
// let j;

// for(i=0;i<key.length;i++)
//     c=i
// {   for(j=0;j<=i;j++){
//     console.log(key[i]);
//     console.log(values[j]);
//     }
// }


// reverse Array and store it to new array----------------------


// let arr = [23,8,9,33,"theetshi","a",true]
// let b=[];

// let i;
// for( i=arr.length-1;i>=0;i--){
//     b[arr.length-1-i]=arr[i];

// }

// console.log(b);


// --------trial try for find missing value------------------


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

//   var arr = missing([8,7,6,4,3,2,1]);
//   console.log(arr);

// let check_duplicate_in_array = (input_array) => { 
// 	let duplicate_elements = [] 
// 	for (num in input_array) { 
// 		for (num2 in input_array) { 
// 			if (num === num2) { 
// 				continue; 
// 			} 
// 			else { 
// 				if (input_array[num] === input_array[num2]) { 
// 					duplicate_elements.push(input_array[num]); 
// 				} 
// 			} 
// 		} 
// 	} 
// 	return [...new Set(duplicate_elements)]; 
// } 
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1]; 
// console.log(check_duplicate_in_array(arr));
