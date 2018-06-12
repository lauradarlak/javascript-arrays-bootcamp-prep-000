
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
   return array.slice(1)
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
 }
 
 function removeElementFromEndOfArray(array){
   array.slice(0, array.length - 1)
   return array
 }
 
 
 
 
 