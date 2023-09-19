import React, {Component} from 'react'

class Component3 extends Component{

    constructor(){
        super();
        this.state = {
            sampString: "ASHDASDSAHD",
            count: 0
        }

        this.click = this.click.bind(this);
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    click(){
        alert("PLUH");
        this.setState((prevState)=>{
            return {count: prevState.count+1}
        });
    }

    render(){
        return(
            <div>
                <center>
                    <h3>{this.props.name}</h3>
                    <button onClick={this.click}>Pluh (times pressed: {this.state.count})</button>
                </center>
            </div>
        )
    }
}

export default Component3;