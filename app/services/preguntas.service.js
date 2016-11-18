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
var http_1 = require('@angular/http');
var PreguntasService = (function () {
    function PreguntasService(http) {
        this.http = http;
    }
    PreguntasService.prototype.getPreguntas = function (ronda) {
        return this.http.get('./preguntas.json')
            .map(function (res) { return res.json(); })
            .map(function (preguntas) {
            return preguntas[ronda];
        });
    };
    PreguntasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PreguntasService);
    return PreguntasService;
}());
exports.PreguntasService = PreguntasService;
//# sourceMappingURL=preguntas.service.js.map