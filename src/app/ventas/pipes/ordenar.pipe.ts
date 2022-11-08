import { Pipe, PipeTransform } from '@angular/core';
import {Heroe} from "../interfaces/ventas.interfaces";

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], sorter: string = 'default') : Heroe[] {
    switch (sorter) {
      case 'name':
        return heroes.sort((a: Heroe, b: Heroe) => (a.name > b.name) ? 1 : -1);
      case 'color':
        return heroes.sort((a: Heroe, b: Heroe) => (a.color.valueOf() > b.color.valueOf()) ? 1 : -1);
      case 'fly':
        return heroes.sort((a: Heroe, b: Heroe) => (a.canFly > b.canFly) ? 1 : -1);
      default:
        return heroes;
    }
  }
}
