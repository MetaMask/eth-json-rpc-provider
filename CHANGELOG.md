# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.2.0]
### Changed
- Align ESLint, Prettier packages and configs with core monorepo ahead of migration ([#28](https://github.com/MetaMask/eth-json-rpc-provider/pull/28))
  - Bump `@lavamoat/allow-scripts` from `^2.0.3` to `^2.3.1`.
  - Bump `@metamask/eslint-config` from `^11.0.1` to `^12.2.0`.
  - Bump `@metamask/eslint-config-jest` from `^11.0.0` to `^12.0.0`.
  - Bump `@metamask/eslint-config-nodejs` from `^11.0.1` to `^12.0.0`.
  - Bump `@metamask/eslint-config-typescript` from `^11.0.0` to `^12.0.0`.
  - Downgrade `@types/node` from `^16.18.39` to `^16.18.24`.
  - Downgrade `@typescript-eslint/eslint-plugin` from `^5.43.0` to `^5.30.7`.
  - Downgrade `@typescript-eslint/parser` from `^5.43.0` to `^5.30.7`.
  - Bump `eslint` from `^8.27.0` to `^8.44.0`.
  - Downgrade `eslint-plugin-jsdoc` from `^39.6.2` to `^39.3.3`.
  - Removed `eslint-plugin-node@^11.1.0`.
  - Added `eslint-plugin-n@^15.7.0`.
  - Added `eslint-plugin-promise@^6.1.1`.
  - Downgraded `prettier-plugin-packagejson` from `^2.3.0` to `^2.2.17`.
  - Bump `ts-node` from `^10.7.0` to `^10.9.1`.
  - Upgrade `packageManager` from `yarn@3.2.1` to `yarn@3.3.0`.

## [2.1.0]
### Changed
- Bump `@metamask/json-rpc-engine` from `^7.0.0` to `^7.1.0` ([#25](https://github.com/MetaMask/eth-json-rpc-provider/pull/25))
- Bump `@metamask/utils` from `^5.0.1` to `^8.1.0` ([#25](https://github.com/MetaMask/eth-json-rpc-provider/pull/25))

## [2.0.0]
### Fixed
- **BREAKING:** Update minimum Node.js version to 16 ([#20](https://github.com/MetaMask/eth-json-rpc-provider/pull/20))
- Switched json-rpc-engine@^6.1.0 -> @metamask/json-rpc-engine@^7.0.0 ([#16](https://github.com/MetaMask/eth-json-rpc-provider/pull/16))
  - **BREAKING**: Typescript type updates
- Updated dependencies: ([#16](https://github.com/MetaMask/eth-json-rpc-provider/pull/16))
  - Bumped @metamask/safe-event-emitter@^2.0.0->^3.0.0
  - Added @metamask/utils@5.0.1

Release `v2.0.0` is identical to `v1.0.1` aside from Node.js version requirement imposed by a dependency updates has been made explicit.

## [1.0.1] [RETRACTED]
### Changed
- **BREAKING:** Update minimum Node.js version to 16 ([#20](https://github.com/MetaMask/eth-json-rpc-provider/pull/20))
- Switched json-rpc-engine@^6.1.0 -> @metamask/json-rpc-engine@^7.0.0 ([#16](https://github.com/MetaMask/eth-json-rpc-provider/pull/16))
  - **BREAKING**: Typescript type updates
- Updated dependencies: ([#16](https://github.com/MetaMask/eth-json-rpc-provider/pull/16))
  - Bumped @metamask/safe-event-emitter@^2.0.0->^3.0.0
  - Added @metamask/utils@5.0.1

## [1.0.0]
### Added
- Initial release, including `providerFromEngine` and `providerFromMiddleware`

[Unreleased]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v2.2.0...HEAD
[2.2.0]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/MetaMask/eth-json-rpc-provider/releases/tag/v1.0.0
