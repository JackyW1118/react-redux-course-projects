import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    //create reference to the img component
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //images take time to be downloaded from urls, so listen for the load event
    //set span to determine the span of the img
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //set vertical span of the image to avoid overlapping
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
