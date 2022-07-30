import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.scss']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string ="";
  descripcionE: string="";

  constructor( private sExperiencia: SEducacionService, private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Educacion(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data =>{
        alert("Educacion  añadida");
        this.router.navigate(['']);        
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}

  


