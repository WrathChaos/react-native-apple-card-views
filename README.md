<img alt="React Native Apple Card Views" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)

[![Fully customizable and perfect clone of Apple, App Store Card Views for React Native](https://img.shields.io/badge/-Fully%20customizable%20and%20perfect%20clone%20of%20Apple%2C%20App%20Store%20Card%20Views%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-apple-card-views)

[![npm version](https://img.shields.io/npm/v/react-native-apple-card-views.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-apple-card-views)
[![npm](https://img.shields.io/npm/dt/react-native-apple-card-views.svg?style=for-the-badge)](https://www.npmjs.org/package/react-native-apple-card-views)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Apple Card Views" src="assets/Screenshots/AppleCard.png" width="49.7%" />
<img alt="React Native Apple Card Views" src="assets/Screenshots/AppOfTheDayCard.png" width="49.7%" />
</p>

<p align="center">
<img alt="React Native Apple Card Views" src="assets/Screenshots/RN-Apple-Card-Views.gif" />
</p>

## Installation

Add the dependency:

### Pure React Native

```bash
npm i react-native-apple-card-views
```

## Peer Dependencies

##### IMPORTANT! You need install them

```bash
"react-native-androw": ">= 0.0.33",
"react-native-linear-gradient": ">= 2.5.6",
"@freakycoder/react-native-bounceable": ">= 0.1.1"
```

# Options

- AppleCard
- AppOfTheDayCard

# Usage

## AppleCard Usage

```jsx
<AppleCard
  smallTitle=""
  largeTitle=""
  footnoteText=""
  resizeMode="cover"
  source={require("./assets/hero_bg_brawlstars_.jpg")}
  backgroundStyle={{
    height: 200,
  }}
  onPress={() => {}}
/>
```

## AppOfTheDayCard Usage

```jsx
<AppOfTheDayCard
  iconSource={require("./assets/Colorfy.jpg")}
  backgroundSource={require("./assets/ColorfyBG.jpg")}
  onPress={() => {}}
  buttonOnPress={() => {}}
/>
```

### Configuration - Props

#### AppleCard Props

| Property            |   Type   |                                  Default                                   | Description                           |
| ------------------- | :------: | :------------------------------------------------------------------------: | ------------------------------------- |
| source              |  image   |                               default image                                | set the image background              |
| style               |  style   |                                  default                                   | change the style of the card          |
| shadowColor         |  color   |                                    #000                                    | change the main card's shadow color   |
| smallTitle          |  string  |                                  NEW GAME                                  | change the small title                |
| largeTitle          |  string  |                       The Brilliance of Brawl Stars                        | change the main large title           |
| footnoteText        |  string  | The next game from the markers of Clash Royale is here. Tap to learn more. | change the footnote text              |
| backgroundStyle     |  style   |                                  default                                   | set custom style for background image |
| smallTitleTextStyle |  style   |                                  default                                   | set custom style for small title      |
| largeTitleTextStyle |  style   |                                  default                                   | set custom style for large title      |
| footnoteTextStyle   |  style   |                                  default                                   | set custom style for footnote         |
| onPress             | function |                                    null                                    | use this to set onPress functionality |

#### AppOfTheDayCard Props

| Property            |     Type      |              Default              | Description                                       |
| ------------------- | :-----------: | :-------------------------------: | ------------------------------------------------- |
| style               |     style     |              default              | change the style of the card and image background |
| shadowStyle         |     style     |              default              | change the style of the card's shadow             |
| backgroundSource    |     image     |           default image           | set the image background for main card            |
| iconSource          |     image     |           default image           | set the logo image                                |
| largeTitle          |    string     |         "APP OF THE DAY"          | change the main large title                       |
| title               |    string     |   "Colorfy: Coloring Art Games"   | change the title text                             |
| subtitle            |    string     | "Drawing & painting for everyone" | change the subtitle text                          |
| buttonText          |    string     |               "GET"               | change the button's text                          |
| gradientColors      | Array<string> | ["#de9c7c", "#ef9f81", "#efa192"] | change the gradient colors                        |
| buttonSubtitle      |    string     |        "In-App Purchases"         | change the button's bottom subtitle               |
| largeTitleTextStyle |     style     |              default              | set the custom style for large title              |
| subtitleTextStyle   |     style     |              default              | set the custom style for subtitle text            |
| titleTextStyle      |     style     |              default              | set the custom style for title text               |
| iconStyle           |     style     |              default              | set the custom style for icon                     |
| buttonOnPress       |   function    |               null                | set a function for button's onPress               |
| onPress             |   function    |               null                | set a function for main card's onPress            |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Apple Card Views Library is available under the MIT license. See the LICENSE file for more info.
