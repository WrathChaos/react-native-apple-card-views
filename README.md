<img alt="React Native Apple Card Views" src="https://github.com/WrathChaos/react-native-apple-card-views/blob/master/assets/Screenshots/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)


[![Customizable and perfect clone of Apple, App Store Card Views for React Native.](https://img.shields.io/badge/-Customizable%20and%20perfect%20clone%20of%20Apple%2C%20App%20Store%20Card%20Views%20for%20React%20Native.-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-apple-card-views)



[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-apple-card-views.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-apple-card-views)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-apple-card-views.svg?style=for-the-badge)](https://www.npmjs.org/package/@freakycoder/react-native-apple-card-views)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)


<p align="center">
<img alt="React Native Apple Card Views" src="https://github.com/WrathChaos/react-native-apple-card-views/blob/master/assets/Screenshots/AppleCard.png" width="49.7%" />
<img alt="React Native Apple Card Views" src="https://github.com/WrathChaos/react-native-apple-card-views/blob/master/assets/Screenshots/AppOfTheDayCard.png" width="49.7%" />
</p>

<p align="center">
<img alt="React Native Apple Card Views" src="https://github.com/WrathChaos/react-native-apple-card-views/blob/master/assets/Screenshots/ReactNativeAppleCardViews.gif" width="49.7%"/>
</p>


## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i react-native-apple-card-views
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-androw": ">= 0.0.33",
"react-native-linear-gradient": ">= 2.5.6",
"react-native-material-ripple": ">= 0.8.0"
```

# Options 

- AppleCard
- AppOfTheDayCard

# Usage

## AppleCard Usage

```js
<AppleCard />
```

## AppOfTheDayCard Usage

```js
<AppOfTheDayCard />
```

### Configuration - Props

#### Apple Header Props

dateTitle, largeTitle, imageSource, onPress


| Property    |   Type   |       Default       | Description                               |
| ----------- | :------: | :-----------------: | ----------------------------------------- |
| dateTitle   |  string  | MONDAY, 27 NOVEMBER | set your own string instead of date title |
| largeTitle  |  string  |       For You       | set your own large title                  |
| imageSource |  image   |        image        | set your own image                        |
| onPress     | function |        null         | use this to set onPress functionality     |

#### Modern Header Props

| Property           |   Type    |    Default     | Description                                                     |
| ------------------ | :-------: | :------------: | --------------------------------------------------------------- |
| styles             |  styles   |     styles     | use this to change main style of the header                     |
| text               |  string   |  Header Title  | set the header's title                                          |
| textStyle          |   style   |     style      | set your own style for the header's text                        |
| left               |  number   |       16       | use this to set left icon's align                               |
| right              |  number   |       16       | use this to set right icon's align                              |
| leftIconName       |  string   | ios-arrow-back | change the left icon depends on the React Native Vector Icons   |
| leftIconType       |  string   |    Ionicons    | change the left icon's type                                     |
| leftIconSize       |  number   |       25       | change the left icon's size                                     |
| leftIconColor      |   color   |    #bbbabe     | change the left icon's color                                    |
| rightIconName      |  string   |     heart      | change the right icon depends on the React Native Vector Icons  |
| rightIconType      |  string   |     Entypo     | change the right icon's type                                    |
| rightIconSize      |  number   |       25       | change the right icon's size                                    |
| rightIconColor     |   color   |    #23c4c1     | change the right icon's color                                   |
| leftIconComponent  | component |      Icon      | use your own component instead of the integrated Icon component |
| rightIconComponent | component |      Icon      | use your own component instead of the integrated Icon component |
| leftIconOnPress    | function  |    function    | set the function for left icon's onPress                        |
| rightIconOnPress   | function  |    function    | set the function for right icon's onPress                       |
| leftDisable        |  boolean  |     false      | disable the left icon component                                 |
| rightDisable       |  boolean  |     false      | disable the right icon component                                |


#### Classic Header Props

| Property              |   Type    |  Default   | Description                                                                  |
| --------------------- | :-------: | :--------: | ---------------------------------------------------------------------------- |
| styles                |  styles   |   styles   | use this to change main style of the header                                  |
| height                |  number   |     50     | use this to change the header's height                                       |
| width                 |  number   |    100%    | use this to change the header's width                                        |
| statusBarHidden       |  boolean  |   false    | use this to let Header Component itself re-arrange depends on the status bar |
| hitSlops              |  object   | object: 30 | use this to change the header's left and right components' hitSlots          |
| bottomStick           |  boolean  |   false    | stick the header to bottom side                                              |
| headerTitle           |  string   |     ""     | use this to set header's title                                               |
| backgroundColor       |   color   |  #ffffff   | use this to change the header's background color                             |
| leftComponent         | component |    Icon    | set the left component                                                       |
| leftComponentStyle    |   style   |   style    | set the left component's style                                               |
| leftComponentDisable  |  boolean  |   false    | disable the left component                                                   |
| leftComponentOnPress  | function  |    null    | set the left component's onPress function                                    |
| rightComponent        | component |    Icon    | set the right component                                                      |
| rightComponentStyle   |   style   |   style    | set the right component's style                                              |
| rightComponentDisable |  boolean  |   false    | disable the right component                                                  |
| rightComponentOnPress | function  |    null    | set the right component's onPress function                                   |
| centerComponent       | component |    Icon    | set the center component                                                     |
| centerComponentStyle  |   style   |   style    | set the center component's style                                             |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Apple Card Views Library is available under the MIT license. See the LICENSE file for more info.
