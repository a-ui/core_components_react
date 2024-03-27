Version 7.2.0

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Fixed

- Datepicker recalculate it's label and value when the controlled value changes

### Changed

- TextField and TextArea components can have a charCounter when `maxLength` is not set (The default counter's text changes accordingly).
- The TextField and TextArea components' charCounter text get a danger style applied when the `maxLength` has been reached.
- It is now possible to keep typing in the TextField and TextArea components, even if the `maxLength` has been reached. This can still be blocked by setting the `maxLengthBlocksInput` prop to `true`. This prop is `false` by default to be WCAG compliant.

## 7.2.0 - 2024-03-25

### Fixed

- Datepicker doesn't crash when providing it an invalid date as value
- Controlled Calendar doesn't crash when providing it an invalid date as value

### Changed

- Core branding update 6.6.1
- Datepicker `onChange` function is now triggered for invalid dates (return empty string)
- Datepicker `onChange` function returns the input string value as second parameter

### Added

- Datepicker `errorMsgFunction` to fully customize the error based on the input

## 7.1.1 - 2024-03-07

### Added

- Allow an onChange listener on the input field of the Datepicker.

## 7.1.0 - 2024-02-19

### Fixed

- Upload component: A successfully uploaded no longer has a `danger` themed delete button.
- Replaced defaultProps with default arguments (defaultProps are deprecated in React 18).

### Added

- Definition list items can have a `qaTerm` and `qaDescription` properties for use as data-qa attributes on the respective terms and descriptions.

## 7.0.7

### Fixed

- Datepicker/Calendar component: fixed an issue where the Month view of a Calendar would show incorrect months if a date was selected where that date's `day` value was not present in some months (February does not contain a 30th or 31st day, for example).
- Select component: Make the Select component clearable if the component's `value` is undefined.

### Added

- The `Footer` component now allows for its `Link` items to have an `onClick`.

=======

## 7.0.6

### Fixed

- Upload component: the `hasValidFormat` will now check for multiple type notations (MIME type, . notation). Users will no longer see wrong error states when they select valid file formats as stated in the `accept` prop of the html `input` field.
- Removed locales import for Calendar, reducing package size.

=======

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
