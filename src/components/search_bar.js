import React from "react";


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: 'Starting value'}
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div className={"search-bar"}>
                <input value={this.state.term} onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        );
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
}

export default SearchBar;