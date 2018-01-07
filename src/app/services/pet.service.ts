import { PetType } from "../classes/Pet";
import { Pet } from "../classes/Pet";
import { Observable } from 'rxjs/Observable';

export class PetService {

  petList: Array<Pet> = [];

  petObservable: Observable<Array<Pet>>;

  constructor(){
    this.petList = [new Pet('Doug',9, PetType.Dog),
                    new Pet('Symba',70, PetType.Lion),
                    new Pet('Felix',4, PetType.Cat),
                    new Pet(undefined,4, PetType.Cat)]

    this.petObservable = new Observable(observer => observer.next(this.petList));
  }

  availableList() {
    return this.petObservable;
  }

  addPet(newPet:Pet){
    this.petList.push(newPet);
  }

  deletePet(oldPet:Pet){
    //this.petList.filter
    this.petList.push(oldPet);
  }
}
