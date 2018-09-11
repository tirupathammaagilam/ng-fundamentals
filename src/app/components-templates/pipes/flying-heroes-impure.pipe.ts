import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesImpure'
})
export class FlyingHeroesImpurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
