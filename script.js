var array = [2, 3, 1, 5, 4]; // create an array
console.log('Original array:', array); // print out the original array to the console

// var sortArray = array.sort(); // shorthand selection sort method in JavaScript, but this can be problematic because it sorts lexicographically as its default, NOT numerically
// console.log('JavaScript .sort() method:', sortArray);

function selectionSort() { // declare the function
  var arrayLength = array.length; // store the length of the array in a local variable
  for (var index = 0; index < arrayLength - 1; index++) { // loop through the array
    var minNum = index; // assume the 1st index [0] is the minimum number in the array and store as local variable
    for (var comparisonIndex = index + 1; comparisonIndex < arrayLength; comparisonIndex++) {
      // line 10 comment: set the comparisonIndex to the current index + 1 (since we assume the 1st index [0] is the minimum number);
      // if the comparisonIndex is less than the array's length, iterate through the following code and then increase the comparisonIndex by 1
      if(array[comparisonIndex] < array[minNum]) { // if the array's comparisonIndex is less than the minNum index
        minNum = comparisonIndex; // set the minNum equal to the comparisonIndex
      }
    }
    if(minNum != index) { // if the minNum is NOT equal to the index
      var swapIndices = array[index]; // set that index to the variable swapIndices
      array[index] = array[minNum]; // set the index to the minNum index
      array[minNum] = swapIndices; // set the minNum index to the swapIndices variable
    }
  }
  console.log('selectionSort array:', array); // print out the sorted array to the console
  var sortedArray = array; // store the newly sorted array in a new variable for clarity's sake
  return sortedArray; // upon completion of running the function, return the sortedArray for access elsewhere in the program
}

// use jQuery to display info on the DOM
$(function() {
  var id = 0;
  array.forEach(function(index) { // for each index in the array
    $('section').append('<div id="' + id + '">' + index + '</div>'); // append a new div to the DOM with a unique id
    id++; // increase the id by 1 for the next iteration
  });

  $('#sort').on('click', function() { // when a user clicks the sort button, run this function
    selectionSort(array); // call the selectionSort function, passing in the array as the argument
    for(var i = 0; i < array.length; i++) { // loop through the array using its length to know when to stop
      $('#' + i).text(array[i]); // update the text in each div, using the id to determine each unique div
    }
  });
});
