import './App.css';
import Header from './Pages/Header';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NavBar from './Pages/NavBar';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import PaymentGateway from './componets/PaymentGateway';
import ErrorBoundary from './componets/ErrorBoundary';
import Payment_Razorpay from './componets/Payment_Razorpay';
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login';
import CategoryProducts from './Pages/CategoryProducts';
import ProtectedRoute from './store/ProtectedRoute';
import Dashboard from './componets/Admin/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/admin';

  return (
    <>
      {!isAuthPage && <Header />}
      {!isAuthPage && <NavBar />}
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path='/product' element={<HomePage />} />
          <Route path='product/product/:id' element={<SingleProduct />} />
          <Route
            path='/cart'
            element={
              <ErrorBoundary>
                <Cart />
              </ErrorBoundary>
            }
          />
          <Route path='/payment' element={<Payment_Razorpay />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
