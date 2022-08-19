import { Component, OnInit } from '@angular/core';
import { PeliculaI } from '../../interfaces/pelis.interface';
import { PelisService } from '../../services/pelis.service';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  pelis: PeliculaI[] = [];
  peliSeleccionada: PeliculaI | undefined;

  constructor( private PelisService: PelisService) { }

  ngOnInit(): void {
  }

  buscando() {

    this.PelisService.getSugerencias( this.termino.trim() )
    .subscribe( pelis => this.pelis = pelis );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.peliSeleccionada = undefined;
    }


    const peli: PeliculaI = event.option.value;
    this.termino = peli.nombre;

    this.PelisService.getPelisPordId( peli.id! )
    .subscribe( peli => this.peliSeleccionada = peli);
  }



}
