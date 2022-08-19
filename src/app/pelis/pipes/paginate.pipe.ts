import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[], pagina_rango: number | any, pagina_numero: number): any[] {
    if (!array.length) return []
    if (pagina_rango == 'all') {
      return array
    }
    pagina_rango = pagina_rango || 5
    pagina_numero = pagina_numero || 1
    --pagina_numero
  
  return array.slice(pagina_numero * pagina_rango, (pagina_numero + 1) * pagina_rango )

  }

}
