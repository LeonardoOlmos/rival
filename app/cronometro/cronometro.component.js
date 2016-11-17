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
var CronometroComponent = (function () {
    function CronometroComponent() {
        this.nuevaRonda = false;
        this.accion = new core_1.EventEmitter();
        this.cero = new core_1.EventEmitter();
    }
    CronometroComponent.prototype.ngOnInit = function () {
    };
    CronometroComponent.prototype.ngOnChanges = function (cambios) {
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
    };
    CronometroComponent.prototype.iniciar = function () {
        var _this = this;
        this.accion.emit('inicio');
        if (this.contador == undefined) {
            this.contador = setInterval(function () {
                if (_this.minutos == 0 && _this.segundos == 0) {
                    clearInterval(_this.contador);
                    _this.contador = null;
                    _this.cero.emit(true);
                    return;
                }
                else if (_this.segundos == 0) {
                    _this.minutos -= 1;
                    _this.segundos = 59;
                }
                _this.segundos -= 1;
            }, 1000);
        }
    };
    CronometroComponent.prototype.reiniciar = function () {
        this.accion.emit('reinicio');
        this.minutos = this.minutos_original;
        this.segundos = this.segundos_original;
    };
    CronometroComponent.prototype.detener = function () {
        this.accion.emit('pausa');
        clearInterval(this.contador);
        this.contador = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CronometroComponent.prototype, "minutos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CronometroComponent.prototype, "segundos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CronometroComponent.prototype, "nuevaRonda", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CronometroComponent.prototype, "accion", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CronometroComponent.prototype, "cero", void 0);
    CronometroComponent = __decorate([
        core_1.Component({
            moduleId: 'module.id',
            selector: 'b-cronometro',
            template: "\n        <div class=\"container\">\n            <div *ngIf=\"minutos != 0 || segundos != 0\">\n                <h1>{{minutos}} : {{ segundos }} </h1>\n            </div>\n            <div class=\"tiempo\" *ngIf=\"minutos == 0 && segundos == 0\">\n                <h1> TIEMPO!</h1>\n            </div>\n            <button class=\"btn btn-primary btn-lg\" (click)=\"iniciar()\"> Iniciar </button>\n            <button class=\"btn btn-warning btn-lg\" (click)=\"reiniciar()\"> Reiniciar </button>\n            <button class=\"btn btn-danger btn-lg\" (click)=\"detener()\"> Detener </button>\n        </div>\n            ",
            styles: ["\n    h1 {\n        font-size: 10rem;\n        font-family: 'Roboto';\n        color : crimson;\n    }\n\n    .tiempo > h1 {\n        color: yellowgreen;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], CronometroComponent);
    return CronometroComponent;
}());
exports.CronometroComponent = CronometroComponent;
;
//# sourceMappingURL=cronometro.component.js.map