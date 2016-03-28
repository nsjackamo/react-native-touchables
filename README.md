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

```

### TouchableWithImage
Instead of a View, an Image component is used. Two image files are specified
for both the pressed and not-pressed cases.
