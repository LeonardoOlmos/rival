import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ParticipanteService {

    private participantes;
    constructor( private http : Http) {        
     }

getParticipantes() {
    return this.http.get('./participantes.json')
        .map(res => res.json());
}

    }