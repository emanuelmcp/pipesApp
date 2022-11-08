import {Component} from '@angular/core';
import {Color, Heroe} from "../../interfaces/ventas.interfaces";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent {

  inUpperCase: boolean = false;
  sortBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ];

  changeVar(): void{
    this.inUpperCase = !this.inUpperCase;
  }
  changeOrder(value: string){
    this.sortBy = value;
  }

}
