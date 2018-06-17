import React from 'react';

class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            searchText: event.target.value,
        });
    }
    render() {
        return (
            <div className="Search-form">
                <input onChange={this.handleInputChange} type= "text" value={this.state.searchText} />
                <button onClick={() => this.props.cityForecast(this.state.searchText)}>Search</button>
            </div>);

        }
    }
    /*const SearchForm = props => (
    <div className="Search-form">
    <input type= "text"/>
        <button>Search</button>
   

    </div>);

    */export default SearchForm;