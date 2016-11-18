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
        this.cantidades = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000].reverse();
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
            template: "\n    \n    <div *ngFor=\"let cantidad of cantidades; let i = index\">\n        <div class=\"btn-info btn-sm medidores\" [class.ganado]=\"i > ganado\" [class.a-ganar]=\"ganado==i\" >S/ {{cantidad}}</div>\n    </div>  \n    ",
            styles: ["\n    .ganado {\n      color : red;\n    }\n    .a-ganar {\n        color : green;\n    }\n    .medidores{\n        margin-bottom: 1px;width: 80px; height: 30px; \n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], MedidorComponent);
    return MedidorComponent;
}());
exports.MedidorComponent = MedidorComponent;
//# sourceMappingURL=medidor.component.js.map