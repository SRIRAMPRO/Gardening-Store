import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Signinpage from './components/signin';
import Signuppage from './components/signup';

function App() {
 return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/signin" element={<Signinpage/>} />
        <Route path="/signup" element={<Signuppage/>} />
        <Route path="/" element={<Signuppage />} />
        </Routes>
      </Router>
    </div>
 );
}

export default App;