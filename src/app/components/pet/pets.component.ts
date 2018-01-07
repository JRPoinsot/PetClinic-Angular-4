import { Component } from '@angular/core';
import { Pet } from '../../classes/Pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html'
})
export class PetsComponent {

  petDetails: Pet = null;

  refreshPetDetails ($event: Pet): void {
    console.log($event);
    this.petDetails = $event;
  }

}
