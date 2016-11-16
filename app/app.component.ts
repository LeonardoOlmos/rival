import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Cronometro Beros!</h1>
            <button (click)="iniciar()"> Iniciar </button>
            <button (click)="reiniciar()"> Reiniciar </button>
            <button (click)="detener()"> Detener </button>
            <div>
                <p>{{minuto}} : {{segundos}} </p>
            </div>
            `
})

export class AppComponent {
    public minuto: number = 1;
    public segundos: number= 60;
 
    public contador: any;

constructor ()
{
}

iniciar(){
    if(this.contador==undefined)
    {
        this.contador= setInterval( () => {
        this.segundos -=1;
        if(this.minuto==0 && this.segundos== 0)
        {
           clearInterval(this.contador);
           this.contador= null;
        }
        else if(this.segundos == 0)
         {
             this.minuto -=1;
             this.segundos =60;
         }
    }
      , 1000);
    }
}

reiniciar(){
    this.minuto= 1;
    this.segundos= 60;
}

detener(){
    clearInterval(this.contador);
    this.contador= null;
}
 
};
