
// define variable chocolateBars--its value shoule be an array of strings

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// return a new array and not modify the original
function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
 }
 
// alter the original array that's passed in--mutable/destructive
 function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
   return array
 }
 
 // return a new array and not modify the original
 function addElementToEndOfArray(array, element){
   return [...array, element]
 }
 
// mutate original array value
 function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
   return array
 }
 
 function accessElementInArray(array, index){
   return array[index]
 }
 
//DESTRUCTIVE-MUTABLE remove an element from the beginning of an array
 function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
 }
 
 function removeElementFromBeginningOfArray(array){
   array.slice(1)
   return array
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   return array.pop()
 }
 
 
 
 
 