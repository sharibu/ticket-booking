import './App.css';
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/main';
import { View } from './components/View';
import CartPage from './components/CartPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './components/service';
import LoginForm from './components/LoginForm';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>} />
            <Route path="/product/:id" element={<ProtectedRoute><View /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
            <Route path="/services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;