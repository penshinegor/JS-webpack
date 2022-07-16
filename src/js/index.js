import '../styles/main.scss';

//Function 1
function EqualityTestFunction (a, b) {
    return a === b;
}
console.log(EqualityTestFunction(2, 3));
console.log(EqualityTestFunction(3, 3));
console.log(EqualityTestFunction(1, '1'));
console.log(EqualityTestFunction('10', '10'));

//Function 2
function CheckDivisionFunction (x, y) {
    while (true){
        if (x % y == 0) {
            return x;
        }
        x++;
    }
}
console.log(CheckDivisionFunction(1, 23));
console.log(CheckDivisionFunction(23, 23));
console.log(CheckDivisionFunction(7, 3));
console.log(CheckDivisionFunction(-5, 7));