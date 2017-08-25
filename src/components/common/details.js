import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Edit from './edit.js';
export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: {},
            current: {},
            showModal: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

  
 componentWillMount() {
        if (this.props.country.length == 0) {
            this.props.getData();
        }
        else {
            let id = this.props.id;
            this.setState({ current: this.props.country[id - 1] });
        }
    }
    componentWillReceiveProps(props) {
        let id = props.id;
        this.setState({ current: props.country[id - 1] });
    }
      handleClick(evt) {
        let temp1 = Object.assign({}, this.state.current);
        this.setState({
            showModal: true
        });
        this.setState({
            temp: temp1
        });
    }
    
    handleCloseModal(evt) {
        this.setState({
            showModal: false
        });
        let temp1 = Object.assign({}, this.props.country);
        this.setState({
            temp: temp1
        });
    }
    handleSaveClick(evt) {

        this.setState({
            showModal: false
        });
        let temp1 = Object.assign({}, this.state.temp);
        this.setState({
            current: temp1
        });
        this.props.saveData(temp1);
    }

    handleChange(evt) {
        let tt = evt.target.name;
        let val = evt.target.value;
        let temp1 = this.state.temp;
        temp1[tt] = val;
        this.setState({
            temp: temp1
        });
    }
    render() {
        return (      
                <div className="container" id="details">
                    <h2>Panels with Contextual Classes</h2>
                    <div className="panel-group">
                        <div className="panel panel-info">
                            <div className="panel-heading"><h2>Name Of Country</h2></div>
                            <div className="panel-body"><h2>{this.state.current.name}</h2></div>
                        </div>
                        <div className="panel panel-info">
                            <div className="panel-heading"><h2>Capital Of Country</h2></div>
                            <div className="panel-body"><h2>{this.state.current.capital}</h2></div>
                        </div>
                        <div className="panel panel-info">
                            <div className="panel-heading"><h2>Link</h2></div>
                            <div className="panel-body"><h2>{this.state.current.imageUrl}</h2></div>
                        </div>
                        <Edit item={this.state.temp} showModal={this.state.showModal} onSaveClick={this.handleSaveClick} onCloseModal={this.handleCloseModal} handleChange={this.handleChange} />
                        <button id="Edit" className="btn btn-primary" onClick={this.handleClick}>Edit</button>
                    </div>
                </div>
        );
    }
}
Details.propTypes = {
country:PropTypes.array,
getData:PropTypes.func,
saveData:PropTypes.func,
id:PropTypes.number

};
