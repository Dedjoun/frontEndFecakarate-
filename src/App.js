import './Panel.css';
import Index from './pages/Index';
import Login from './pages/Login';
import ListArbitres from './pages/ListArbitres';
import ListAthltes from './pages/ListAthltes';
import ListCoach from './pages/ListCoach';
import ListOrganisations from './pages/ListOrganisations';
import ListMembres from './pages/ListMembres';
import ListCn from './pages/ListCn';
import Panel from './panel/Panel';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/arbitre' element={<ListArbitres />}/>
            <Route path='/athltes' element={<ListAthltes />}/>
            <Route path='/coachs' element={<ListCoach />}/>
            <Route path='/clubs' element={<ListOrganisations />}/>
            <Route path='/membres' element={<ListMembres />}/>
            <Route path='/cn' element={<ListCn />}/>
            <Route path='/panel' element={<Panel />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
