import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumir'
})
export class ResumirPipe implements PipeTransform {

  transform(value: any, qyt = 20, add: string = '...'): any {
    let novoValor = '';
    novoValor = value.substr(0, qyt) + '...';
    return novoValor;
  }

}
