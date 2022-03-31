import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  //heroe!:heroe
    heroe!:Heroe; 

  constructor(private route:ActivatedRoute
            ,private heroesService: HeroesService
            ,private router:Router) { }

  ngOnInit(): void {-
    // Recibir y leer el Id  
    // mostrar en consola
    //activatedRouter
    this.route.params
    .pipe(
      switchMap(({id })=> this.heroesService.getHeroePorIds(id))
    ). subscribe(heroe => this.heroe = heroe);    
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
