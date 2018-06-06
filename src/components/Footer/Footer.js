import React from "react";
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => {
  //maps to generate the three footers
  const index = props.tabs.map(tab => {
    return <div className="col-sm-4" key={tab}><p className="footer-item">{tab}</p></div>;
  });
  return (
    <section className="footer">
      <div className="container">
        <div className="row">{index}</div>
      </div>
    </section>
  );
};

//checks the type of props... self explanatory ;)
Footer.propTypes = {
  tabs: PropTypes.array
}

export default Footer;
