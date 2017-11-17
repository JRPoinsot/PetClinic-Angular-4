export enum PetType {
  Lion = 0,
  Dog= 1,
  Cat= 2,
  Pony= 3,
  Tiger=4
}

export class Pet{
  name: string;
  weight: number;
  type: PetType;

  constructor(pName:string, pWeight:number, pType:PetType){
    this.name =pName;
    this.weight = pWeight;
    this.type = pType;
  }
}
