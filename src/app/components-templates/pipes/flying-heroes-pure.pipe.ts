import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesPure'
})
export class FlyingHeroesPurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
