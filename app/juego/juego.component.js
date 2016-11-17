"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JuegoComponent = (function () {
    function JuegoComponent() {
        this.minutos = 0;
        this.segundos = 20;
        this.mostrarIntermedio = true;
        this.juegoEnProceso = false;
        this.numRondas = 5;
        this.rondaActual = 0;
        this.nuevaRonda = false;
    }
    JuegoComponent.prototype.ngOnInit = function () { };
    JuegoComponent.prototype.controlador = function (accion) {
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
    };
    JuegoComponent.prototype.intermedio = function (cero) {
        var _this = this;
        setTimeout(function () {
            _this.juegoEnProceso = false;
            _this.nuevaRonda = false;
        }, 2000);
    };
    JuegoComponent.prototype.rondas = function () {
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
    };
    JuegoComponent.prototype.siguienteRonda = function () {
        this.nuevaRonda = true;
        this.rondaActual += 1;
        this.rondas();
    };
    JuegoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'b-juego',
            templateUrl: './juego.component.html',
            styles: ["\n        .next {\n            background-color: #f57c00;\n            color : white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], JuegoComponent);
    return JuegoComponent;
}());
exports.JuegoComponent = JuegoComponent;
//# sourceMappingURL=juego.component.js.map