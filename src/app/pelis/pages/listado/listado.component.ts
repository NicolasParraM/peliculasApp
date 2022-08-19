import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PeliculaI } from '../../interfaces/pelis.interface';
import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  pagina_rango: number = 18
  pagina_numero: number = 1
  paginaOptions = [ 5, 6, 10, 12, 15, 20, 50, 100 ]

  pelis: PeliculaI[] = [];

  constructor( private PelisService: PelisService ) { }

  ngOnInit(): void {

    this.PelisService.getPelis()
    .subscribe( pelis => { this.pelis = pelis  } );

  }

  handlePage(e: PageEvent ) {
    this.pagina_rango = e.pageSize
    this.pagina_numero = e.pageIndex + 1
  }

  @ViewChild('txtCantidad') txtCantidad!:ElementRef<HTMLInputElement>;
   
  cantidadpeli( ) {
    
    const valor = this.txtCantidad.nativeElement.value;
    
    this.PelisService.buscarCantidad( valor );

   }

   get historial() {
      return this.PelisService.historial;
   }


}
