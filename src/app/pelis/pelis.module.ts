import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PelisRoutingModule } from './pelis-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { PelisTarjetaComponent } from './components/pelis-tarjeta/pelis-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    PeliculaComponent,
    ListadoComponent,
    PelisTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    PelisRoutingModule
  ]
})
export class PelisModule { }
