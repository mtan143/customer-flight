// import { Link, Route, Routes } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import VerticalTabs from "./Home/VerticalTabs";
// import VerticalTabs from './Home/VerticalTabs';
import FlightList from "./pages/FlightList";
import ListFlight from "./ListFlight";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Payment from './Payment'
import ConfirmFlight from "./pages/ConfirmFlight";
// import DetailFlight from "./DetailFlightTicket";
import DetailFlightTicket from "./DetailFlightTicket";
import LoginEmail from "./Login/Email";
import Register from './Register/Register'
// import Register from "./Register/Register";
// import PartnerLogin from "./LoginPartner/Login";
// import TransactionHistory from "./Transaction History";
import Profile from "./Profile";
import CollapsibleTable from "./Transaction History/CollapsibleTable";


function App() {
 
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/flightList" element={<FlightList />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<User />} />
        {/* <Route exact path="/payment"  element={<Payment />}  /> */}
        <Route exact path="/detailFlightTicket"  element={<DetailFlightTicket />}  />
        <Route exact path="/confirmFlight" element={<ConfirmFlight />} />
        <Route exact path="/register" element={ <Register />} />
        <Route exact path="/loginEmail" element={  <LoginEmail />} />
        <Route exact path="/collaps" element={  <CollapsibleTable />} />
        <Route exact path="/profile" element={  <Profile />} />
      </Routes>
    
    
  

      <Footer />
    </div>
  );
}

export default App;
