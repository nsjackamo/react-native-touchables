/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import {TouchableWithText} from "./dist/react-native-touchables";
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : "center",
        justifyContent  : "center"
    },

    touchableStyles: {
        flex: 1
    }
});

class TouchableWithTextExample extends Component {
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
                <TouchableWithText
                    onPress={this.handleFirstPress}
                    text="Press Me!"
                    textStyle={{
                        fontSize    : 24,
                        fontWeight  : "bold"
                    }}
                    staticStyles={{
                        height          : 40,
                        width           : 200,
                        borderWidth     : 3,
                        borderColor     : "black",
                        borderRadius    : 4,
                        alignItems      : "center",
                        justifyContent  : "center"
                    }}
                    normalStyles={{
                        backgroundColor: "#E65100"
                    }}
                    pressedStyles={{
                        backgroundColor: "#EF6C00"
                    }}
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

AppRegistry.registerComponent('TouchableWithTextExample', () => TouchableWithTextExample);
