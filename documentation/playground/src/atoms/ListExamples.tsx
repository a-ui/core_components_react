import {
  AvatarList,
  DefinitionList,
  FunctionalList,
  ListItem,
  ListItemAvatar,
  ListItemCheckbox,
  CheckboxList
} from '@a-ui/react';
import { useState } from 'react';

export function ListExamples() {
  const [nameClicked, setNameClicked] = useState('');
  const [checked, setChecked] = useState('checkbox-1');
  return (
    <div className="u-margin">
      <h2>Lists</h2>
      <div className="u-margin">
        <h3>Definition</h3>
        <DefinitionList items={[{ id: '1', term: 'This is', description: 'A definition list' }]} />
        <h3 className="u-margin-top">Functional</h3>
        <p>Clicked on {nameClicked}</p>
        <FunctionalList onItemClick={setNameClicked} lined>
          <ListItem id="1" name="One" link={{ href: '#' }} iconLeft="mouse">
            1
          </ListItem>
          <ListItem id="2" name="Two">
            2
          </ListItem>
          <ListItem id="3" onClick={() => setNameClicked('OVERRIDEN')} name="Three" iconRight="arrow-right-1">
            3
          </ListItem>
        </FunctionalList>
        <h3 className="u-margin-top">Avatar</h3>
        <AvatarList>
          <ListItemAvatar
            id="1"
            user={{ name: 'Albert Einstein' }}
            avatar={{ letter: 'AE' }}
            active
            iconRight="navigation-menu-horizontal"
          />
          <ListItemAvatar
            id="2"
            user={{ name: 'A dog', function: 'Dog', email: 'dog@antwerpen.be' }}
            avatar={{ image: 'https://placedog.net/100/100?r' }}
            iconRight="navigation-menu-horizontal"
          />
          <ListItemAvatar
            id="3"
            avatar={{ letter: 'IN' }}
            link={{ href: '#' }}
            user={{ name: 'Isaac Newton', email: 'isaac.newton@antwerpen.be' }}
            iconRight="navigation-menu-horizontal"
          />
        </AvatarList>
        <h3 className="u-margin-top">Checkbox</h3>
        <CheckboxList>
          <ListItemCheckbox
            onClick={setChecked}
            name="checkbox-1"
            id="checkbox-1"
            label="First item"
            checked={checked === 'checkbox-1'}
          />
          <ListItemCheckbox
            onClick={setChecked}
            name="checkbox-2"
            id="checkbox-2"
            label="Second item"
            checked={checked === 'checkbox-2'}
          />
          <ListItemCheckbox
            onClick={setChecked}
            name="checkbox-3"
            id="checkbox-3"
            label="Third item"
            checked={checked === 'checkbox-3'}
          />
        </CheckboxList>
      </div>
    </div>
  );
}

export default ListExamples;
