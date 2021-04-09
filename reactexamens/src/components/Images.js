import React from "react";
import "../App.css";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/images");
    const data = await response.json();
    this.setState({ images: data });
  }

  render() {
    const img = this.state.images;
    return (
      <div>
        <h1>Images</h1>
        {img.map((image) => (
          <div className="card" key={image._id}>
            <img src={image.imageUrl} alt={image.tags} />
            <h3>{image.tags}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Images;
