import React, {Component} from 'react';
import Component3 from './nonPageComponent.jsx';

class Page2 extends Component{
    constructor(){
        super();
        this.state = {
            sampleString: "Page 2",
            raw: {}
        }

        this.prevPage = this.prevPage.bind(this);
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    prevPage(){
        this.props.history.push("");
    }

    render(){
        return (
            <div>
                <center>
                    <h1>{this.state.sampleString}</h1>
                    <Component3 name="Cockers"/>
                    <button onClick={this.prevPage}>
                        Prev Page
                    </button>
                </center>
            </div>
        );
    }
}

export default Page2;