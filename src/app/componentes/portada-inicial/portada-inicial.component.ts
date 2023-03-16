import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/services/obtener-datos.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-portada-inicial',
  templateUrl: './portada-inicial.component.html',
  styleUrls: ['./portada-inicial.component.css']
})
export class PortadaInicialComponent implements OnInit {
  subscription?: Subscription;
  portada:any;
  constructor(private datosPorfolio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.portada=data.portada;
    })
  }

}
