import React from 'react';

export default class FilterItem extends React.Component {

    state = {toggle: false};
    filterSearching = e => {

        let value = e.target.dataset.filter;
        this.props.handle(value);	
        this.setState({toggle : !this.state.toggle});
    }   

    render() {
        const { filter } = this.props;
        const toggle = this.state.toggle;
        return (
            <li onClick={this.filterSearching}  data-filter={filter} className="search-item-filters" style={{ color : toggle  ? "#32D482"  :  "black" }} >{filter.toUpperCase()}</li>
        );
    }
}