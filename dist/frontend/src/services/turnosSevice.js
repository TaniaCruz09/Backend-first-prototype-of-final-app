"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTurno = exports.addTurno = exports.getTurnos = void 0;
const axios_1 = require("axios");
const API_URL = 'http://localhost:5003/api/v1/turno';
const getTurnos = async () => {
    try {
        const response = await axios_1.default.get(API_URL);
        return response.data;
    }
    catch (error) {
        console.error('Error al obtener turnos', error);
        throw error;
    }
};
exports.getTurnos = getTurnos;
const addTurno = async (turno) => {
    try {
        const response = await axios_1.default.post(API_URL, turno);
        return response.data;
    }
    catch (error) {
        console.error('Error al agregar turno', error);
        throw error;
    }
};
exports.addTurno = addTurno;
const deleteTurno = async (id) => {
    try {
        await axios_1.default.delete(`${API_URL}/${id}`);
    }
    catch (error) {
        console.error('Error al eliminar turno', error);
        throw error;
    }
};
exports.deleteTurno = deleteTurno;
//# sourceMappingURL=turnosSevice.js.map