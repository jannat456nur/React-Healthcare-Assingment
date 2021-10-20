import logo from './logo.svg';
import './App.css';

import Header from './pages/Header/Header';
import MiniHead from './pages/Header/MiniHead/MiniHead';
import Banner from './pages/Banner/Banner';
import Doctors from './pages/Doctors/Doctors';
import signup from './pages/Signup/Signup';
import Signup from './pages/Signup/Signup';
import Onother from './pages/Onother/Onother';
import Footer from './pages/Footer/Footer';
import Blood from './pages/Blood/Blood';
import Pharmacy from './pages/Pharmacy/Pharmacy';
import Ambulance from './pages/Ambulance/Ambulance';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/Notfound/NotFound';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route exact path="/">

            <MiniHead></MiniHead>
            <Header></Header>
            <Doctors></Doctors>
            <Banner></Banner>
            <Signup></Signup>
            <Onother></Onother>
            <Footer></Footer>
          </Route>
          <Route path="/home">

            <MiniHead></MiniHead>
            <Header></Header>
            <Doctors></Doctors>
            <Banner></Banner>
            <Signup></Signup>
            <Onother></Onother>
            <Footer></Footer>
          </Route>
          <Route path="/blood">
            <Blood></Blood>
          </Route>
          <Route path="/pharmacy">
            <Pharmacy></Pharmacy>
          </Route>
          <Route path="/login">
            <Signup></Signup>
          </Route>
          <Route path="/ambulance">
            <Ambulance></Ambulance>
          </Route>
          <Route path="/detail/:Id">
            <Detail></Detail>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>








      {/* <MiniHead></MiniHead>
      <Header></Header>
      <Doctors></Doctors>
      <Banner></Banner>
      <Signup></Signup>
      <Onother></Onother>
      <Footer></Footer> */}
      {/* <Blood></Blood> */}
      {/* <Pharmacy></Pharmacy> */}
      {/* <Ambulance></Ambulance> */}
    </div>
  );
}

export default App;
