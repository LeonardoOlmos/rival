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
var MedidorComponent = (function () {
    function MedidorComponent() {
        this.ganado = 10;
        this.cantidades = [0, 100, 200, 500, 700, 1000, 1500, 2000, 2500, 5000].reverse();
    }
    MedidorComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MedidorComponent.prototype, "ganado", void 0);
    MedidorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'b-medidor',
            template: "\n    \n    <div *ngFor=\"let cantidad of cantidades; let i = index\">\n        <div class=\"col-md-12\">\n        <div class=\"btn btn-outline-secondary  medidores\" [class.ganado]=\"i > ganado\" [class.a-ganar]=\"ganado==i\" >S/ {{cantidad}}</div>\n        </div>\n    </div>  \n    ",
            styles: ["\n    .ganado {\n      color : white;\n      background-color:#2e7d32 ;\n    }\n    .a-ganar {\n        color : white;\n        background-color: #b71c1c;\n    }\n    .medidores {\n        margin-bottom: 5px;\n        width: 100px;\n    }\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], MedidorComponent);
    return MedidorComponent;
}());
exports.MedidorComponent = MedidorComponent;
//# sourceMappingURL=medidor.component.js.map