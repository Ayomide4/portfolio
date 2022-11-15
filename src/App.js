import './styles.css';
import Menu from './components/Menu';
import About from './components/About.js';
import Error from './components/Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </Router>
    );
}

export default App;
