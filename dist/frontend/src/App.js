"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Turnos_1 = require("./components/Turnos");
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
      <div className="App">
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/turnos" element={<Turnos_1.default />}/>
        </react_router_dom_1.Routes>
      </div>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
//# sourceMappingURL=App.js.map