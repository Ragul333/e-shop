import './App.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './utils/store';
import Home from './screens/Home';
import ProductCategory from './screens/ProductCategory';
import Cart from './screens/Cart';
import Order from './screens/Order';
import ProductDetail from './screens/ProductDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<ProductCategory />} />
            <Route path='/category/:id/detail/:productId' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Order />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
