Version 7.0.6

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Fixed

- Datepicker/Calendar component: fixed an issue where the Month view of a Calendar would show incorrect months if a date was selected where that date's `day` value was not present in somee months (February does not contain a 30th or 31st day,for example)

## 7.0.6

### Fixed

- Upload component: the `hasValidFormat` will now check for multiple type notations (MIME type, . notation). Users will no longer see wrong error states when they select valid file formats as stated in the `accept` prop of the html `input` field.
- Removed locales import for Calendar, reducing package size.

## 7.0.5

### Fixed

- An `Alert` component without a title label will no longer add a margin pushing the description down.
- A `Flyout` will not close anymore when clicking on a scrollbar inside of it.
- Can use the `required` property for the `Autocomplete` component.
- Use the circular icon for warning dialogs and the triangular for danger (error) dialogs.

=======

## 7.0.4

### Changed

- Core branding update 6.5.0

### Fixed

- Custom CSS is imported in build (tooltips, ...)
- Fixed inconsistent casing for the `addOn` prop in the `Autocomplete` and `TextField` components.
- Changed incorrect example in Storybook for the `addOn` prop in `Autocomplete` documentation.

### Added

- `autoComplete=off` property on `Autocomplete` component

## 7.0.3 - 2023-09-21

=======

### Added

- Can use the `addon` property for the `Autocomplete` component

### Fixed

- The `Datepicker` can not be opened via the calendar icon when disabled
- The `Autocomplete` component now takes on the full width of its parent element

## 7.0.2 - 2023-08-30

=======

### Added

- Can use both the `state` and `description` property for the `Autocomplete` component
- Can use state and description in the `inputProps` for the Datepicker component

## [7.0.1] - 2023-08-10

### Added

- Export of types
- Can use both the `label` (new) or `children` (existing) property for Table action buttons
- Can use the `label` and `required` property in Datepicker component

## [7.0.0] - 2023-06-14

### Added

- `Select` component

### Changed

- All months/days start with a capital letter in the `Calendar` for any localization

### Fixed

- Tool tip can be opened with keyboard

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

### Changed

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
