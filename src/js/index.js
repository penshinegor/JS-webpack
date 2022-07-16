import '../styles/main.scss';

function createNewObject (obj) {
    const newObject = {};
    if (obj?.fn) { newObject.fn = obj.fn; }
    if (obj?.ln) { newObject.ln = obj.ln; }
    if (obj?.size) { newObject.size = obj.size.toString() + 'cm'; }
    if (obj?.weight) { newObject.weight = obj.weight.toString() + 'kg'; }
    return newObject;
} 

console.log(createNewObject({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(createNewObject({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(createNewObject({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(createNewObject({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));