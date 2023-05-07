import React, { Component } from "react";
import Text from "./Text";
import LightningCounterDisplay from "./Timerr";
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Crazy Bird by Wild Child
</h2>
        <p>The Sun is a mass of incandescent gas
            A gigantic nuclear
            Furnace, furnace
            I'll wait around for a day
            This porch on which I pace
            'Cause I need you mine I need me yours
            You stole my breath away
            You swore to me you'd stay
            I've found something that I adore
            Oh how, how we supposed to go on
            Not knowing if you.
        </p>
        <Text>
          Type Here
        </Text>
        <LightningCounterDisplay></LightningCounterDisplay>
      </div>
    );
  }
}
 
export default Contact;