# Selection Sort Algorithm Code Challenge
This is a selection sort algorithm. The function iterates over an array,
sorting each item from minimum to maximum until the array is completely sorted.
To begin, we assume the first index is the minimum number and then compare it to
each remaining number in the array. If another number is found to be the minimum,
that new number takes the first index and is compared to the remaining numbers.

- For example: [2, 3, 1, 5, 4]
    - 2 < 3 and therefore stays in the 0 index
    - 2 > 1 and 1 < 5 and 4, so 1 takes the 0 index
    - [1, 3, 2, 5, 4]
    - 3 > 2 and 2 < 5 and 4, so 2 takes the 1 index
    - [1, 2, 3, 5, 4]
    - 3 < 5 and 4, so 3 stays in the 2 index
    - 5 > 4, so 4 takes the 3 index
    - [1, 2, 3, 4, 5] <-- sorting complete

## To View
Clone this repo and open index.html in a browser window.

### Technologies Used
- JavaScript
- jQuery
- HTML5
- CSS3

# Author
- Laura Abend
