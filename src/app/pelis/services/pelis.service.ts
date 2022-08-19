import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PeliculaI } from '../interfaces/pelis.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { 

    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];    
  }

  getPelis(): Observable<PeliculaI[]> {
   return this.http.get<PeliculaI[]>(`${this.baseUrl}/peliculas`)
  }

  getPelisPordId( id: string ):Observable<PeliculaI> {
    return this.http.get<PeliculaI>(`${this.baseUrl}/peliculas/${ id }`)
  }

  getSugerencias( termino: string ): Observable<PeliculaI[]> {
    return this.http.get<PeliculaI[]>(`${this.baseUrl}/peliculas?q=${termino}&_limit=6`)
  }

  agregarPelicula( peli: PeliculaI ): Observable<PeliculaI> {
    return this.http.post<PeliculaI>(`${ this.baseUrl }/peliculas`, peli );
  }

  actualizarPeli( peli: PeliculaI ): Observable<PeliculaI> {
    return this.http.put<PeliculaI>(`${ this.baseUrl }/peliculas/${ peli.id }`, peli );
  }

  eliminarPeli( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/peliculas/${ id }` );
  }

  private _historial: string[] = [];
  
  get historial() {
    return this._historial;
  }

  buscarCantidad( query: string = '' ) {
     
    this._historial.unshift( query );
    localStorage.setItem('historial', JSON.stringify( this._historial ));
  }

}
