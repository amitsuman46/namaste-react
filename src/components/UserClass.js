import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log("this will be called after constructor and render method, similar to useEffect(cbfn,[])"); 
  }


  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => {
            //never update state variable directly
            this.setState({
                count:this.state.count + 1
            })
        }}>Increase</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: 7004224958</h4>
      </div>
    );
  }
}

export default UserClass;

