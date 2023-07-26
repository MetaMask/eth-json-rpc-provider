# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0]
### Uncategorized
- BREAKING: Update minimum Node.js version to 16 ([#20](https://github.com/MetaMask/eth-json-rpc-provider/pull/20))
- Retract v1.0.1 (#18) ([#18](https://github.com/MetaMask/eth-json-rpc-provider/pull/18))

## [1.0.1] [RETRACTED]
### Changed
- Updated dependencies: ([#16](https://github.com/MetaMask/eth-json-rpc-provider/pull/16))
  - Switched json-rpc-engine@^6.1.0 -> @metamask/json-rpc-engine@^7.0.0
  - Bumped @metamask/safe-event-emitter@^2.0.0->^3.0.0
  - Added @metamask/utils@5.0.1

## [1.0.0]
### Added
- Initial release, including `providerFromEngine` and `providerFromMiddleware`

[Unreleased]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/MetaMask/eth-json-rpc-provider/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/MetaMask/eth-json-rpc-provider/releases/tag/v1.0.0
