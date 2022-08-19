import { Component, OnInit } from '@angular/core';
import { PeliculaI } from '../../interfaces/pelis.interface';
import { PelisService } from '../../services/pelis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  categorias = [
    {
      id: 'Accion',
      desc: 'Acción'
    },
    {
      id: 'Familiar',
      desc: 'Familiar'
    },
    {
      id: 'Aventura',
      desc: 'Aventura'
    },
    {
      id: 'Comedia',
      desc: 'Comedia'
    },
    {
      id: 'Superhéroes',
      desc: 'Superhéroes'
    },
    {
      id: 'Ciencia Ficción',
      desc: 'Ciencia - Ficción'
    },
    {
      id: 'Fantasía',
      desc: 'Fantasía'
    }

  ];

  peli: PeliculaI = {
    nombre: '',
    categoria: '',
    fecha: '',
    descripcion: '',
    img: ''
  }

  constructor( private PelisService: PelisService,
               private ActivatedRoute: ActivatedRoute, 
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ){
      return;
    }

      this.ActivatedRoute.params
      .pipe(
        switchMap( ({id}) => this.PelisService.getPelisPordId( id ) )
      )
      .subscribe( peli => this.peli = peli );

  }

  guardar() {
    if( this.peli.nombre.trim().length === 0 ) {
      return;
    } 

    if( this.peli.id ) {
      //Actualizando
      this.PelisService.actualizarPeli( this.peli )
      .subscribe( peli => this.mostrarSnack('Película Actualizada.'));
    } else {
      //Creando
      this.PelisService.agregarPelicula( this.peli )
      .subscribe( peli => {
        this.router.navigate(['/peliculasapp/editar', peli.id]);
        this.mostrarSnack('Película Creada.')
      })

    }
  }

  eliminarPeli() {

   const dialog = this.dialog.open( ConfirmarComponent, {
      width: `250px`,
      data: this.peli
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if( result ){
          this.PelisService.eliminarPeli( this.peli.id! )
          .subscribe( resp => {
      
            this.router.navigate([`/peliculasapp`]);
      
          })
        }
      }
    )


  }

  mostrarSnack( mensaje: string ) {
      this.snackBar.open( mensaje, 'OK!', ); {
        duration: 2500;
      }
  }


}
