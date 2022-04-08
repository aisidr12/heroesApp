import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorIds(id:String):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencia(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);

  }

  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    console.info("Heroe body",heroe);
    return this.http.post<Heroe>(`${this.baseUrl}/heroes/`,heroe);
  }

  actualizarHeroe(heroe:Heroe):Observable<Heroe>{
     return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
    
  }

  eliminarHeroe(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);

  }
}
