import './App.css';
import Facturas from './pages/Facturas'
import FacturaForm from './pages/FacturaForm'
import FacturaEdit from './pages/FacturaEdit'
import FacturaDetails from './pages/FacturaDetails'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Facturas} />
          <Route exact path="/nuevo" component={FacturaForm} />
          <Route exact path="/editar/:id" component={FacturaEdit} />
          <Route exact path="/factura/:id" component={FacturaDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
