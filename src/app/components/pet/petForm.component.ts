import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../../services/pet.service';
import { Pet, PetType } from '../../classes/Pet';

@Component({
  selector: 'app-petform',
  templateUrl: './petForm.component.html',
  styleUrls: ['./petForm.component.css']
})
export class PetFormComponent {

  @Input() formTitle;
  petForm: FormGroup;
  nameCtrl: FormControl;
  weightCtrl: FormControl;
  petTypeCtrl: FormControl;
  PetType = PetType;
  petTypes: Array<any> = [];
  public alerts: Array<IAlert> = [];

  constructor(fb: FormBuilder, private petService: PetService) {

    //init the pet Types according to PetType Enum
    for (let enumMember in PetType) {
       let isValueProperty = parseInt(enumMember, 10) >= 0
       if (isValueProperty) {
          this.petTypes.push(enumMember);
       }
    }
    //init form controls
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.weightCtrl = fb.control('', [Validators.required, Validators.pattern('^[0-9]{1,3}$')]);
    this.petTypeCtrl = fb.control(PetType.Lion);

    this.petForm = fb.group({
      petname: this.nameCtrl,
      petweight: this.weightCtrl,
      pettype: this.petTypeCtrl
      });

  }

  public reset(){
    console.log("Reset form controls");
    this.nameCtrl.setValue('');
    this.nameCtrl.markAsUntouched(true);
    this.nameCtrl.markAsPristine(true);

    this.weightCtrl.setValue('');
    this.weightCtrl.markAsUntouched(true);
    this.weightCtrl.markAsPristine(true);

    this.petTypeCtrl.setValue(PetType.Lion);
  }

  public register() {
    this.resetAllAlert();
    console.log("Register pet...");
    console.log(this.petForm.value);
    let newPet: Pet = new Pet(this.nameCtrl.value,this.weightCtrl.value,this.petTypeCtrl.value);
    this.petService.addPet(newPet);
    this.addSuccessMessage(newPet);
    this.reset();

  }

  public addSuccessMessage(pet:Pet){
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'Création OK ! Bienvenue à '+pet.name,
    });
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public resetAllAlert(){
    this.alerts.splice(0,this.alerts.length)
  }
}



export interface IAlert {
  id: number;
  type: string;
  message: string;
}
