import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  //map each image object in props.images to a jsx element
  const images = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
