# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Fixed

- Upgraded the `Modal` component to use in SSR contexts.
- Fixed an issue in the `Tooltip` component where it was possible to provide an invalid id attribute.

## 7.12.0 - 2026-03-13

### Added

- Added `required` prop on Upload component
- Added `description` and `state` properties to the `RadioGroup` component
- Added `required` property to the `Checkbox` component
- Added `required` prop to the `Checkbox` component
- Added `required` prop to the `RadioGroup` component
- Added `required` prop to the `Radio` component (not visible in the UI)
- Added `disabled` property to the `Autocomplete` component

### Fixed

- Fixed `Select` component selecting the first option when `value` is empty string; empty string now correctly shows the placeholder.
- Fixed a margin bottom issue with the inline alert title
- Fixed the `aria-describedby` attribute not being linked to `description` text in Datepicker component
- Fixed the required asterisk not being hidden from screen readers
- Fixed not being able to submit the form when the `Autocomplete` component is open

## 7.11.1 - 2026-01-07

### Fixed

- Fixed multiple issues with button properties

## 7.11.0 - 2025-10-09

### Added

- Added option to define border type for card
- Added highlighted card option
- Added option to add more classes to the card

### Fixed

- Fixed the alert close button that was sometimes overlapping with the title

## 7.10.3 - 2025-09-25

### Fixed

- Added a missing variant of a button with only a spinner

## 7.10.2 - 2025-09-09

### Fixed

- Removed the use of findDOMNode to fix the flyout behaviour in React 19

## 7.10.1 - 2025-09-03

### Fixed

- Introduced timezones to the calendar, so the correct date is always returned no matter which timezone you are in.
- Datepicker click/touch behavior in (Mobile) Safari

## 7.10.0 - 2025-07-24

### Added

- Result items in Autocomplete component can have a small sub label

## 7.9.4 - 2025-07-07

### Fixed

- Improved the accessibility of the pagination by defining when the previous and next button are disabled

## 7.9.3 - 2025-07-04

### Fixed

- Removed an unnecessary tabindex on the navigation list

## 7.9.2 - 2025-07-03

### Fixed

- Improved the accessibility of the icon component

## 7.9.1 - 2025-07-03

### Fixed

- Improved the accessibility of a navigation list item without a provided href

## 7.9.0 - 2025-05-08

### Added

- Can use the button component as a link with the `link` prop.
- `renderImgFunction` in `Image` to allow custom image rendering.
- `renderLinkFunction` in `Button` to allow custom link rendering.

## 7.8.1 - 2025-03-24

### Fixed

- Datepicker fix; allow to clear a controlled Date(Range)Picker

## 7.8.0 - 2025-02-19

### Fixed

- Updated `react-tooltip` package to make the library work with React v.19
- Fixed multiple svg fetch requests for the `Icon` component

## 7.7.0 - 2025-01-23

### Fixed

- WCAG issues Date(Range)Picker: correct aria and role attributes & trap focus inside modal `Calendar` component

## 7.6.0 - 2024-12-10

### Added

- `DateRangePicker` component
- `open`, `onCalendarToggle` and `onCalendarToggle` properties added to make opening and closing the `Calendar` controlled in the `Datepicker`

### Fixed

- The second argument of the Datepicker's `onChange` function returns now correctly the input value of the text field.
- An invalid icon is not rendered in the dom.

## 7.5.0 - 2024-02-09

### Added

- Possibility to override the `key` of autocomplete items
- Can hide the max size label in `Upload` component with the prop `hideMaxSizeLabel`
- Allow to provide a custom link render function to the `Card` component

### Fixed

- The upload component doesn't render an `ul` element anymore if no files are uploaded
- The table now renders hyperlinks correctly

## 7.4.1 - 2024-06-08

### Fixed

- Fixed caption being required by default

## 7.4.0 - 2024-05-08

### Added

- Added caption to Table

### Changed

- Improved accessibility of the input's character counter

### Changed

- Core branding update 6.6.4

## 7.3.1 - 2024-04-16

### Fixed

- The `indeterminate` state of a Checkbox is now fully controlled

## 7.3.0 - 2024-03-27

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
