import React from "react";
// Animation library
import anime from "animejs/lib/anime.es.js";
// Logosvg
import { ReactComponent as LogoSvg } from "assets/img/KillerMantis-Logo-White-Fill.svg";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    const targets = [
      ...this.myRef.current.querySelectorAll("path, polygon, polyline")
    ];
    console.log(targets);
    anime({
      targets,
      opacity: [0, 0.5],
      easing: "easeInOutSine",
      duration: 1000,
      delay: function(el, i) {
        return i * 250;
      },
      loop: false
    });
  }

  render() {
    return (
      <LogoSvg
        ref={this.myRef}
        style={{
          height: "50vh",
          maxWidth: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          zIndex: "1"
        }}
      />
    );
  }
}

export default Logo;
