import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './comps/Layout';
import Homepage from './pages/Homepage/index';
import HomePage from './HomePage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Homepage />}/>
          <Route path='/old' exact element={<HomePage />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
