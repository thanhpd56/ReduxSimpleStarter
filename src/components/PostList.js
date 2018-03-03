import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (<div className="container">
        <div className="row" style={{paddingTop: 20, paddingBottom: 20, textAlign: 'right'}} ><Link className="btn btn-primary pull-right" to="/posts/new">Add</Link></div>
        <ul className="row list-group">{_.map(this.props.posts, post => <li className='list-group-item'
                                                                        key={post.id}><Link
          to={`/posts/${post.id}`}>{post.title}</Link></li>)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
