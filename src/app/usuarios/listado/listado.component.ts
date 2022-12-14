import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuariosDTO } from 'src/app/models/usuarios-model';
import { ListadoService } from './listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})



export class ListadoComponent implements OnInit {
  public usuarios:  any =  [ ];
  api="http://localhost:3000";
  constructor(private http:HttpClient) { 


    this.http.get(this.api+"/usuarios/").subscribe(response=>{
      this.usuarios=response
      
      
      
      ;})
  }

  enviarPos():void{

    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
    .subscribe(response=>{
      console.log(response);
    });
  }

  

  ngOnInit(): void {
    
 }
}
  


