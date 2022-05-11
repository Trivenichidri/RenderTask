import "./App.css";
import Card from "./Card";
import { useState } from "react";
import Data from "./Data";
function App() {
  const [active, setActive] = useState("FirstCard");

  return (
    <div className="App">
      <nav>
        <div className="btn1">
          <h3>Triveni</h3>
          <p>triveni@gmail.com</p>
          <p>9846839204</p>
          <p>Female</p>
          <button onClick={() => setActive("FirstCard")}>
            Click to View Details
          </button>
        </div>
        <div className="btn2">
          <h3>Rachit</h3>
          <p>rachit@gmail.com</p>
          <p>12385697909</p>
          <p>Male</p>
          <button onClick={() => setActive("SecondCard")}>
            Click to View Details
          </button>
        </div>
        <div className="btn3">
          <h3>shaurya</h3>
          <p>shourya@yahoo.com</p>
          <p>98456384758</p>
          <p>Male</p>
          <button onClick={() => setActive("ThirdCard")}>
            Click to View Details
          </button>
        </div>
      </nav>
      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>
    </div>
  );
}

export default App;
