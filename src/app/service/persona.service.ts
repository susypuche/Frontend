import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

  
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
   URL = 'https://argentinaprogramasusana.herokuapp.com/personas/';

   
    constructor(private http: HttpClient) { }
  
    public getPersona(): Observable<persona>{
      //var aux
      return this.http.get<persona>(this.URL+ 'traer/perfil');
      
    }
}
