
import * as React from "react";;
  export default class CounterDisplay extends React.PureComponent {
     render() {
     return (
       <div>
         The value of {this.props.label} is {this.props.value}
        </div>
      );
  }
}