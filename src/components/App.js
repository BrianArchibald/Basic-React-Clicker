import React from "react";
import Clicker from "./Clicker";
//import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <div className="app-title">React Clicker</div>
        <div className="app-clicker">
          <Clicker />
        </div>
      </div>
    );
  }
}

export default App;
