export interface IContainer {
    value: number | null | undefined;
}

export interface ICircle  {
    kind: 'circle';
    radius: number;
}

export interface ISquare {
    kind: 'square';
    sideLength: number;
}

export interface IGenericIdentityFn<Type>{
    (arg: Type): Type;
}

export interface ILengthwise {
    length: number;
}