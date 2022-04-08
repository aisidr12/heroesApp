import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id : 'DC PUBLISER',
      desc : 'dc - publisher'
    },
    {
      id : 'DC Marvel',
      desc : 'dc - marvel'
    }
  ];

  heroe: Heroe = {
    superhero : '',
    alter_ego : '',
    characters : '',
    first_appearance: '',
    publisher:Publisher.DCComics,
    alt_img: ''
  }
  //activatedRoute: es para coger los parametros de la url
  //Route es para indicar 
  constructor(private heroeService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private snackBar:MatSnackBar,
              private dialog:MatDialog) { }

  ngOnInit(): void {

    console.log(this.router.url);
    //si vas a no llamas a la peticion
    if(!this.router.url.includes('editar')){
      return;
    }
    // pero si vas a editar  llamas a la peticion
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroeService.getHeroePorIds(id))
    )   
    .subscribe(heroe => this.heroe = heroe);

  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    if(this.heroe.id ){
      //actualizar
      this.heroeService.actualizarHeroe(this.heroe)
      .subscribe(resp => {
        this.mostrarSnackBar("Registro actualizado");
        console.log("Actualizando ",resp);
      });
    }else{
      //agregar
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(resp =>{
        //si todo va bien te lleva a la ventana de editar
        this.router.navigate(['/heroes/editar',resp.id])
        this.mostrarSnackBar("Registro Creado"); 
        console.log('Respuesta',resp);
          });
    }
    
    /*
   
    */
  }


  borrarHeroe(){

    const dialog = this.dialog.open(ConfirmarComponent,{
      width:'550px',
      data:this.heroe
      /* investigar el operador expres de js   ... (tres puntos)* */
    });
  
    dialog.afterClosed().subscribe(result =>{
      if(result){
        this.heroeService.eliminarHeroe(this.heroe.id!).
        subscribe(res =>{
          console.log('borramos ',res)
              this.router.navigate(['/heroes']);
        });
      }
    });

  /*  this.heroeService.eliminarHeroe(this.heroe.id!).
    subscribe(res =>{
      console.log('borramos ',res)
          this.router.navigate(['/heroes']);
    });^
    */
  }

  mostrarSnackBar(mensaje:string){
    this.snackBar.open(mensaje,'ok',{
      duration:2500
    });
  }
}
