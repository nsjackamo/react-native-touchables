/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import {TouchableWithColor} from "./dist/react-native-touchables";
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    touchableStyles: {
        flex: 1
    }
});

class TouchableWithColorExample extends Component {
    constructor(props) {
        super(props);

        this.handleFirstPress = this.handleFirstPress.bind(this);
        this.handleSecondPress = this.handleSecondPress.bind(this);
    }

    render() {

        const textStyles = {
            fontSize    : 24,
            fontWeight  : "bold"
        };

        return (
            <View style={styles.container}>
                <TouchableWithColor
                    style={{ flex: 1 }}
                    normalColor="#0D47A1"
                    pressedColor = "#90CAF9"
                    onPress={this.handleFirstPress}
                />
                <TouchableWithColor
                    style={{ flex: 1 }}
                    normalColor="#880E4F"
                    pressedColor = "#F8BBD0"
                    onPress={this.handleFirstPress}
                />
            </View>
        );
    }

    handleFirstPress() {
        console.log("The top button was pressed");
    }

    handleSecondPress() {
        console.log("The bottom button was pressed");
    }
}

AppRegistry.registerComponent('TouchableWithColorExample', () => TouchableWithColorExample);
