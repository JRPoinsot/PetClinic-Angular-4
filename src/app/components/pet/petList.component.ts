import { Component, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../classes/Pet';
import { PetService } from '../../services/pet.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './petList.component.html',
  styleUrls: ['./petList.component.css']
})
export class PetListComponent {

  @Output() onSelectedPet: EventEmitter<Pet> = new EventEmitter();

  petList = {};
  // add a constructor with PetService
  constructor(private petService: PetService) {
    this.petService.availableList().subscribe(values => this.petList = values);
  }

  onPetSelected ($event: Pet): void {
    this.onSelectedPet.emit($event);
  }
/*  refreshPetList() {
    this.petList = this.petService.availableList();
    return this.petList;
  }*/

}
