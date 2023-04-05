import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../../services/obtener-datos.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  experiencia:any;
  info: any;
  subscription?: Subscription;
  constructor(
    private datosPorfolio:ObtenerDatosService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.info = data.informacion;
      this.experiencia=data.experiencia;
    })
  }
  
}
