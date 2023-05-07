import React, { Component } from "react";
import Text from "./Text";
import LightningCounterDisplay from "./Timerr";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Tessellate by Alt J</h2>
        <p>Bite chunks out of me
            You're a shark and I'm swimming
            My heart still thumps as I bleed
            And all your friends come sniffing.
            Triangles are my favorite shape
            Three points where two lines meet.
            Toe to toe, back to back, let's go
            My love it's very late.
            'Til morning comes, let's tessellate.</p>
            
        <Text>
          Type Here
        </Text>
        <LightningCounterDisplay></LightningCounterDisplay>
      </div>
    );
  }
}
 
export default Home;