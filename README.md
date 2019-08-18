<img alt="React Native Apple Card Views" src="https://github.com/WrathChaos/react-native-apple-card-views/blob/master/assets/logo.png" width="1050"/>

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

| Property        |   Type   |                                  Default                                   | Description                           |
| --------------- | :------: | :------------------------------------------------------------------------: | ------------------------------------- |
| source          |  image   |                               default image                                | set the image background              |
| shadowColor     |  color   |                                    #000                                    | change the main card's shadow color   |
| smallTitle      |  string  |                                  NEW GAME                                  | change the small title                |
| largeTitle      |  string  |                       The Brilliance of Brawl Stars                        | change the main large title           |
| footnoteText    |  string  | The next game from the markers of Clash Royale is here. Tap to learn more. | change the footnote text              |
| smallTitleStyle |  style   |                                   style                                    | set custom style for small title      |
| largeTitleStyle |  style   |                                   style                                    | set custom style for large title      |
| footnoteStyle   |  style   |                                   style                                    | set custom style for footnote         |
| onPress         | function |                                    null                                    | use this to set onPress functionality |

#### App Of The Day Card Props

| Property         |   Type   |    Default     | Description                            |
| ---------------- | :------: | :------------: | -------------------------------------- |
| shadowColor      |  color   |      #000      | change the main card's shadow color    |
| backgroundSource |  image   | default image  | set the image background for main card |
| iconSource       |  image   | default image  | set the logo image                     |
| largeTitle       |  string  | APP OF THE DAY | change the main large title            |
| title            |  string  |       16       | change the title                       |
| subtitle         |  string  |       16       | change the subtitle                    |
| buttonText       |  string  |    Ionicons    | change the button's text               |
| buttonSubtitle   |  string  |       25       | change the button's bottom subtitle    |
| largeTitleStyle  |  style   |     style      | set the custom style for large title   |
| iconStyle        |  style   |     style      | set the custom style for icon          |
| buttonOnPress    | function |      null      | set a function for button's onPress    |
| onPress          | function |      null      | set a function for main card's onPress |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Apple Card Views Library is available under the MIT license. See the LICENSE file for more info.
