import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Furniture Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Furniture name: </label>
                            <div> { this.state.employee.fur_name }</div>
                        </div>
                        <div className = "row">
                            <label>Furniture type: </label>
                            <div> { this.state.employee.fur_type }</div>
                        </div>
                        <div className = "row">
                            <label> amount: </label>
                            <div> { this.state.employee.amount }</div>
                        </div>
                        <div className = "row">
                            <label> Description :</label>
                            <div> { this.state.employee.description }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
