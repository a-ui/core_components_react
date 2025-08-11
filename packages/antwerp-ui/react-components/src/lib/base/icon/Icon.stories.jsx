import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Icon } from './Icon';

Icon.displayName = 'Icon';

export default {
  title: 'React/Base/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'An icon is an image that represents a concept with meaning for the user. Icons can have an important role in any application. They are mostly language-independent, so without much effort they can give context to a lot of people. They are also very small, which means that they don’t take up a lot of screen real estate.'
      }
    }
  },
  args: {
    name: 'single-neutral',
    thin: false
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['ai-a11y', 'ai-accounting-bill', 'ai-accounting-bills', 'ai-add', 'ai-add-square', 'ai-advertising-megaphone', 'ai-alarm-bell', 'ai-alert-circle', 'ai-alert-diamond', 'ai-alert-triangle', 'ai-analytics-bars', 'ai-analytics-pie-1', 'ai-angle-brackets', 'ai-app-window', 'ai-archive', 'ai-arrange-letter', 'ai-arrange-number', 'ai-arrow-button-down-1', 'ai-arrow-button-left-1', 'ai-arrow-button-right-1', 'ai-arrow-button-up-1', 'ai-arrow-down-1', 'ai-arrow-left-1', 'ai-arrow-right-1', 'ai-arrow-up-1', 'ai-attachment', 'ai-audio-file-volume', 'ai-bicycle', 'ai-bin', 'ai-bluetooth', 'ai-book-open', 'ai-bookmarks-2', 'ai-brightness', 'ai-brightness-1', 'ai-button-loop', 'ai-button-shuffle', 'ai-button-split', 'ai-calendar', 'ai-calendar-3', 'ai-camera-1', 'ai-car-retro-2', 'ai-chat-translate', 'ai-check-1', 'ai-close', 'ai-cloud', 'ai-cog-1', 'ai-cog-double-3', 'ai-common-file-double-2', 'ai-common-file-empty', 'ai-common-file-text', 'ai-compass-arrow', 'ai-computer-bug', 'ai-controls-forward', 'ai-controls-pause', 'ai-controls-play', 'ai-controls-record', 'ai-controls-rewind', 'ai-controls-stop', 'ai-copy-paste-1', 'ai-credit-card-1', 'ai-cursor', 'ai-cursor-1', 'ai-cursor-hand-1', 'ai-cursor-hand-2', 'ai-cursor-select-frame', 'ai-cursor-select-frame-1', 'ai-cursor-target-1', 'ai-data-transfer-diagonal', 'ai-database-2', 'ai-delete-2', 'ai-developer-community-github-1', 'ai-direction-button-arrows', 'ai-dislike-2', 'ai-download-bottom', 'ai-drawer-download', 'ai-drawer-file', 'ai-drawer-open', 'ai-drawer-upload', 'ai-earth-1', 'ai-earth-3', 'ai-email-action-unread', 'ai-expand-1', 'ai-expand-3', 'ai-expand-vertical-1', 'ai-expand-vertical-3', 'ai-face-id', 'ai-file-code', 'ai-file-code-1', 'ai-filter-1', 'ai-filter-text', 'ai-flag-1', 'ai-flash', 'ai-floppy-disk-2', 'ai-folder', 'ai-folder-open', 'ai-gauge-dashboard', 'ai-graph-stats', 'ai-graph-stats-ascend', 'ai-graph-stats-descend', 'ai-hammer-wench', 'ai-hand-drag', 'ai-hand-drag-1', 'ai-hard-drive', 'ai-headphones-customer-support-human', 'ai-help-wheel', 'ai-hierarchy-1', 'ai-house-chimney', 'ai-hyperlink-2', 'ai-image-file-landscape', 'ai-info', 'ai-iris-scan-1', 'ai-keyboard', 'ai-keyboard-arrow-bottom-left', 'ai-keyboard-arrow-bottom-right', 'ai-keyboard-arrow-down', 'ai-keyboard-arrow-left', 'ai-keyboard-arrow-right', 'ai-keyboard-arrow-top-left', 'ai-keyboard-arrow-top-right', 'ai-keyboard-arrow-up', 'ai-laptop', 'ai-layers', 'ai-layout-column', 'ai-layout-headline', 'ai-layout-module-1', 'ai-legal-scale-unequal-1', 'ai-light-bulb-shine', 'ai-like-2', 'ai-list-bullets', 'ai-list-numbers', 'ai-location-off-target', 'ai-location-target', 'ai-location-target-1', 'ai-location-user', 'ai-lock-2', 'ai-lock-unlock-1', 'ai-login-1', 'ai-login-key', 'ai-logout-1', 'ai-love-it', 'ai-maps', 'ai-meeting-camera', 'ai-meeting-headphones-1', 'ai-messages-bubble', 'ai-messages-bubble-double', 'ai-mobile-phone', 'ai-module-puzzle', 'ai-monitor', 'ai-mouse', 'ai-move-expand-vertical', 'ai-move-shrink-vertical', 'ai-multiple-neutral-2', 'ai-music-note-2', 'ai-navigation-menu', 'ai-navigation-menu-4', 'ai-navigation-menu-horizontal', 'ai-navigation-menu-vertical', 'ai-navigation-next', 'ai-navigation-previous', 'ai-newspaper-fold', 'ai-office-file-adobe', 'ai-office-file-graph', 'ai-office-file-hierarchy', 'ai-office-file-sheet', 'ai-office-file-text', 'ai-office-file-text-graph', 'ai-os-system-apple', 'ai-os-system-microsoft', 'ai-overview', 'ai-paragraph', 'ai-paragraph-center-align', 'ai-paragraph-justified-align', 'ai-paragraph-left-align', 'ai-paragraph-right-align', 'ai-pencil-1', 'ai-pencil-write-1', 'ai-phone', 'ai-phone-charger', 'ai-pin', 'ai-pin-1', 'ai-pin-3', 'ai-power-button', 'ai-print-text', 'ai-professional-network-linkedin', 'ai-professional-tool-dropbox', 'ai-professional-tool-google-drive', 'ai-programming-browser', 'ai-question-circle', 'ai-rating-half-star', 'ai-rating-star', 'ai-redo', 'ai-remove', 'ai-remove-square-1', 'ai-rss-feed', 'ai-ruler', 'ai-scissors-2', 'ai-scroll-horizontal', 'ai-scroll-vertical', 'ai-search', 'ai-send-email', 'ai-settings-horizontal', 'ai-settings-vertical', 'ai-share-1', 'ai-share-2', 'ai-shop-1', 'ai-shopping-basket-2', 'ai-shopping-cart-1', 'ai-shrink-1', 'ai-shrink-2', 'ai-single-neutral', 'ai-social-instagram', 'ai-social-media-facebook', 'ai-social-media-meetup-alternate', 'ai-social-media-snapchat', 'ai-social-media-tiktok', 'ai-social-media-twitter', 'ai-social-media-x', 'ai-social-media-yammer', 'ai-social-music-podcast', 'ai-social-video-youtube-clip', 'ai-subtract', 'ai-subtract-square', 'ai-switch-off-1', 'ai-switch-on-1', 'ai-synchronize-arrows-1', 'ai-synchronize-arrows-three', 'ai-tags', 'ai-tags-double', 'ai-text-bold', 'ai-text-italic', 'ai-text-strike-through', 'ai-text-underline', 'ai-time-clock-circle', 'ai-toilet-paper-1', 'ai-touch-id-5', 'ai-undo', 'ai-upload-bottom', 'ai-upload-button', 'ai-usb-port-1', 'ai-user-signal-1', 'ai-vectors-anchor-rectangle', 'ai-vectors-anchor-square', 'ai-vectors-anchor-triangle', 'ai-vectors-line-path', 'ai-video-file-camera', 'ai-video-player', 'ai-view-1', 'ai-view-off', 'ai-volume-control-full', 'ai-volume-control-low', 'ai-volume-control-medium', 'ai-volume-control-off', 'ai-watch-time', 'ai-wench-1', 'ai-wifi', 'ai-zip-file', 'ai-zoom-in', 'ai-zoom-out'],
      description:
        'Name of the icon, can be used with or without `ai`. E.g. `love-it` or `ai-love-it` are both valid names.'
    },
    thin: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'If you use a more detailed icon it can become unreadable. Use the `thin` prop to make strokes a bit thinner.'
    },
    screenReaderText: {
      control: { type: 'text' },
      description: 'An appropriate text alternative within your icon, uses the `.u-screen-reader-only` class.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Icon {...args} />;
export const icon = Template.bind({});
