import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarComponent } from './Components/NavbarComponent';
import { Home } from './Screens/Home';
import { Login } from './Screens/Login';
import { Profile } from './Screens/Profile';
import { SignUp } from './Screens/SignUp';

export function App() {
    return (
        <Container>
            <Router>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Container>
    );
}
