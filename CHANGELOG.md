Version 7.0.0-beta.4

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Add `Map` component

## [7.0.0-beta.4] - 2023-05-24

### Fixed

- Added `a-input__wrapper--inline` class for inline `TextField` and `TextArea` component
- `Footer` default props are now correctly set

### Added

- `locale` props for `Calendar` (and Datepicker via `calendarProps`)

## [7.0.0-beta.3] - 2023-05-08

### Fixed

- Datepicker animation fix: it now uses the Flyout animation on open/close
- Autocomplete items list can be updated after rendering (e.g. after an async call)
- Scroll handlers (Table, Navigation list) don't show a shadow anymore on overscroll (e.g. Safari scroll bounce)

### Change

- Core branding update to v6.3.0
- Clicking on the Rangeslider line moves the handle around
- Rename `buttons` to `menuItems` in the Header component. A menu item can be a button or a button with flyout.

### Added

- `disabled` prop for `Button`

## [7.0.0-beta.2] - 2023-05-08

Unpublished broken version

## [7.0.0-beta.1] - 2023-04-20

### Breaking from previous beta

- Improvements on `TextField` and `TextArea`: `iconLeft`, `iconRight`, `addonLeft` and `addonRight` are replaced by `addon` object

### Fixed

- Fixed problem were range `RangeSlider` dots would jump when clicking on handles

### Changed

- Core branding update to v6.2.3
- Conditionally remove `aria-labbeledby` on the `ProgressBar` when an `aria-label` is used
- Use Core Branding logo as default for the `Header`
- Updated contributing guidelines

### Added

- `Datepicker` component
- `charCountText` property on `TextField` and `TextArea`
- `multiple` option for `Autocomplete`
- A warning is logged for a wrong or unknown `Icon`

## [7.0.0-beta.0] - 2023-03-30

### Changed

- New React components for Core Branding 6.3.0

### Removed

- All old components
