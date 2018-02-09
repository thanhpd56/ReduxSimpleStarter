import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash'

const API_KEY = 'AIzaSyCMKdOkrr18PdVYlUvf71sSF6xyGwtHPAw';


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        let term = 'surftboards';
        this.videoSearch(term);
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);

        return <div>
            <SearchBar onTermChange = {videoSearch}/>


            <VideoList
                videos={this.state.videos}
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            />
            <VideoDetail video={this.state.selectedVideo}/>

        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
