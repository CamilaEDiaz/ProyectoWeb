import { Injectable } from '@angular/core';
import{InMemoryDbService} from 'angular-in-memory-web-api';
import {Persona} from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
    const Persona=[
      {id:0 , nombre:"Camila" , apellido:"Espinosa" , correo: "camila@gmail.com", telefono:3174952135 , estatura:1.64 , edad:20 , colorDePiel: "blanca" , colorDeOjos:"cafe" , cabello:"mona"},
      {id:0 , nombre:"Laura" , apellido:"Restrepo" , correo: "laura@gmail.com", telefono:3006786654 , estatura:1.70 , edad:24 , colorDePiel: "trigeña" , colorDeOjos:"verdes" , cabello:"castaña"},
    ];
    return{Persona};
  }
  genId(personas: Persona[]): number{
    return personas.length > 0 ? Math.max(...personas.map(persona => persona.id)) +1 : 11;  
  }
}