import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{PersonaService} from '../services/persona.service';
import{ Persona} from '../models/persona';
import{Location} from '@angular/common';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  persona:Persona;
  stask:string;
  constructor(
    private route:ActivatedRoute,
    private personaService:PersonaService,
    private location:Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get():void{
    const id= + this.route.snapshot.paramMap.get("id");
    this.personaService.get(id).subscribe(persona=>this.persona=persona);
  }
  update():void{
    this.personaService.update(this.persona).subscribe(()=> this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}
