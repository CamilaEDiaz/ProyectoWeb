import { Component, OnInit } from '@angular/core';
import { PersonaService} from '../services/persona.service';
import{ Persona}from '../models/persona';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  constructor(private personaService: PersonaService) { }
  persona: Persona;
  ngOnInit() {
    this.persona={ id:0, nombre:"", apellido:"", correo:"", telefono:0, estatura:0, edad:0, colorDePiel:"",coloDeOjos:"", cabello:""}  
  }
 add(){
   this.personaService.addPersona(this.persona).subscribe(persona =>{
     alert('Se registro el perfil de la persona')
   });
 }
}