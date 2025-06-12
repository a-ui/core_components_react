import './Components.css';

import AvatarList from '../atoms/list/functional-list/AvatarList';
import Button from '../atoms/button/Button';
import Checkbox from '../atoms/checkbox/Checkbox';
import ListItemAvatar from '../atoms/list/items/ListItemAvatar';
import TextField from '../atoms/input/text-field/TextField';
import RangeSlider from '../atoms/range-slider/RangeSlider';
import Select from '../atoms/select/Select';
import Table from '../atoms/table/Table';
import Alert from '../molecules/alert/Alert';
import Datepicker from '../molecules/datepicker/Datepicker';
import Flyout from '../molecules/flyout/Flyout';
import Pagination from '../molecules/pagination/Pagination';
import StepIndicator from '../molecules/step-indicator/StepIndicator';
import Tag from '../molecules/tag/Tag';
import TagList from '../organisms/tag-list/TagList';

export default {
  title: 'Overview/Components',
  parameters: {
    controls: { hideNoControlsWarning: true },
    actions: { disable: true },
    docs: {
      page: () => (
        <div className="sb-unstyled">
          <div className="t-buttons">
            <h1 className="h4 u-margin-bottom-l">Buttons</h1>
            <div className="u-flex u-margin-bottom-xs">
              <Flyout
                orientation="bottom-left"
                scrollable
                hasPadding={false}
                trigger={<Button>Button with flyout</Button>}
              >
                <AvatarList flushed>
                  <ListItemAvatar
                    avatar={{
                      letter: 'TU'
                    }}
                    iconRight="navigation-menu-horizontal"
                    id="test-1"
                    name="test-1"
                    user={{
                      name: 'Test User'
                    }}
                  />
                  <ListItemAvatar
                    avatar={{
                      image: 'https://placedog.net/100/100?r'
                    }}
                    iconRight="navigation-menu-horizontal"
                    id="test-2"
                    name="test-2"
                    link={{
                      href: '#'
                    }}
                    user={{
                      email: 'user@antwerpen.be',
                      name: 'Another test user'
                    }}
                  />
                  <ListItemAvatar
                    active
                    avatar={{
                      letter: 'AT'
                    }}
                    iconRight="navigation-menu-horizontal"
                    id="active-test-user"
                    link={{
                      href: '#'
                    }}
                    name="isaac"
                    user={{
                      email: 'active-test-user@antwerpen.be',
                      name: 'Active test user'
                    }}
                  />
                </AvatarList>
              </Flyout>
              <Button emphasis="medium" addOn={{ type: 'icon', align: 'right', iconProps: { name: 'arrow-right-1' } }}>
                Button
              </Button>
              <Button emphasis="low">Button</Button>
              <Button addOn={{ type: 'icon', iconProps: { name: 'arrow-right-1' } }}>Button</Button>
            </div>

            <div className="u-flex u-margin-bottom-xs">
              <Button theme="success">Success</Button>
              <Button
                theme="success"
                emphasis="medium"
                addOn={{ type: 'icon', align: 'left', iconProps: { name: 'check-1' } }}
              >
                Success
              </Button>
              <Button theme="success" emphasis="low">
                Success
              </Button>
              <Button theme="success" addOn={{ type: 'icon', iconProps: { name: 'arrow-right-1' } }}>
                Button
              </Button>
            </div>

            <div className="u-flex u-margin-bottom-xs">
              <Button theme="warning">Warning</Button>
              <Button
                theme="warning"
                emphasis="medium"
                addOn={{ type: 'icon', align: 'right', iconProps: { name: 'alert-circle' } }}
              >
                Warning
              </Button>
              <Button theme="warning" emphasis="low">
                Warning
              </Button>
              <Button theme="warning" addOn={{ type: 'icon', iconProps: { name: 'alert-circle' } }}>
                Button
              </Button>
            </div>

            <div className="u-flex u-margin-bottom-xs">
              <Button theme="danger">Danger</Button>
              <Button
                theme="danger"
                emphasis="medium"
                addOn={{ type: 'icon', align: 'left', iconProps: { name: 'alert-triangle' } }}
              >
                Danger
              </Button>
              <Button theme="danger" emphasis="low">
                Danger
              </Button>
              <Button theme="danger" addOn={{ type: 'icon', iconProps: { name: 'alert-triangle' } }}>
                Button
              </Button>
            </div>
          </div>

          <div className="t-form">
            <h1 className="h4 u-margin-top-3xl u-margin-bottom-l">Form</h1>
            <div className="u-margin-bottom-l">
              <StepIndicator
                screenReaderCompleteLabel=" (finished)"
                screenReaderStepLabel="Step "
                steps={[
                  {
                    complete: true,
                    id: 'step1',
                    label: 'Step 1'
                  },
                  {
                    active: true,
                    id: 'step2',
                    label: 'Step 2 - Data'
                  },
                  {
                    id: 'step3',
                    label: 'Step 3'
                  }
                ]}
              />
            </div>
            <div className="a-form u-form">
              <TextField description="Fill in some value" id="textfield-story" label="Value" type="text" />
              <Select
                id="select-story"
                label="Choose an option"
                name="select-story"
                options={[
                  {
                    label: 'First option',
                    value: 'first'
                  },
                  {
                    label: 'Second option',
                    value: 'second'
                  },
                  {
                    label: 'Third option',
                    value: 'third'
                  }
                ]}
              />
              <Datepicker format="dd/MM/yyyy" iconButtonLabel="Open calendar" label="An important date" value="" />
              <div className="u-margin-bottom">
                <RangeSlider
                  ariaLabelMax="Maximum"
                  ariaLabelMin="Minimum"
                  iconEnd="ai-like-2"
                  iconStart="ai-dislike-2"
                  label="Happiness factor"
                  labelEnd=""
                  labelStart=""
                  max={10}
                  min={0}
                  start={8}
                  step={1}
                />
              </div>
              <Checkbox id="checkbox-example" label="I agree" name="agree-checkbox" showLabel />
            </div>
          </div>

          <div className="t-table">
            <h1 className="h4 u-margin-top-3xl u-margin-bottom-l">Table</h1>
            <div className="u-margin-bottom">
              <Alert
                inline
                title={{
                  label: 'Beware'
                }}
                titleId="aui-alert-title"
              >
                This is just a demo of some components on a page. Most of them are not functional, but they should give
                you a good insight of how they would look in a real application.
              </Alert>
            </div>
            <div className="u-margin-bottom">
              <TagList>
                <Tag removable={true} label="Some filter" ariaLabelDelete="Remove 'Some filter'" />
                <Tag removable={true} label="Some other filter" ariaLabelDelete="Remove 'Some other filter'" />
              </TagList>
            </div>
            <Table
              actions={{
                buttons: [
                  {
                    children: 'Buy',
                    id: 'buy'
                  }
                ],
                label: 'Actions'
              }}
              columns={[
                {
                  dataType: 'primary',
                  label: 'Snack',
                  sortable: true,
                  value: 'snack'
                },
                {
                  dataType: 'secondary',
                  label: 'Description',
                  sortable: true,
                  value: 'description'
                },
                {
                  alignRight: true,
                  dataType: 'secondary',
                  label: 'Stock',
                  value: 'stock'
                },
                {
                  alignRight: true,
                  label: 'Price',
                  value: 'price'
                }
              ]}
              id="example-table"
              rows={[
                {
                  description: 'Tasty, frozen treat for a hot day',
                  id: '0',
                  price: '€2,49',
                  snack: 'Ice cream',
                  stock: 160
                },
                {
                  description: 'Salty, crunchy goodness',
                  id: '1',
                  price: '€1,99',
                  snack: 'Chips',
                  stock: 48
                },
                {
                  description: 'Chewy and quite nutty',
                  id: '2',
                  price: '€1,49',
                  snack: 'Candy bar',
                  stock: 240
                }
              ]}
              sort="description"
              sortDirection="descending"
            />
            <div className="u-pagination u-margin-top">
              <Pagination currentPage={1} display="numbers" itemsPerPage={10} totalItems={32} />
            </div>
          </div>
        </div>
      )
    }
  }
};

export const Overview = () => null;
