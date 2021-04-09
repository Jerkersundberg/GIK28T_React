import React from "react";
import "../App.css";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/videos");
    const data = await response.json();

    this.setState({ videos: data });
  
  }

  render() {
    const vids = this.state.videos;
    return (
      <div>
        {vids.map((video) => (
          <div className="card">
            <video width="400" controls>
              <source src={video.videoUrl} type={video.fileType} />
              Your browser does not support HTML video.
            </video>
          </div>
        ))}
      </div>
    );
  }
}

export default Videos;
