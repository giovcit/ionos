import logo from './logo.svg';
import './App.css';
import {useContesto} from './useContesto';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
    const {loading} = useContesto();
    return (
    <div className="App">
	    <header className="">
	    <Router>
	    <Navbar/>
	    <Switch>
	    <Route path='/' exact component={Home} />
	    <Route path='/about' exact component={About} />
	    <Route path='/contact' exact component={Contact} />
	    </Switch>
	    </Router>
	</header>



    </div>
  );
}

export default App;
