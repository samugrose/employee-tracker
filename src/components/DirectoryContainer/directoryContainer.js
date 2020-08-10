import React, { Component } from 'react'
import Tr from "../TableRow/tableRow"
import Header from "../Header/header"
import API from "../../utils/API"


export default class DirectoryContainer extends Component {
    state = {
        search: "",
        results: [],
        ab: true
    }

  

    allEmployees = () => {
        API.search()
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.allEmployees();
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    sortLast = () => {
        this.setState({ab:!this.state.ab});
        if (this.state.ab === true) {   
            this.setState({results:this.state.results.sort((a,b) => {
                if(a.name.last < b.name.last){
                    return 1
                } else {
                    return -1
                }
            })})
        } else {
            this.setState({results:this.state.results.sort((a,b) => {
                if(a.name.last > b.name.last){
                    return 1
                } else {
                    return -1
                }
            })})
        }
    }

    render() {
        return (
            <>
                <Header value={this.state.search} handleInputChange={this.handleInputChange} />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">First</th>
                            <th scope="col">
                                <button onClick={this.sortLast}>
                                Last <i class="fa fa-sort"></i>
                                </button>
                            </th>
                            <th scope="col">Phone</th>
                            <th scope="col">Cell</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.filter(item => { return item.name.first.indexOf(this.state.search) > -1 }).map(emp => <Tr name={emp.name} image={emp.picture.large} phone={emp.phone} cell={emp.cell} email={emp.email} />)}
                    </tbody>
                </table>
            </>
        )
    }
}