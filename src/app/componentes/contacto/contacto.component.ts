import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  apellido:string = "";
  nombre:string = "";
  email: string = "";
  telefono: string = "";
  message: string = "";
  opcion=false;
  alerta:string = "Gracias por contactar conmigo! Me comunicare contigo lo antes posible.";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('https://formspree.io/f/xzbqjdga', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this.opcion=true;
        event.target.reset();
        setTimeout(()=>{
          this.opcion=false;
        }, 7000);
      } else {
        throw new Error('Response not OK');
      }
    })
      .then(json => console.log(json))
      .catch(error => {
        console.error(error);
      });
  }

}
