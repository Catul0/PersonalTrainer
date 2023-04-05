import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/services/obtener-datos.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  planes:any;
  constructor(private datosPorfolio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.planes = data.planes;
    })
  }

}
