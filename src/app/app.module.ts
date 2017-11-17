import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PetClinicAppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pet/pet.component';
import { PetService } from './services/pet.service';
import { PetFormComponent } from './pet/petForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { VeterinaireComponent } from './veterinaire/veterinaire.component';
//import { }

export const ROUTES: Routes = [
{ path: '', component: HomeComponent },
{ path:'pets',component:PetsComponent },
{ path:'createPet',component:PetFormComponent },
{ path:'proprietaires',component:ProprietaireComponent },
{ path:'veterinaires',component:VeterinaireComponent }
];

@NgModule({
  declarations: [
    PetClinicAppComponent,
    PetsComponent,
    PetFormComponent,
    PetComponent,
    HomeComponent,
    ProprietaireComponent,
    VeterinaireComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),NgbModule.forRoot(),BrowserModule,ReactiveFormsModule
  ],
  providers: [
    PetService
  ],
  bootstrap: [PetClinicAppComponent]
})
export class AppModule { }
