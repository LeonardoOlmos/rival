import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
moduleId : 'module.id',
  selector: 'b-cronometro',
  template: `
        <div class="container">
            <div *ngIf="minutos != 0 || segundos != 0">
                <h1>{{minutos}} : {{ segundos }} </h1>
            </div>
            <div class="tiempo" *ngIf="minutos == 0 && segundos == 0">
                <h1> TIEMPO!</h1>
            </div>
            <button class="btn btn-primary btn-lg" (click)="iniciar()"> Iniciar </button>
            <button class="btn btn-warning btn-lg" (click)="reiniciar()"> Reiniciar </button>
            <button class="btn btn-danger btn-lg" (click)="detener()"> Detener </button>
        </div>
            `,
styles : [`
    h1 {
        font-size: 10rem;
        font-family: 'Roboto';
        color : crimson;
    }

    .tiempo > h1 {
        color: yellowgreen;
    }
`]
})

export class CronometroComponent implements OnInit, OnChanges {

    public minutos_original: number;
    public segundos_original : number;
    @Input() minutos: number;
    @Input() segundos: number;
    @Input() nuevaRonda : boolean = false;
    @Output() accion = new EventEmitter<string>();
    @Output() cero = new EventEmitter<boolean>();
    public contador: any;

ngOnInit ()
{

}

ngOnChanges (cambios) {
    console.log(cambios);

    if (cambios.segundos) {
        this.segundos = cambios.segundos.currentValue;
         this.segundos_original = this.segundos;
    }
    if (cambios.minutos) {
        this.minutos_original = this.minutos;
        this.minutos = cambios.minutos.currentValue;
    }

/*    if (cambios.nuevaRonda) {
        if (cambios.nuevaRonda.currentValue) {
            this.iniciar();
        } else {
            this.nuevaRonda = false;
        }
    }*/
}

iniciar(){
    this.accion.emit('inicio');
    if(this.contador==undefined)
    {
        this.contador= setInterval( () => {

        if(this.minutos==0 && this.segundos== 0)
        {
           clearInterval(this.contador);
           this.contador= null;
           this.cero.emit(true);
           return;
        }
        else if(this.segundos == 0)
         {
             this.minutos -=1;
             this.segundos =59;
         }
         this.segundos -= 1;
    }
      , 1000);
    }
}

reiniciar(){
    this.accion.emit('reinicio');
    this.minutos= this.minutos_original;
    this.segundos= this.segundos_original;
}

detener(){
    this.accion.emit('pausa');
    clearInterval(this.contador);
    this.contador= null;
}
 
};
