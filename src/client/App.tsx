import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarComponent } from './components/NavbarComponent';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Profile } from './screens/Profile';
import { SignUp } from './screens/SignUp';

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
