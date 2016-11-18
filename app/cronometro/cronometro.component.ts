import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
moduleId : 'module.id',
  selector: 'b-cronometro',
  template: `
    <div class="col-md-6">
            <div *ngIf="minutos != 0 || segundos != 0">
                <h1>{{minutos}} : {{ segundos }} </h1>
            </div>
            <div class="tiempo" *ngIf="minutos == 0 && segundos == 0">
                <h1 *ngIf="rondaActual!=5"> TIEMPO!</h1>
                <h2 *ngIf="rondaActual==5">Muerte Súbita</h2>
            </div>
    </div>
    <div class="col-md-4" *ngIf="minutos != 0 || segundos != 0" >
            <button class="btn btn-outline-primary btn-lg controles" (click)="iniciar()"> Iniciar </button>
            <button class="btn btn-outline-warning btn-lg controles" (click)="reiniciar()"> Reiniciar </button>
            <button class="btn btn-outline-danger btn-lg controles" (click)="detener()"> Detener </button>
    </div>
            `,
styles : [`
    h1 {
        font-size: 9.8rem;
        font-family: 'Roboto';
        color : crimson;
    }
    h2 {
        font-size: 5.8rem;
        font-family: 'Roboto';
    }

    .tiempo > h1,h2 {
        color: #2962ff;
    }
    .controles {
        width: 130px;
        margin-bottom : 5px;
    }
`]
})

export class CronometroComponent implements OnInit, OnChanges {

    public minutos_original: number;
    public segundos_original : number;
    @Input() minutos: number;
    @Input() segundos: number;
    @Input() nuevaRonda : boolean = false;
    @Input() rondaActual : number;
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
