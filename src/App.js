import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './containers/home/Home';
import Contact from './containers/contact/Contact';

function App() {
    return (

        <Router>
            <div className="App">
                <NavigationBar/>
                <div className="container-xl">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route exact path="/contact" element={<Contact/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
