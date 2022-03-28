import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule}  from '@angular/material/button';
import {MatIconModule}  from '@angular/material/icon';
import {MatListModule}  from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  //Informacion:
  // Import es para cuando el modulo va ser usado por si mismo
  // export es para cuando este modulo va ser usado por otros
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
