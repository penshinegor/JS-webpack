import { indexOf } from 'lodash';
import '../styles/main.scss';

// Function 1
function alphabeticallySortArray (array) {
    return array.sort();
}

console.log(alphabeticallySortArray(['b', 'c', 'd', 'a']));
console.log(alphabeticallySortArray(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// Function 2
function sumElement (arr, number) {
    var sum = arr.reduce(function(sum, currentItem) {
        if (currentItem > number) {
            return sum + currentItem;
        }
        return sum;
    }, 0);

    return sum;
}

console.log(sumElement([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumElement([-10, -11, -3, 1, -4], -3));
console.log(sumElement([78, 99, 100, 101, 401], 99));

// Function 3 
function mergeArray (firstArray, secondArray) {
    let newArray = [...firstArray, ...secondArray];
    newArray = newArray.filter(function(item, i) {
        return newArray.indexOf(item) == i;
    });

    return newArray.sort((a, b) => a - b);
}

console.log(mergeArray([1, 2, 3], [3, 4, 5]));
console.log(mergeArray([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));