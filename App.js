import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert = () => {
    alert('This is Sound 1');
  };
    displayAlert2 = () => {
    alert('This is Sound 2');
  };
  displayAlert3 = () => {
    alert('This is Sound 3');
  };
    displayAlert4 = () => {
    alert('This is Sound 4');
  };
  displayAlert5 = () => {
    alert('This is Sound 5');
  };


  render() {
    return (
      <View 
       style={{ width:320, height: 50, marginTop: 80, marginLeft: 40 }}>
      <Button
        color={"red"}
        title="Sound 1"
        onPress={this.displayAlert}
      />
      <Button
        color={"yellow"}
        title="Sound 2"
        onPress={this.displayAlert2}
      />
      <Button
        color={"lightgreen"}
        title="Sound 3"
        onPress={this.displayAlert3}
      />
      <Button
        color={"blue"}
        title="Sound 4"
        onPress={this.displayAlert4}
      />
      <Button
        color={"pink"}
        title="Sound 5"
        onPress={this.displayAlert5}
      />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <AnyColorButton color="yellow" />
        
      </View>
    );
  }
}
