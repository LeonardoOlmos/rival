import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'b-medidor',
    template : `
    
    <div *ngFor="let cantidad of cantidades; let i = index">
        <div class="btn-info btn-sm medidores" [class.ganado]="i > ganado" [class.a-ganar]="ganado==i" >S/ {{cantidad}}</div>
    </div>  
    `,
    styles : [`
    .ganado {
      color : red;
    }
    .a-ganar {
        color : green;
    }
    .medidores{
        margin-bottom: 1px;width: 80px; height: 30px; 
    }
    `]
})

export class MedidorComponent implements OnInit {
    @Input() ganado : number = 10 ;
    cantidades = [0,500,1000,1500,2000,2500,3000,3500,4000,5000].reverse();

    constructor() { 
    }

    ngOnInit() { }
}