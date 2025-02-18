export class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;

    constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}


///////////////////////////////////////////////////////////
class BeerKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = 'Mikle';
}

export class Animal {
    numLegs: number = 4;
}

export class Bee extends Animal {
    numLegs = 6;
    keeper: BeerKeeper = new BeerKeeper();
}

export class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}