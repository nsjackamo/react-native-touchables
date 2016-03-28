/**
*   TouchableWithImage.react.js
*   Written By: Derek Johnston
*/

"use strict";

import React, {
    Component,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

class TouchableWithImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        }

        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.getBtnImg = this.getBtnImg.bind(this);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                <View style={this.props.imageContainerStyle}>
                    <Image source={this.getBtnImg()} resizeMode="stretch"></Image>
                </View>
            </TouchableWithoutFeedback>
        );
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

    getBtnImg() {
        return (this.state.isPressed) ? this.props.pressedImg : this.props.normalImg;
    }
}

TouchableWithImage.propTypes = {
    onPress             : React.PropTypes.func.isRequired,
    imageContainerStyle : React.PropTypes.object.isRequired,
    pressedImg          : React.PropTypes.number.isRequired,
    normalImg           : React.PropTypes.number.isRequired
}

export default TouchableWithImage
