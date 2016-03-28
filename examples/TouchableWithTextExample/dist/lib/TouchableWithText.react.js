/**
*   TouchableWithText.react.js
*   Copyright 2016 J&P Innovations Inc.
*/

"use strict";

import assign from "object-assign";
import React, {
    Component,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native"

class TouchableWithText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        };

        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.getBtnStyles = this.getBtnStyles.bind(this);

    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut} >
                <View style={this.getBtnStyles()}>
                    <Text style={this.props.textStyle}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    getBtnStyles() {
        let styles = this.props.staticStyles;
        let activeStyles = (this.state.isPressed) ? this.props.pressedStyles : this.props.normalStyles;
        return assign({}, styles, activeStyles);

    }

    handlePressIn() {
        this.setState({
            isPressed: true
        });
    }

    handlePressOut() {
        this.setState({
            isPressed: false
        });
    }
}

TouchableWithText.propTypes = {
    onPress         : React.PropTypes.func.isRequired,
    text            : React.PropTypes.string.isRequired,
    textStyle       : React.PropTypes.object.isRequired,
    staticStyles    : React.PropTypes.object.isRequired,
    pressedStyles   : React.PropTypes.object.isRequired,
    normalStyles    : React.PropTypes.object.isRequired
}

export default TouchableWithText
