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

      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/c_10qS7amjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  );
}
export default Home;
