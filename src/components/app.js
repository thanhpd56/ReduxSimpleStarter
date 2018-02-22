import React, {Component} from 'react';
import {SearchBar} from "./search_bar";

const API_KEY = 'AIzaSyCMKdOkrr18PdVYlUvf71sSF6xyGwtHPAw';
import YTSearch from 'youtube-api-search';

import {VideoList} from "./VideoList";
import {VideoDetails} from "./VideoDetails";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

    }


    render() {
        let bodyStyle = {
            padding: 10
        };
        return (
            <div style={bodyStyle}>
                <SearchBar onTermChange={(term) => {
                    this.onTermChange(term)
                }}/>
                <hr/>
                <div className="row pull-right">
                    <VideoDetails video={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onVideoClick={(video) => this.onVideoSelect(video)}/>
                </div>
            </div>
        );
    }

    onTermChange(term) {
        // do youtube search
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos})
        })
    }

    onVideoSelect(video) {
        this.setState({selectedVideo: video})
    }
}
