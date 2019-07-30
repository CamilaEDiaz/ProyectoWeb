import { Component, OnInit } from '@angular/core';
import { CitaService} from '../services/cita.service';
import{ Cita}from '../models/cita';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  citas:Cita[];
  constructor(private citaService: CitaService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.citaService.getAll().subscribe(citas=>this.citas=citas);
  }
}