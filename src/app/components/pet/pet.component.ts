import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet, PetType } from '../../classes/Pet';


@Component({
selector: 'app-base-pet',
template: `
  <!--<div *ngIf="show">Nom: {{ pet.name }}, Poids: {{pet.weight}}, Race: {{PetType[pet.type]}}</div>-->
  <div *ngIf="show">{{ pet | json}}</div>
`
})
export class BasePetComponent implements OnInit {

  @Input() pet: Pet;

  show:boolean = true;
  ngOnInit() {
    if(this.pet.name == null){
      this.show = false;
    }
    console.log("basepet"+ this.show);
  }

}



@Component({
selector: 'app-pet',
templateUrl: './pet.component.html',
styleUrls: ['./pet.component.css']
})
export class PetComponent extends BasePetComponent {

  // allows you to use PetType in template
  PetType = PetType;

  @Output() onSelected: EventEmitter<Pet> = new EventEmitter();

  ngOnInit() {
    super.ngOnInit();
    console.log("pet");
  }

  onPetClick (): void {
    console.log("click on :" + this.pet.name);
    this.onSelected.emit(this.pet);
  }
}
