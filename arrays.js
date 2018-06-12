
// define variable chocolateBars--its value shoule be an array of strings

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// return a new array and not modify the original
function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
 }
 
// alter the original array that's passed in (mutate array's value)
 function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
 }
 
 // return a new array and not modify the original
 function addElementToEndOfArray(array, element){
   return [...array, element]
 }
 
// mutate original array value
 function destructivelyAddElementToEndOfArray(array, element){
   return array.push(element)
 }
 
 function accessElementInArray(array, element){
   return array[element]
 }
 
//DESTRUCTIVE-MUTABLE remove an element from the beginning of an array
 function destructivelyRemoveElementFromBeginningOfArray(array){
   return array.shift(1)
 }
 
 function removeElementFromBeginningOfArray(array){
   return array.slice(1)
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   return array.pop()
 }
 
 
 
 
 