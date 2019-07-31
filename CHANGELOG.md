# Changelog

## [Unreleased](https://github.com/mesg-foundation/cli/compare/master...dev)

#### Breaking Changes
#### Added
#### Changed
#### Fixed
#### Removed

## [v1.1.0](https://github.com/mesg-foundation/cli/releases/tag/v1.1.0)

### [Click here to see the release notes](https://forum.mesg.com/t/release-notes-of-engine-v0-11-cli-v1-1-and-js-library-v4/339)

#### Added

- ([#99](https://github.com/mesg-foundation/cli/pull/99)) Sid support.
- ([#106](https://github.com/mesg-foundation/cli/pull/106)) Add service and instance resolvers.

#### Changed

- ([#81](https://github.com/mesg-foundation/cli/pull/81)) Integration of the new Engine v0.11 APIs.
- ([#87](https://github.com/mesg-foundation/cli/pull/87)) Revert name from service:get to service:detail.
- ([#90](https://github.com/mesg-foundation/cli/pull/90)) capitalize all flag descriptions.
- ([#91](https://github.com/mesg-foundation/cli/pull/91)) display ... for multiple args.
- ([#92](https://github.com/mesg-foundation/cli/pull/92)) add description quiet flag and make silent hidden.
- ([#93](https://github.com/mesg-foundation/cli/pull/93)) Switch to v0.11.0 of the Engine.

#### Fixed

- ([#84](https://github.com/mesg-foundation/cli/pull/84)) Fix issue with flags on the account:* commands.
- ([#85](https://github.com/mesg-foundation/cli/pull/85)) Better management of confirm flag with delete data only.
- ([#86](https://github.com/mesg-foundation/cli/pull/86)) Fix marketplace commands.
- ([#88](https://github.com/mesg-foundation/cli/pull/88)) fix flags with marketplace:publish command.
- ([#97](https://github.com/mesg-foundation/cli/pull/97)) Fix command service:logs by removing wrong flag passed to ServiceStop.
- ([#98](https://github.com/mesg-foundation/cli/pull/98)) Better service:dev exit.
- ([#100](https://github.com/mesg-foundation/cli/pull/100)) Improve ux of account commands.
- ([#101](https://github.com/mesg-foundation/cli/pull/101)) Improve text of commands daemon.
- ([#102](https://github.com/mesg-foundation/cli/pull/102)) dependOn is breaking release.
- ([#103](https://github.com/mesg-foundation/cli/pull/103)) Improve commands marketplace.
- ([#104](https://github.com/mesg-foundation/cli/pull/104)) Improve command roots.
- ([#105](https://github.com/mesg-foundation/cli/pull/105)) Improve us of service command.
- ([#107](https://github.com/mesg-foundation/cli/pull/107)) Only display the error's message.

#### Removed

- ([#89](https://github.com/mesg-foundation/cli/pull/89)) remove aliases.

## [v1.0.0](https://github.com/mesg-foundation/cli/releases/tag/v1.0.0)

### [Click here to see the release notes](https://forum.mesg.com/t/mesg-engine-v0-10-js-cli-and-js-library-v3-0-0-release-notes/317)
- Initial version of the new CLI.