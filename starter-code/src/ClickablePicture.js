import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    image: true
  };

  handleClick = () => {
    this.setState({
      image: !this.state.image
    });
  };

  render() {
    let imgUrl;
    if (this.state.image) {
      imgUrl = this.props.img;
    } else {
      imgUrl = this.props.imgClicked;
    }

    return (
      <div>
        <img src={imgUrl} alt="" onClick={this.handleClick} />
      </div>
    );
  }
}

export default ClickablePicture;
