import { Button } from "react-bootstrap";
import "./Main.css";

function Main() {
  return (
    <div id="mainbody">
      <div className="text-light d-flex" id="over">
        <div className="container w-md-50 m-0 p-5" id="left">
          <h1>Travel with us!</h1>
          <p>
            We will provide you immersive experience during the entire journey
            to make your trip more special as you are.
          </p>
          <a href="#buspage">
            <Button variant="outline-light">Book Tickets</Button>
          </a>
        </div>
        <div className="w-50"></div>
      </div>
    </div>
  );
}

export default Main;
