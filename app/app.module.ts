import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { JuegoComponent} from './juego/juego.component';
import { CronometroComponent } from './cronometro/cronometro.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, JuegoComponent, CronometroComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
