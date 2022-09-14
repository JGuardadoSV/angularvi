import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosDTO } from 'src/app/models/usuarios-model';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  api="http://localhost:3000";
  constructor(private http:HttpClient) { }

  async listadoUsuarios(){
   var usuarios:any
    await this.http.get(this.api+"/usuarios/").subscribe(response=>{
      usuarios=response
      
      console.log("fasdfsdf " +response)
      
      ;})
   // console.log(JSON.parse(usuarios))
      return 
  }
}
/*
    this.http.get<{[key:string]:UsuariosDTO}>(this.api+"/usuarios/")
    .pipe(map((res)=>{
      const usuarios:UsuariosDTO[]=[]
      for(const key in res){

      }


    }))

*/


   /* var usuarios:any=[]
    return this.http.get(this.api+"/usuarios/")
    .subscribe(response=>{
      usuarios=response;
      return usuarios
    });
    console.log(usuarios);
    return usuarios*/