import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class PreguntasService {

    private preguntas;
    constructor( private http : Http) {        
     }

getPreguntas(ronda) {
    return this.http.get('./preguntas.json')
        .map(res => res.json())
        .map (preguntas => {
            return preguntas[ronda];
        });
}
}