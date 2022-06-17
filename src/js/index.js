import '../styles/main.scss';

//Function 1
function EqualityTestFunction (a, b) {
    if (a === b) {
        return true;
    }
    return false;
}
console.log(EqualityTestFunction(2, 3));
console.log(EqualityTestFunction(3, 3));
console.log(EqualityTestFunction(1, '1'));
console.log(EqualityTestFunction('10', '10'));

//Function 2
function CheckDivisionFunction (x, y) {
    if (x % y == 0) {
        return x;
    }
    else {
        while (true){
            x++;
            if (x % y == 0) {
                return x;
            }
        }
    }
}
console.log(CheckDivisionFunction(1, 23));
console.log(CheckDivisionFunction(23, 23));
console.log(CheckDivisionFunction(7, 3));
console.log(CheckDivisionFunction(-5, 7));