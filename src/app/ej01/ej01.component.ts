import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ej01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej01.component.html',
  styleUrl: './ej01.component.css'
})
export class Ej01Component {
  email:string="";
  passw:string="";
  rptPasw:string="";
  validarContra(): void{
    if(this.passw===this.rptPasw){
        console.log("Bienvenido, te has registrado correctamente");
    }else{
      console.log("Error, contraseña invalida");
    }
  }
}
