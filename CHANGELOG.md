Version 7.0.0-beta.0

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] -

### Fixed

- Fixed problem were range `RangeSlider` dots would jump when clicking on handles

### Changed

- Core branding update to 6.2.3
- Conditionally remove `aria-labbeledby` on the `ProgressBar` when an `aria-label` is used
- Small improvements on `TextField` and `TextArea`: `iconLeft`, `iconRight`, `addonLeft` and `addonRight` are replaced by `addon` object
- Use Core Branding logo as default for the Header
- Updated contributing guide

### Added

- `Datepicker` component
- `charCountText` property on `TextField` and `TextArea`
- A warning is logged for wrong or unknown icons
- Autocomplete `multiple` option

## [7.0.0-beta.0] - 2023-03-30

### Changed

- New React components for Core Branding 6.2.2

### Removed

- All old components
