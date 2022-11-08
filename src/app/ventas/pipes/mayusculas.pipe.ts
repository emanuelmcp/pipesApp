import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
  transform(value: string, inUpperCase: boolean = true): string {
    return inUpperCase ? value.toUpperCase() : value.toLowerCase();
  }
}
