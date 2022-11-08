import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent {
  //i18nSelect
  name: string = 'Emanuel';
  gender: string = 'M';
  invitationMap = {
    'M': 'invitarlo',
    'W': 'invitarla'
  }

  //i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Juan'];
  clientMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeClient(): void{
    this.name = 'Fernanda';
    this.gender = 'W';
  }

  deleteClient(): void{
    this.clients = this.clients.slice(0, this.clients.length-1);
  }

  person = {
    name: 'Emanuel',
    age: 26,
    address: 'Zaragoza, Spain'
  }
  //JSONPipe
  jsonPrint = [
    {
      "name" : "Superman",
      "fly" : true
    },
    {
      "name" : "Lobezno",
      "fly" : false
    },
    {
      "name" : "Aquaman",
      "fly" : false
    },
  ];

  myObservable = interval(1000);

  promiseValue = new Promise( (resolve, reject) => {
    setTimeout ( ()=>{
      resolve ('Tenemos data de promesa')
    }, 3500)
  });

}
