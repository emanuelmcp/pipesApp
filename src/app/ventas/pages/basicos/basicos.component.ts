import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {
  nameLower: string = 'emanuel';
  nameUpper: string = 'EMANUEL';
  fullName: string = 'eMAnUEl marCOS CarrERo pankratov';

  date: Date = new Date();
}
