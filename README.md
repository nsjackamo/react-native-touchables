# react-native-touchables

A touchable component library for react native. A lot of duplicate code happens
in my projects when custom touchable components are needed. This library
provides a few of the common ones.

## Components:

### TouchableWithColor
A touchable view with a custom background color which toggles when the view is
pressed.

##### usage:

```javascript
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
```

### TouchableWithText
Basically the same as 'TouchableWithColor' but with the added bonus of a text
component centered in the view.

##### usage:

```javascript
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
```

### TouchableWithImage
Instead of a View, an Image component is used. Two image files are specified
for both the pressed and not-pressed cases.

##### Usage:

``` javascript
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
```
