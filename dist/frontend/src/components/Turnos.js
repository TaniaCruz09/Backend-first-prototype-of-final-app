"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const turnosSevice_1 = require("../services/turnosSevice");
const Turnos = () => {
    const [turnos, setTurnos] = (0, react_1.useState)([]);
    const [newTurno, setNewTurno] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const fetchTurnos = async () => {
            try {
                const data = await (0, turnosSevice_1.getTurnos)();
                setTurnos(data);
            }
            catch (error) {
                console.error("Error al obtener turnos", error);
            }
        };
        fetchTurnos();
    }, []);
    const handleAddTurno = async () => {
        if (!newTurno) {
            alert("Por favor ingresa un nombre para el turno.");
            return;
        }
        try {
            const turno = { name: newTurno };
            const addedTurno = await (0, turnosSevice_1.addTurno)(turno);
            setTurnos([...turnos, addedTurno]);
            setNewTurno('');
        }
        catch (error) {
            console.error("Error al agregar turno", error);
        }
    };
    const handleDeleteTurno = async (id) => {
        try {
            await (0, turnosSevice_1.deleteTurno)(id);
            setTurnos(turnos.filter(turno => turno.id !== id));
        }
        catch (error) {
            console.error("Error al eliminar turno", error);
        }
    };
    return (<div className="turnos">
      <h1>Gestión de Turnos</h1>

      
      <div>
        <input type="text" value={newTurno} onChange={(e) => setNewTurno(e.target.value)} placeholder="Nuevo turno"/>
        <button onClick={handleAddTurno}>Agregar Turno</button>
      </div>

      
      <ul>
        {turnos.map((turno) => (<li key={turno.id}>
            {turno.name}
            <button onClick={() => handleDeleteTurno(turno.id)}>Eliminar</button>
          </li>))}
      </ul>
    </div>);
};
exports.default = Turnos;
//# sourceMappingURL=Turnos.js.map