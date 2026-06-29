# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Exported the `IAppleCardProps` and `IAppOfTheDayCardProps` prop interfaces from the package entry.
- `accessibilityLabel` prop on both cards; pressable areas now expose `accessibilityRole="button"` and a `hitSlop`.
- `package.json` `types`, `module`, `react-native`, `source`, `exports`, and `files` fields.
- `peerDependencies` (`react`, `react-native`, `@freakycoder/react-native-bounceable`) with deliberately wide ranges, plus `peerDependenciesMeta`.
- Jest + `@testing-library/react-native` test suite covering render, prop wiring, press handlers, accessibility labels, and the responsive style factory.
- GitHub Actions CI (lint + typecheck + test + build across Node 18/20/22) and a restored Dependabot config.
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, issue templates, and a pull request template.
- ESLint 9 flat config (`eslint.config.js`).

### Changed

- Both cards now read `useWindowDimensions()` so layout reacts to rotation / resize instead of capturing `Dimensions.get('window')` once at module load.
- Both cards are wrapped in `React.memo` and expose a `displayName`.
- Repointed repository / homepage / bugs / author / funding metadata from the legacy WrathChaos / freakycoder URLs to the `kuraydev` GitHub owner.
- Replaced the dead `tslint` lint script with ESLint, and migrated the legacy `.eslintrc.js` to a flat config.
- Migrated the build to a dedicated `tsconfig.build.json`; the published entry (`main`) and types remain at `build/dist`.
- Updated the Babel preset to `@react-native/babel-preset`.
- Rewrote the README props tables to match the code (the footnote prop is `footnote`, not `footnoteText`; removed the non-existent default values) and added TypeScript, New Architecture, and Expo notes.

### Removed

- Dead / deprecated devDependencies: `@types/react-native`, `react-native-typescript-transformer`, `prettier-format`, `npm-post-install`, `eslint-config-airbnb`, `@react-native-community/eslint-config`, `cpx`.
- Stale root `app.json` (a copy-paste from `react-native-header-view` that referenced non-existent assets).

### Fixed

- Stopped spreading `...rest` onto multiple elements; rest props are now routed to the single intended pressable.
- Tightened `AppOfTheDayCard.iconSource` from `any` to `ImageSourcePropType`.

## [3.0.0] - 2023-02-04

- Initial baseline for this changelog. See the git history for prior releases.
