import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PelisService } from '../../services/pelis.service';
import { PeliculaI } from '../../interfaces/pelis.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class PeliculaComponent implements OnInit {

  peli!: PeliculaI;

  constructor( private activatedRoute: ActivatedRoute,
               private PelisService: PelisService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.PelisService.getPelisPordId( id ) )
    )
    .subscribe( peli => this.peli = peli );

  }

  regresar() {
    this.router.navigate(['/peliculasapp/listado']);
  }

}
