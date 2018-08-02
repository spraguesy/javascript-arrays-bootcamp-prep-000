chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skitles'
];

function addElementToBeginningOfArray (arr, al) {
  var newArr = [al,...arr];
  return newArr
}

function destructivelyAddElementToBeginningOfArray (arr, al) {
  arr.unshift(al);
  return arr
}

<<<<<<< HEAD
function addElementToEndOfArray (arr, al) {
=======
function addElementtoEndOfArray (arr, al) {
>>>>>>> 8ab52a1c8772b6c2175277ae4421165cfe5f5018
  var newArr = [...arr, al];
  return newArr
}

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(arr, al) {
=======
function destrutivelyAddElemntToEndOfArray(arr, al) {
>>>>>>> 8ab52a1c8772b6c2175277ae4421165cfe5f5018
  arr.push(al);
  return arr
}

<<<<<<< HEAD
function accessElementInArray (arr, index) {
  return arr[index]
}

=======
function accessElementInAray (arr, index) {
  return arr[index]
}

function remoeElementFromBeginningOfArray (ar) {
  var newArr = arr.slice(1);
  return newArr
}

>>>>>>> 8ab52a1c8772b6c2175277ae4421165cfe5f5018
function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray (arr) {
  var newArr = arr.slice(0, arr.length -1);
  return newArr
}
<<<<<<< HEAD

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray (arr) {
  var newArr = arr.slice(1, arr.length)
  return newArr
}



=======
>>>>>>> 8ab52a1c8772b6c2175277ae4421165cfe5f5018
