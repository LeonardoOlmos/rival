import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'b-juego',
    templateUrl : './juego.component.html',
    styles : [ `
        .next {
            background-color: #f57c00;
            color : white;
        }
    `]
})
export class JuegoComponent implements OnInit {

    minutos : number = 0;
    segundos : number = 20;
    mostrarIntermedio : boolean = true;
    juegoEnProceso : boolean = false;
    numRondas : number = 5;
    rondaActual: number = 0;
    nuevaRonda: boolean = false;

    constructor() { }

    ngOnInit() { }
    
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
          setTimeout(()=> {
            this.juegoEnProceso = false;
            this.nuevaRonda = false;
          }, 2000);
  }

    rondas() {
        switch (this.rondaActual) {
            case 2:
                this.segundos = 15;
                break;
            case 3: 
                this.segundos = 10;
                break;
            case 4: 
                this.segundos = 5;
                this.minutos -= 0;
                break;
            case 5:
                this.segundos = 0;
                this.minutos = 0;
                break;
            default:
                this.minutos = 0;
                this.segundos = 20;
        }
    }

        siguienteRonda() {

            this.nuevaRonda = true;
            this.rondaActual += 1;  
            this.rondas();
   
        
    }

}