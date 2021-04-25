import { Component } from "react";
import ListStudent from "./component";

class App extends Component {
  state = {
    isShow: false,
  };

  toggleButton = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const backend = [
      {
        name: "John Doe",
        address: "Manado",
      },
      {
        name: "Jane",
        address: "Airmadidi",
      },
      {
        name: "Bob",
        address: "Tondano",
      },
    ];

    const webProgramming = [
      {
        name: "Smith",
        address: "Manado",
      },
      {
        name: "Peter",
        address: "Airmadidi",
      },
      {
        name: "Mayrra",
        address: "Tondano",
      },
    ];

    return (
      <>
        {this.state.isShow && (
          <ListStudent title="Back-end Programming Class" students={backend} />
        )}
        {/* <ListStudent title="Web Programming Class" students={webProgramming} /> */}
        <button onClick={this.toggleButton}>Toggle List Student</button>
      </>
    );
  }
}

export default App;