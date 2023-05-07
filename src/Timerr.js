import React, { Component } from "react";
import Timer from "./Counterr";

class LightningCounterDisplay extends Component {
    render() {
      var commonStyle = {
        margin: 0,
        padding: 0
      };
   
      var divStyle = {
        width: 250,
        textAlign: "center",
        backgroundColor: "#020202",
        padding: 40,
        fontFamily: "sans-serif",
        color: '#7FFFD4',
      };
   
      var textStyles = {
        emphasis: {
          fontSize: 38,
          ...commonStyle
        },
        smallEmphasis: {
          ...commonStyle
        },
        small: {
          fontSize: 17,
          opacity: 0.5,
          ...commonStyle
        }
      };
   
      
      return (
        <div style={divStyle}>
          <Timer />
          <h2 style={textStyles.smallEmphasis}>Press Start to Begin</h2>
        </div>
      );
    }
  }

  export default LightningCounterDisplay;