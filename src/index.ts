// import { padLeft, printAll, multiplyAll, example, multiplyValue, move, logValue, example2, getArea } from './file';

// // functions test
// console.log(padLeft(3, 'string'));
// printAll('refgef');
// console.log(multiplyAll([1, 2, 3], 2));
// console.log(example('1', '1'));
// multiplyValue({ value: 2 }, 2)
// move({ fly: () => console.log("Flyyyy!") });
// logValue(new Date());
// example2();
// getArea({kind: 'circle', radius: 2});

import { identity, logginIdentity, myIdentity } from "./file";
import { GenericNumber } from "./src/classes";

let output1 = identity(12);
let output2 = identity('str');

logginIdentity([1, 2, 3, 4]);

myIdentity(2);

const myGenericNumber = new GenericNumber<string>('test', (a, b) => a + b);

console.log(myGenericNumber.zeroValue);
console.log(myGenericNumber.add('a', 'b'));


