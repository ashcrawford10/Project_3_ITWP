import React, { Component } from "react";
import Text from "./Text";
import LightningCounterDisplay from "./Timerr";

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>First Class by Rainbow Kitten Surprise</h2>
        <p>Say we'll get married on a porch in Vegas
        We can get hitched and have a couple of kids
        And none of them will look at all like us
        And our neighbors will all be a bit too much
        And you'll live out in the desert with a man you never loved.</p>
       
        <Text>
          Type Here
        </Text>
      
        <LightningCounterDisplay></LightningCounterDisplay>
     
      </div>
    );
  }
}
 
export default Stuff;