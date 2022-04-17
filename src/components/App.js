import './App.css';
import Navbar from "./Navbar"
import Textarea from "./Textarea"
import About from "./About"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/" element={<Textarea />} />
                </Routes>
            </Router>

        </>
    );
}

export default App;
