import { Pipe, PipeTransform } from '@angular/core';
import { PeliculaI } from '../interfaces/pelis.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( peli: PeliculaI ): string {


    if( !peli.id && !peli.img ) {
      return 'assets/image/no-image.png';
    } else if ( peli.img ) {
      return peli.img;
    }else {
      return `assets/image/${ peli.id }.jpg`;
    }

 
  }

}
