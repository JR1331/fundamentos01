import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ej02',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej02.component.html',
  styleUrl: './ej02.component.css'
})
export class Ej02Component {
  descrp:string="";
  codigo=0;
  precioc=0;
  preciov=0;
  stock=0;
ingresar():void{
  if(this.precioc>0&&this.preciov>0&&this.stock>0){
    console.log("Producto introducido correctamente")
  }else{
    console.log("Has introducido alguno de los valores a 0")
  }
}
}
