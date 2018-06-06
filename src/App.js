import React, { Component } from "react";
import image from "./components/Content/img/no-photo-image.jpg";
import Navigation from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    header: [
      "Home",
      "How does it work",
      "Blog",
      "Media",
      "About Us",
      "Top resources",
      "My Profile",
      "Sign Up",
      "Connexion",
      "Language Selector"
    ],
    content: {
      image,
      body:
        "Bacon ipsum dolor amet shankle turducken chuck brisket rump tri-tip burgdoggen flank shank ribeye venison alcatra beef ribs tenderloin. Shank alcatra leberkas pork belly beef ribs cow, ribeye flank kielbasa ball tip frankfurter jerky chuck."
    },
    footer: ["Terms Of Service", "Privacy Policy", "The Team"],
    isOpen: false
  };
  toggleHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleToFalse = () => {
    this.setState({isOpen: false});
  }

  render() {
    let resources = [];
    for (let i = 1; i <= 30; i++) {
      const resource = {...this.state.content, title: "Resource " + i};
      resources.push(resource);
    }
    return (
      <div onClick={() => this.toggleToFalse()}>
        <Navigation tabs={this.state.header} isOpen={this.state.isOpen} toggle={this.toggleHandler}/>
        <Content resources={resources}/>
        <Footer tabs={this.state.footer}/>
      </div>
    );
  }
}

export default App;
