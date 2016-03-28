/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import {TouchableWithImage} from "./dist/react-native-touchables";
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TouchableWithImageExample extends Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithImage
                    onPress={this.handlePress}
                    imageContainerStyle={{
                        height  : 50,
                        width   : 150
                    }}
                    normalImg={require("./assets/btnImg-normal.png")}
                    pressedImg={require("./assets/btnImg-press.png")}
                />
            </View>
        );
    }

    handlePress() {
        console.log("Pressed!!!");
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

AppRegistry.registerComponent('TouchableWithImageExample', () => TouchableWithImageExample);
