import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import Benefit from './components/Benefit/Benefit';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import Order from './components/Order/Order';
import MyOrder from './components/MyOrder/MyOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Benefit></Benefit>
              <Services></Services>
              <Newsletter></Newsletter>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute exact path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
