import {Component} from "react"

import "./index.css"


class Home extends Component {

    getStarted = ()=> {
        this.props.navigate("/getstarted")
    }
    render(){
        return (
            <div className="main-container">
                <p className="initial_text">Apple Watch Studio</p>
                <div className="pre-text-style">
                <h1>
                 
                    Choose a case. <br/>
                    Pick a band. <br/>
                    Create your own style <br/>
                    
                
                </h1>
                </div> 
                <button className="button-get-started" onClick={this.getStarted} >Get Started</button> 
                <div className="bg-container">

                </div>
            </div>
        )
    }
}



export default Home