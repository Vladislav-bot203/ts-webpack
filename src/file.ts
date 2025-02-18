// import { IContainer } from "./src/interfaces";
// import { Fish, Bird, Human, Shape } from "./src/types";
import { IGenericIdentityFn, ILengthwise } from "./src/interfaces";
import { Animal, Bee, Lion } from "./src/classes";
import { Container } from "./src/types";

function identity<Type>(arg: Type): Type {
    return arg;
}

function logginIdentity<T extends ILengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const myIdentity: IGenericIdentityFn<number> = identity;

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

getProperty(x, 'a');

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

///////////////////////////////////////////////////////

declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
    element?: T,
    children?: U
): Container<T, U>;

const div = create();
const p = create(new HTMLParagraphElement(), [new HTMLParagraphElement(), new HTMLDataListElement()]);

///////////////////////////////////////////////////////

// function padLeft(padding: number | string, input: string): string {
//     if (typeof padding === 'number') {
//         return ' '.repeat(padding) + input;
//     }
//     return padding + input;
// }

// function printAll(strs: string | string[] | null): void {
//     if (strs instanceof Array) {
//         for (const s of strs) {
//             console.log(s);
//         }
//     }

//     if (typeof strs === "string") {
//         console.log(strs);
//     }
// }

// function multiplyAll(
//     values: number[] | undefined,
//     factor: number
// ): number[] | undefined {
//     if (!values) {
//         return values;
//     } else {
//         return values.map((x) => x * factor);
//     }
// }

// function example(x: string | number, y: string | boolean): string[] | void {
//     if (x === y) {
//         return [x.toUpperCase(), y.toLowerCase()]
//     } else {
//         console.log(x);
//         console.log(y);
//     }
// }

// function multiplyValue(container: IContainer, factor: number): void {
//     if (container.value != null) {
//         console.log(container.value);
//         container.value *= factor;
//         console.log(container.value);
//     }
// }

// function move(animal: Fish | Bird | Human): void {
//     if ('swim' in animal) {
//         animal;
//     }
//     animal;
// }

// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//         console.log(x.toUTCString());
//     } else {
//         console.log(x.toUpperCase());
//     }
// }

// function example2(): string | number {
//     let x: string | number | boolean;
   
//     x = Math.random() < 0.5;
   
//     if (Math.random() < 0.5) {
//       x = "hello";
//       console.log(x);
//     } else {
//       x = 100;
//       console.log(x);
//     }

//     return x;
//   }

// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
// }

// function getArea(shape: Shape): number {
//     switch (shape.kind) {
//         case 'circle':
//             return Math.PI * shape.radius ** 2;
//         case 'square':
//             return shape.sideLength ** 2;
//         default:
//             const _exhaustiveCheck: never = shape;
//             return _exhaustiveCheck;
//     }
// }

export {
    identity,
    logginIdentity, 
    myIdentity
    // padLeft,
    // printAll,
    // multiplyAll,
    // example,
    // multiplyValue,
    // move,
    // logValue,
    // example2,
    // isFish,
    // getArea
};


