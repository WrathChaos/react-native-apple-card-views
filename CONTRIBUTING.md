# Contributing

Thanks for your interest in improving **react-native-apple-card-views**! 🍏

## Getting started

```bash
git clone https://github.com/kuraydev/react-native-apple-card-views.git
cd react-native-apple-card-views
npm install
```

## Development workflow

The library source lives in [`lib/`](./lib). Useful scripts:

| Script | Purpose |
| --- | --- |
| `npm run lint` | ESLint (flat config) over `lib/` |
| `npm run lint:fix` | ESLint with autofix |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Jest + `@testing-library/react-native` |
| `npm run build` | Emit `build/dist` (JS + `.d.ts`) via `tsconfig.build.json` |
| `npm run format` | Prettier over `lib/` |

Please run `npm run lint && npm run typecheck && npm test && npm run build`
before opening a PR — CI runs all four on Node 18, 20 and 22.

## Backward compatibility

This is a published, widely-used package. **Do not** rename public exports,
component prop names, or change runtime default behaviour without flagging the
change as breaking. Fix docs to match the code, not the other way around.

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/). Examples:

- `fix: route rest props to a single pressable`
- `feat: add accessibilityLabel to AppleCard`
- `docs: correct the footnote prop name`

## Pull requests

1. Fork and create a feature branch.
2. Make your change with tests where it makes sense.
3. Ensure lint, typecheck, tests and build pass.
4. Open a PR using the template and describe any breaking change explicitly.

By contributing you agree that your contributions are licensed under the MIT license.
