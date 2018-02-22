import React from 'react';

export class VideoDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.video) {
            return <div className="col-sm-8">
                Loading
            </div>;
        }

        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;
        return <div className="embed-responsive embed-responsive-16by9 col-sm-8 ">

            <iframe className={"embed-responsive-item"} src={url}/>
        </div>
    }
}