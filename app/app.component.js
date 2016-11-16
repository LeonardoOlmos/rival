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
var AppComponent = (function () {
    function AppComponent() {
        this.minuto = 1;
        this.segundos = 60;
    }
    AppComponent.prototype.iniciar = function () {
        var _this = this;
        if (this.contador == undefined) {
            this.contador = setInterval(function () {
                _this.segundos -= 1;
                if (_this.minuto == 0 && _this.segundos == 0) {
                    clearInterval(_this.contador);
                    _this.contador = null;
                }
                else if (_this.segundos == 0) {
                    _this.minuto -= 1;
                    _this.segundos = 60;
                }
            }, 1000);
        }
    };
    AppComponent.prototype.reiniciar = function () {
        this.minuto = 1;
        this.segundos = 60;
    };
    AppComponent.prototype.detener = function () {
        clearInterval(this.contador);
        this.contador = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Cronometro Beros!</h1>\n            <button (click)=\"iniciar()\"> Iniciar </button>\n            <button (click)=\"reiniciar()\"> Reiniciar </button>\n            <button (click)=\"detener()\"> Detener </button>\n            <div>\n                <p>{{minuto}} : {{segundos}} </p>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map