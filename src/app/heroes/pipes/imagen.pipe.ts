import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name:'imagen'
})

export class ImagenPipe implements PipeTransform{

    transform(heroe: Heroe) :string {
        //assets/heroes/{{heroe.id}}.jpg"
        //Si no tiene el un id, ejemplo en la creacion
        debugger;
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