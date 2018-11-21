import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterDisplay from "./another.jsx";
import FirebaseObj from "./firebase1/firebase1";

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {index => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "pankaj"
    };
  }

  componentDidMount() {
    // FirebaseObj.getContinueData(this.callbackFun);
  }
  static getDerivedStateFromProps(props, state) {
    //  this.call();
  }

  call = () => {
    alert(1800);
  };
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
        <h1>{this.state.name}</h1>
        <div />
        <div />
        <div>{String(false)}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{true}</div>
      </div>
    );
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://dummyimage.com/600x400/000/fff"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => <Cat mouse={mouse} children="pankaj" />} />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      nameItem: 0,
      nameItem1: 0,
      nameItem2: 0,
      nameItem3: 0
    };

    this.childRef = React.createRef();
  }

  componentDidMount() {
    FirebaseObj.setData();
  }

  componentDidUpdate() {
    console.log(this.state.nameItem);
  }
  callbackFun = data => {
    this.setState({
      data
    });
  };

  getData = () => {
    console.log(this.childRef.current);
  };

  showUserData = () => {
    return (
      <div>
        {/* <h3>{this.state.data.name}</h3>
        <h4>{this.state.data.isSingle}</h4>
        <h4>{this.state.data.age}</h4>
        <h4>{this.state.data.location.city}</h4>
        <h4>{this.state.data.location.country}</h4> */}
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <MouseTracker />
        <CounterDisplay />
      </div>
    );
  }
}

export default App;
