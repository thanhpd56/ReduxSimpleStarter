import React, {Component} from 'react';


export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return <div className="row">
            <input placeholder="Search" className="col-sm-8" value={this.state.term} onChange={(event => {
                this.onInputChange(event.target.value)
            })}/>
        </div>
    }

    onInputChange(term) {
        this.setState({term: term});
        this.props.onTermChange(term);
    }
}