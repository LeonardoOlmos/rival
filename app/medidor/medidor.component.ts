import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'b-medidor',
    template : `
    
    <div *ngFor="let cantidad of cantidades; let i = index">
        <div class="col-md-12">
        <div class="btn btn-outline-secondary  medidores" [class.ganado]="i > ganado" [class.a-ganar]="ganado==i" >S/ {{cantidad}}</div>
        </div>
    </div>  
    `,
    styles : [`
    .ganado {
      color : white;
      background-color:#2e7d32 ;
    }
    .a-ganar {
        color : white;
        background-color: #b71c1c;
    }
    .medidores {
        margin-bottom: 5px;
        width: 100px;
    }

    `]
})
/*    .medidores{
        margin-bottom: 1px;width: 80px; height: 30px; 
    }*/

export class MedidorComponent implements OnInit {
    @Input() ganado : number = 10 ;
        cantidades = [0,100,200,500,700,1000,1500,2000,2500,5000].reverse();

    constructor() { 
    }

    ngOnInit() { }
}