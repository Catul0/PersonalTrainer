import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  submitForm() {
    const url = 'http://tu-api-restful.com/send-email';
    this.http.post(url, this.formData).subscribe(() => {
      alert('El formulario se envió correctamente!');
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }, () => {
      alert('Ha ocurrido un error al enviar el formulario.');
    });
  }
}
