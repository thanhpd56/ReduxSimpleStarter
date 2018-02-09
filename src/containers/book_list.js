import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    render() {
        return (
            <ul className={"list-group col-sm-4"}>
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className={"list-group-item"} onClick={() => {this.props.selectBook(book)}} >{book.title}</li>
            );
        })
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}


// Result cua function nay se duoc tra ve cho prop cua BookList
function mapDispatchToProps(dispatch) {
    // Khi book duoc select => gui result toi tat ca cac reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);