import { Component, OnInit, OnChanges } from '@angular/core';
import { Http } from '@angular/http';
import { ParticipanteService } from '../services/participante.service';
import { PreguntasService } from '../services/preguntas.service';

@Component({
    moduleId: module.id,
    selector: 'b-juego',
    templateUrl : './juego.component.html',
    styles : [ `
        .next {
            background-color: #f44336;
            color : white;
        }
        .lista-participantes {
            list-style : none;
             }
        .controles {
            margin-right: 5px;
        }
        .pregunta-respuesta {
            height: 230px;
        }
        .lime {
            background-color: #b71c1c;
            margin-bottom : 30px;
            color: white;
        }
        .participante{
            color: #3d5afe;
        }
        `]
})

export class JuegoComponent implements OnInit, OnChanges {

    minutos : number = 0;
    segundos : number = 0;
    mostrarIntermedio : boolean = true;
    juegoEnProceso : boolean = false;
    numRondas : number = 5;
    rondaActual: number = 0;
    nuevaRonda: boolean = false;
    participantes ;
    participanteActual : number = 0;
    preguntas = [];
    preguntaActual = 0;
    ganado : number = 10;
    acumulado : number;
    acumuladoRonda : number = 0;
    acumuladoTotal : number = 0;
    cantidades = [0,500,1000,1500,2000,2500,3000,3500,4000,5000].reverse();


    constructor( private preguntas_s : PreguntasService, private participante_S: ParticipanteService) {

        this.getParticipantes();
        

     }

    ngOnInit() { 
            
    }
    ngOnChanges() {
               
    }

    getParticipantes() {
        this.participante_S.getParticipantes()
        .subscribe( 
            d => {
                this.participantes = d.Participantes;   
            }
        );      
    }

    getPreguntas() {
        this.preguntas_s.getPreguntas(this.rondaActual)
        .subscribe(
            d => {
                this.preguntas = d;
                console.log(this.preguntas);
            }
        )
    }

    
    controlador(accion) {
        switch (accion) {
            case 'inicio':
                console.log("inicio");
                this.juegoEnProceso = true;
                break;
            case 'reinicio': 
                console.log("reinicio");
                break;
            default: 
                console.log("pausa");
                break;
        }
  
    }

      intermedio(cero : boolean) {
          this.acumuladoTotal += this.acumuladoRonda;
        this.juegoEnProceso = false;
          setTimeout(()=> {
            this.nuevaRonda = false;
          }, 2000);
  }

    rondas() {
        console.log(this.rondaActual);
        switch (this.rondaActual) {
            case 2:
                this.minutos = 1;
                this.segundos = 40;
                break;
            case 3: 
                this.minutos = 1;
                this.segundos = 20;
                break;
            case 4: 
                this.minutos = 0;
                this.segundos = 59;
                break;
            case 5:
                this.segundos = 0;
                this.minutos = 0;
                break;
            default:
                this.minutos = 1;
                this.segundos = 59;
                break;
        }
    }

    siguienteRonda() {

            this.nuevaRonda = true;
            this.rondaActual += 1;
            this.getPreguntas();  
            this.reiniciaRonda();
    }

    reiniciaRonda(){
        this.participanteActual= 0;
        this.preguntaActual= 0;
        this.ganado = 9;
        this.acumuladoRonda = 0;

        this.participantes.forEach((p) => {
            p.puntuacion_total += p.puntuacion_ronda;
            p.puntuacion_ronda = 0;
        });
            this.minutos = 0;
            this.segundos = 21;
        setTimeout(()=> {
                    this.rondas();
        },10);


    }

    reiniciaJuego(){
        this.rondaActual= 0;
        this.participanteActual= 0;
        this.preguntaActual= 0;
    }

    correcto() {
        this.participantes[this.participanteActual].puntuacion_ronda +=1;
        this.preguntaActual += 1;
        this.ganado -= 1;  
        if (this.participanteActual == this.participantes.length -1 ) {
            this.participanteActual = 0;
        } else {
            this.participanteActual += 1;
        }
        if (this.ganado == -1) {
            this.acumuladoRonda = 5000;
            this.minutos=0;
            this.segundos=0;
        }
    }

    incorrecto() {
        this.ganado = 8;
        this.preguntaActual += 1;
        if (this.participanteActual == this.participantes.length -1 ) {
            this.participanteActual = 0;
        } else {
            this.participanteActual += 1;
        }        
    }

    banco() {
        if (this.ganado < this.cantidades.length && this.ganado >= 0 )
            this.acumuladoRonda += this.cantidades[this.ganado+1];
        if (this.acumuladoRonda >= 5000 ) {
            this.minutos=0;
            this.segundos=0;
            this.acumuladoRonda = 5000;
        }
       
        this.ganado = 9;      
    }

    adios(i) {
        this.participantes.splice(i,1);
    }

}