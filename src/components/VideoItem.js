import React from 'react';

export class VideoItem extends React.Component {
    render (){
        return <li className="list-group-item" onClick={() => {this.props.onVideoClick(this.props.video)}}>
            <div className="media-left">
                <img className="media-object" src={this.props.video.snippet.thumbnails.default.url}/>
            </div>
            <div className="media-body">
                <div className="media-heading">{this.props.video.snippet.title}</div>
                <div className="media-heading">{this.props.video.snippet.channelTitle}</div>
                <div className="media-heading">25N lượt xem</div>
            </div>

        </li>
    }
}