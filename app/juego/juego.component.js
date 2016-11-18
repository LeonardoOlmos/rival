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
var participante_service_1 = require('../services/participante.service');
var preguntas_service_1 = require('../services/preguntas.service');
var JuegoComponent = (function () {
    function JuegoComponent(preguntas_s, participante_S) {
        this.preguntas_s = preguntas_s;
        this.participante_S = participante_S;
        this.minutos = 0;
        this.segundos = 0;
        this.mostrarIntermedio = true;
        this.juegoEnProceso = false;
        this.numRondas = 5;
        this.rondaActual = 0;
        this.nuevaRonda = false;
        this.participanteActual = 0;
        this.preguntas = [];
        this.preguntaActual = 0;
        this.ganado = 10;
        this.acumuladoRonda = 0;
        this.acumuladoTotal = 0;
        this.cantidades = [0, 100, 200, 500, 700, 1000, 1500, 2000, 2500, 5000].reverse();
        this.fin = false;
        this.getParticipantes();
    }
    JuegoComponent.prototype.ngOnInit = function () {
    };
    JuegoComponent.prototype.ngOnChanges = function () {
    };
    JuegoComponent.prototype.getParticipantes = function () {
        var _this = this;
        this.participante_S.getParticipantes()
            .subscribe(function (d) {
            _this.participantes = d.Participantes;
        });
    };
    JuegoComponent.prototype.getPreguntas = function () {
        var _this = this;
        this.preguntas_s.getPreguntas(this.rondaActual)
            .subscribe(function (d) {
            _this.preguntas = d;
            console.log(_this.preguntas);
        });
    };
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
        this.acumuladoTotal += this.acumuladoRonda;
        this.juegoEnProceso = false;
        setTimeout(function () {
            _this.nuevaRonda = false;
        }, 2000);
    };
    JuegoComponent.prototype.rondas = function () {
        console.log(this.rondaActual);
        switch (this.rondaActual) {
            case 2:
                this.minutos = 1;
                this.segundos = 40;
                break;
            case 3:
                this.minutos = 1;
                this.segundos = 20;
                break;
            case 4:
                this.minutos = 0;
                this.segundos = 59;
                break;
            case 5:
                this.segundos = 0;
                this.minutos = 0;
                break;
            default:
                this.minutos = 1;
                this.segundos = 59;
                break;
        }
    };
    JuegoComponent.prototype.siguienteRonda = function () {
        this.nuevaRonda = true;
        this.rondaActual += 1;
        this.getPreguntas();
        this.reiniciaRonda();
    };
    JuegoComponent.prototype.reiniciaRonda = function () {
        var _this = this;
        this.participanteActual = 0;
        this.preguntaActual = 0;
        this.ganado = 9;
        this.acumuladoRonda = 0;
        this.participantes.forEach(function (p) {
            p.puntuacion_total += p.puntuacion_ronda;
            p.puntuacion_ronda = 0;
        });
        this.minutos = 0;
        this.segundos = 21;
        setTimeout(function () {
            _this.rondas();
        }, 10);
    };
    JuegoComponent.prototype.reiniciaJuego = function () {
        this.rondaActual = 0;
        this.participanteActual = 0;
        this.preguntaActual = 0;
    };
    JuegoComponent.prototype.correcto = function () {
        if (this.rondaActual == 5) {
            this.ganador = this.participantes[this.participanteActual];
        }
        this.participantes[this.participanteActual].puntuacion_ronda += 1;
        this.preguntaActual += 1;
        this.ganado -= 1;
        if (this.participanteActual == this.participantes.length - 1) {
            this.participanteActual = 0;
        }
        else {
            this.participanteActual += 1;
        }
        if (this.ganado == -1) {
            this.acumuladoRonda = 5000;
            this.minutos = 0;
            this.segundos = 0;
        }
    };
    JuegoComponent.prototype.incorrecto = function () {
        if (this.rondaActual == 5) {
            this.fin = true;
            this.acumuladoTotal += this.acumuladoRonda;
            return;
        }
        this.ganado = 8;
        this.preguntaActual += 1;
        if (this.participanteActual == this.participantes.length - 1) {
            this.participanteActual = 0;
        }
        else {
            this.participanteActual += 1;
        }
    };
    JuegoComponent.prototype.banco = function () {
        if (this.ganado < this.cantidades.length && this.ganado >= 0)
            this.acumuladoRonda += this.cantidades[this.ganado + 1];
        if (this.acumuladoRonda >= 5000) {
            this.minutos = 0;
            this.segundos = 0;
            this.acumuladoRonda = 5000;
        }
        this.ganado = 9;
    };
    JuegoComponent.prototype.adios = function (i) {
        this.participantes.splice(i, 1);
    };
    JuegoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'b-juego',
            templateUrl: './juego.component.html',
            styles: ["\n        .next {\n            background-color: #f44336;\n            color : white;\n        }\n        .lista-participantes {\n            list-style : none;\n             }\n        .controles {\n            margin-right: 5px;\n        }\n        .pregunta-respuesta {\n            height: 230px;\n        }\n        .lime {\n            background-color: #b71c1c;\n            margin-bottom : 30px;\n            color: white;\n        }\n        .participante{\n            color: #3d5afe;\n        }\n        .fin > h1 {\n            font-size : 6rem;\n            color : #2962ff;\n        }\n        .fin > h2 {\n            font-family: 'Roboto';\n            font-size: 4rem; \n        }\n        "]
        }), 
        __metadata('design:paramtypes', [preguntas_service_1.PreguntasService, participante_service_1.ParticipanteService])
    ], JuegoComponent);
    return JuegoComponent;
}());
exports.JuegoComponent = JuegoComponent;
//# sourceMappingURL=juego.component.js.map