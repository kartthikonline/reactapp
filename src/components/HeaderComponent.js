import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Furniture Store </a></div>
                    <Link to="/Signin" style={{textAlign:"end"}}><button>login</button></Link>
                    </nav>
                    <center><video src={require("/Users/kartt/web/react-frontend/src/components/video.mp4.mp4")} controls width={"600px"} height={"350px"}> </video></center>

                </header>
            </div>
        )
    }
}

export default HeaderComponent
