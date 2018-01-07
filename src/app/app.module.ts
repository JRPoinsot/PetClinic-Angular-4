import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PetClinicAppComponent } from './app.component';
import { PetsComponent } from './components/pet/pets.component';
import { BasePetComponent, PetComponent } from './components/pet/pet.component';
import { PetService } from './services/pet.service';
import { PetFormComponent } from './components/pet/petForm.component';
import { PetListComponent } from './components/pet/petList.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProprietaireComponent } from './components/proprietaire/proprietaire.component';
import { VeterinaireComponent } from './components/veterinaire/veterinaire.component';
//import { }

export const ROUTES: Routes = [
{ path: '', component: HomeComponent },
{ path:'pets',component:PetsComponent },
{ path:'proprietaires',component:ProprietaireComponent },
{ path:'veterinaires',component:VeterinaireComponent }
];

@NgModule({
  declarations: [
    PetClinicAppComponent,
    PetsComponent,
    PetFormComponent,
    BasePetComponent,
    PetListComponent,
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
