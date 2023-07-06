import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fur_name: '',
            fur_type: '',
            amount: '',
            description: ''
        }
        this.changeFur_nameHandler = this.changeFur_nameHandler.bind(this);
        this.changeFur_typeHandler = this.changeFur_typeHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({fur_name: employee.fur_name,
                fur_type: employee.fur_type,
                amount : employee.amount,
                description : employee.description,
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {fur_name: this.state.fur_name, fur_type: this.state.fur_type, amount: this.state.amount, description: this.state.description};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeFur_nameHandler= (event) => {
        this.setState({fur_name: event.target.value});
    }

    changeFur_typeHandler= (event) => {
        this.setState({fur_type: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Furniture Name: </label>
                                            <input placeholder="Furniture Name" name="fur_name" className="form-control" 
                                                value={this.state.fur_name} onChange={this.changeFur_nameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Furniture Type: </label>
                                            <input placeholder="Furniture Type" name="fur_type" className="form-control" 
                                                value={this.state.fur_type} onChange={this.changeFur_typeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Furniture Amount: </label>
                                            <input placeholder="Furniture Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Furniture Description: </label>
                                            <input placeholder="Furniture Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
