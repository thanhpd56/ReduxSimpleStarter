import React from 'react';
import {VideoItem} from "./VideoItem";

export class VideoList extends React.Component {

    render(){
        return <ul className="col-sm-4">
            {this.props.videos.map((video) => {return <VideoItem onVideoClick={this.props.onVideoClick} video={video} />})}
        </ul>
    }
}