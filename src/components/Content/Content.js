import React from "react";
import "./Content.css";
import PropTypes from 'prop-types';
import image from "./img/no-photo-image.jpg";

const Content = props => {
  let posts = props.resources.map(post => {
    return (
      <div className="col-md-4" key={post.title}>
        <img src={image} className="img-fluid" alt="" />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  });
  return (
    <section id="content">
      <div className="container">
        <div className="row">{posts}</div>
      </div>
    </section>
  );
};

Content.propTypes = {
  resources: PropTypes.array
}

export default Content;
