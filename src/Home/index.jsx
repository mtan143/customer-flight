import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker";
import Cover from "../Cover";
import BasicTabs from "./BasicTabs";
import Reservation from "./Reservation";
// import TravelInspiration from "./TravelInspiration";
import "./style.css";
import TravelInspiration from "./TravelInspiration";
import VerticalTabs from "./VerticalTabs";

function Home(props) {
  

 
  return (
    <div className="minhtan">
     
        <Cover />
    
      <div className="flag">
        <VerticalTabs />
      </div>
      <TravelInspiration />

      <Reservation />
      <h1 className="topic">Bạn muốn khám phá điều gì?</h1>
      <BasicTabs />

      


     
    </div>
  );
}
export default Home;
