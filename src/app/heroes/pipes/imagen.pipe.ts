import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name:'imagen'
    /*
    pure:false hara que se refresca
    */
})

export class ImagenPipe implements PipeTransform{

    transform(heroe: Heroe) :string {
        //assets/heroes/{{heroe.id}}.jpg"
        //Si no tiene el un id, ejemplo en la creacion
        
        if(heroe.alt_img===''){
            return 'assets/no-image.png';
        }else if(!heroe.id && !heroe.alt_img ){         
            return 'assets/no-image.png';
        }else if( heroe.alt_img){
            return heroe.alt_img;
        }else{           
            console.log(heroe);
            return  `assets/heroes/${heroe.id}.jpg`;
        }
       
    }

}