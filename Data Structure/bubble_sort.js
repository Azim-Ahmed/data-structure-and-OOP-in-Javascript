const numbers = [32,234,432,22,33,2,1]
//[32,234,22,432,33,2,1]

//that means this algorithm run

function bubbleSort(array){
for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array.length; j++) {
       if(array[j]  > array[j+1]){
           const temp = array[j]
           array[j] = array[j+1]
           array[j+1] = temp
       } 
   }  
}
return array;
}
const asecendingSort = bubbleSort(numbers)
console.log(asecendingSort);