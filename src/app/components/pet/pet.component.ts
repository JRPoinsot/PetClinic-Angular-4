import { Component, OnInit, Input } from '@angular/core';
import { Pet, PetType } from '../../classes/Pet';

@Component({
selector: 'app-pet',
template: `
  <!--<div *ngIf="show">Nom: {{ pet.name }}, Poids: {{pet.weight}}, Race: {{PetType[pet.type]}}</div>-->
  <div *ngIf="show">{{ pet | json}}</div>
`
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;

  // allows you to use PetType in template
  PetType = PetType;
  show:boolean = true;

  ngOnInit() {
    if(this.pet.name == null){
      this.show = false;
    }
  }

}
