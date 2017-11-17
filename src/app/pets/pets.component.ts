import { Component } from '@angular/core';

import { PetService } from '../services/pet.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  petList = {};
  // add a constructor with PetService
  constructor(private petService: PetService) {
    this.petList = this.petService.availableList();
  }

  refreshPetList() {
    this.petList = this.petService.availableList();
    return this.petList;
  }

}
