import { Component, Input, OnInit } from '@angular/core';
import { PeliculaI } from '../../interfaces/pelis.interface';

@Component({
  selector: 'app-pelis-tarjeta',
  templateUrl: './pelis-tarjeta.component.html',
  styles: [`
  
  mat-card {
    margin-top: 20px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    height: 450px;
  }

  img{
      height: 250px;
      width:  100%;
      object-fit: cover;  
  }

  @media screen and (min-width: 300px) and (max-width: 600px) {

    mat-card {
      height: 395px;
    }

  } 

`
]
})
export class PelisTarjetaComponent {

  @Input() peli!: PeliculaI;

}
