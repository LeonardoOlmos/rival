import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { JuegoComponent} from './juego/juego.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { MedidorComponent } from './medidor/medidor.component';

import { ParticipanteService } from './services/participante.service';
import { PreguntasService } from './services/preguntas.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [ BrowserModule, HttpModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, JuegoComponent, CronometroComponent, MedidorComponent ],
  providers : [ParticipanteService, PreguntasService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
