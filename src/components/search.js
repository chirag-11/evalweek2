import React from "react";
import PropTypes from "prop-types";
import ImgThumb from "./common/img.js";
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: [],
            filterData: " "
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.toBeSearch = this.toBeSearch.bind(this);
    }
  
    componentWillMount() {
        if (this.props.country.length == 0) {
            this.props.getData();            
        }
        else {
            this.setState({
                filter: this.props.country
            });
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            filter: props.filteredData
        });
    }
      toBeSearch(evt) {
        this.setState({
            filterData: evt.target.value
        });
    }
    handleSearch(evt) {
        evt.preventDefault();
        let tos = this.state.filterData;
        if (tos) {
            this.props.getFilteredData(tos);
            this.setState({filter:this.props.filteredData});           
    }
}
    render() {        
        return (            
                <div className="search-wrapper">
                    <form onSubmit={this.handleSearch}>
                        <input type="text" name="focus" required className="search-box" placeholder="Enter country" onChange={this.toBeSearch} />
                        <button className="close-icon" type="reset" />
                        <button className="btn btn-search" type="button" onClick={this.handleSearch}><i className="fa fa-search fa-fw" /> Search</button>
                    </form>
                    {this.state.filter.map(item => <ImgThumb key={item.id} obj={item} />)}
                    {this.state.filter.length === 0 && <h1>no country found matching the text you enter</h1>}
                </div>
        );
    }
}
Search.propTypes ={
    getData:PropTypes.func,
    getFilteredData:PropTypes.func,
    country:PropTypes.array,
    filterData:PropTypes.string,
    filteredData:PropTypes.array
};