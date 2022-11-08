import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {VentasModule} from "./ventas/ventas.module";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app-router.module";

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es'
import {registerLocaleData} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VentasModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
