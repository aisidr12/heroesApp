import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
 
})
export class HeroeTarjetaComponent{
  // Recuerda que 'miHeroe' es lo que va en el template <app-compontente [miheroe]="heroe"></app-compontente>
  @Input('miHeroe') heroe!:Heroe;  // el ! es confia en mi siempre habra un heroe
  
}
