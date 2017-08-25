import React from "react";
import PropTypes from "prop-types";
import Details from './common/details.js';
import ImgThumb from './common/img.js';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
    
      componentDidMount() {
        this.props.getData();
    }
    render() {
        return (
                    <div className="row" className="container" id="gallery">
                        <div className="col-lg-12">
                            <h1 className="page-header">Gallery</h1>
                        </div>
                        {this.props.country.map(item => <ImgThumb key={item.id} obj={item} />)}
                        <Link to="/details/{key}" />
                    </div>    
        );
    }
}

Home.propTypes ={
    country:PropTypes.array,
    getData:PropTypes.func
};