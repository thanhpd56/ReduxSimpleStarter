import React from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions";
import {Link} from 'react-router-dom';

class PostsShow extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const post = this.props.post;
        console.log(post);
        if(!post){
            return <div>Loading...</div>
        }
        return <div>
            <Link to="/">{"<<"}Back to home</Link>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick()}>Delete</button>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
        </div>

    }

    onDeleteClick() {
        console.log("onDeleteClick");
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            console.log("return home");
            this.props.history.push('/');
        });
    }
}

function mapStateToProps({posts}, ownProps) {
    console.log("mapStateToProps: ", posts);
    return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);