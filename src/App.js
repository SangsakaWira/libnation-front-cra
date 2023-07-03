import NavBar from "./components/NavBar"
import Container from "./components/Container";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

// Pages
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import Checkout from './pages/Checkout'
import MyBooks from './pages/MyBooks'

function App() {

    return (
        <Router>
            <div className="App">
                <NavBar />
                <Container>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/checkout" Component={Checkout} />
                        <Route path="/my-books" Component={MyBooks} />
                        <Route path="/add-book" Component={AddBook} />
                    </Routes>
                </Container>
            </div>
        </Router>
    )
}

export default App

