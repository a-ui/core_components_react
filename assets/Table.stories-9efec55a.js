var O=Object.defineProperty;var y=(n,p)=>O(n,"name",{value:p,configurable:!0});import{c as f}from"./dom.utils-1db2b487.js";import{a as S,b as R}from"./settings-9292fabe.js";import{w as A}from"./render.utils-d204ca25.js";import{C as E}from"./Checkbox-653c440b.js";import{j as a,a as v}from"./jsx-runtime-bb315772.js";import{B as x}from"./Button-309bc003.js";import{u as M}from"./custom.hooks-25de1769.js";import{Q as z}from"./stories.settings-7ac24d87.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./layout.settings-9902fce9.js";import"./Avatar-285c67d7.js";import"./Icon-53ae04fc.js";import"./Spinner-6dd14d1e.js";import"./log.utils-f56af116.js";function W({columns:n,selectable:p,selected:h=[],rows:r=[],onSelectAll:d,sort:s,small:g,sortDirection:m,tableId:b,onSortClick:u,actions:t}){var o;const i=h.length&&h.sort().join(",")===r.map(e=>e.id).sort().join(",");return a("thead",{children:v("tr",{children:[p?a("th",{children:a(E,{name:`aui-table-checkbox-${b}-all`,id:`aui-table-checkbox-${b}-all`,checked:!!i,indeterminate:!!h.length&&!i,onChange:d})}):null,n.map(e=>{const l=f({"u-text-right":!!e.alignRight,"is-collapsed":!!e.sortable,"is-condensed":!!g}),c=s===(e==null?void 0:e.value)&&m===S,w=s===(e==null?void 0:e.value)&&m===R,T=f({"a-table__sort-button":!0,"a-table__sort-button--unsorted":s!==(e==null?void 0:e.value),"a-table__sort-button--sorted-asc":c,"a-table__sort-button--sorted-desc":w});return a("th",{className:l,...e.sortable&&(c||w)&&{"aria-sort":c?S:R},...e.sortable&&{"aria-live":"polite"},children:A(e==null?void 0:e.label,a("button",{onClick:V=>u&&u(e.value),className:T}),!!(e!=null&&e.sortable))},e==null?void 0:e.value)}),(o=t==null?void 0:t.buttons)!=null&&o.length?a("th",{children:t==null?void 0:t.label}):null]})})}y(W,"TableHeader");function $({actions:n,columns:p,small:h,tableId:r,selectable:d,onSelect:s,selected:g=[],rows:m}){const b=f({"is-clickable":!!d}),u=y((t,i)=>{var e,l;const o=t.target;return o!=null&&o.classList.contains("a-button")||(l=(e=o.parentElement)==null?void 0:e.parentElement)!=null&&l.classList.contains("a-button")?!1:(t.preventDefault(),t.stopPropagation(),d&&s&&s(i.id))},"selectRow");return a("tbody",{children:m.map(t=>{var i,o;return v("tr",{onClick:e=>u(e,t),className:b,children:[d?a("td",{children:a(E,{name:`aui-table-checkbox-${r}-${t.id}`,id:`aui-table-checkbox-row-${r}-${t.id}`,checked:(g||[]).includes(t.id),onChange:e=>u(e,t)})}):null,p.map(e=>{const l=f({"u-text-right":!!e.alignRight,"u-text-bold":e.dataType==="primary",small:e.dataType==="secondary","is-condensed":!!h});return a("td",{className:l,children:e.transformFunction?e.transformFunction(t[e==null?void 0:e.value]||null):t[e==null?void 0:e.value]||null},e==null?void 0:e.value)}),A(((i=n==null?void 0:n.buttons)==null?void 0:i.map(e=>a(x,{onClick:l=>(e==null?void 0:e.onActionClick)&&(e==null?void 0:e.onActionClick(l,t.id)),...e,id:`aui-table-action-${r}-${e==null?void 0:e.id}-${t.id}`,size:(e==null?void 0:e.size)||"small",children:e==null?void 0:e.label},`aui-table-action-${r}-${e==null?void 0:e.id}-${t.id}`)))||null,a("td",{}),!!((o=n==null?void 0:n.buttons)!=null&&o.length))]},t==null?void 0:t.id)})})}y($,"TableBody");function k({id:n,sort:p,sortDirection:h,rows:r,columns:d,qa:s,striped:g,small:m,open:b,selectable:u,selected:t,onSelect:i,onSelectAll:o,onSortClick:e,actions:l,responsive:c,fixedColumnRight:w,fixedColumnLeft:T}){const[V,_,N,j]=M(),L=f({"a-table":!0,"a-table--striped":!!g,"a-table--open":!!b}),P=f({"a-table-responsive-wrapper":!!c,"has-shadow-left":!!c&&!N,"has-shadow-right":!!c&&!j,"has-first-column-fixed":!!T,"has-last-column-fixed":!!w}),C=v("table",{id:n,className:L,"data-qa":s,children:[a(W,{tableId:n,small:m,selectable:u,selected:t,columns:d,sort:p,rows:r,onSortClick:e,sortDirection:h,onSelectAll:o,actions:l}),a($,{tableId:n,small:m,selectable:u,selected:t,columns:d,rows:r,onSelect:i,actions:l})]});return c?a("div",{className:P,"data-qa":s,children:a("div",{ref:V,onScroll:_,className:"a-table-scrollable-wrapper",children:C})}):C}y(k,"Table");k.defaultProps={id:"aui-table",columns:[],rows:[],responsive:!0};const q=[{label:"Snack",value:"snack",sortable:!0,dataType:"primary"},{label:"Description",value:"description",sortable:!0,dataType:"secondary"},{label:"Stock",value:"stock",alignRight:!0,dataType:"secondary"},{label:"Price",value:"price",alignRight:!0}],F=[{id:"0",snack:"Ice cream",description:"Tasty, frozen treat for a hot day",stock:160,price:"€2,49"},{id:"1",snack:"Chips",description:"Salty, crunchy goodness",stock:48,price:"€1,99"},{id:"2",snack:"Candy bar",description:"Chewy and quite nutty",stock:240,price:"€1,49"}],re={title:"React/Atoms/Table",component:k,parameters:{storySource:{source:`import Table from './Table';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

const COLUMNS_EXAMPLE = [
  {
    label: 'Snack',
    value: 'snack',
    sortable: true,
    dataType: 'primary'
  },
  {
    label: 'Description',
    value: 'description',
    sortable: true,
    dataType: 'secondary'
  },
  {
    label: 'Stock',
    value: 'stock',
    alignRight: true,
    dataType: 'secondary'
  },
  {
    label: 'Price',
    value: 'price',
    alignRight: true
  }
];

const ROWS_EXAMPLE = [
  {
    id: '0',
    snack: 'Ice cream',
    description: 'Tasty, frozen treat for a hot day',
    stock: 160,
    price: '€2,49'
  },
  {
    id: '1',
    snack: 'Chips',
    description: 'Salty, crunchy goodness',
    stock: 48,
    price: '€1,99'
  },
  {
    id: '2',
    snack: 'Candy bar',
    description: 'Chewy and quite nutty',
    stock: 240,
    price: '€1,49'
  }
];

//   actions,

export default {
  title: 'React/Atoms/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Use the table component to make information easier to scan, compare and sort for users. Tables are meant for: showing sequential or structured data and helping users find specific information within a large data set.'
      }
    }
  },
  argTypes: {
    rows: {
      control: { type: 'object' },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The rows parameter contains the data for the table rows. Every row should have an UNIQUE \`id\`. The row data values are mapped to the \`value\` fields of columns. A row value can be any ReactNode (string, ...).'
    },
    columns: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The columns parameter contains the data for the table columns. The \`value\` fields are used to read the data from the rows. All the fields are: \`label\`, \`value\`, \`alignRight\`, \`dataType\`, \`sortable\` and \`transformFunction\`. The transform function can be used to transform all the values of a column and has signature \`(ReactNode) => ReactNode\`.'
    },
    striped: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Controls whether the table should have zebra striping, which equips uneven data rows with a light grey background.'
    },
    selectable: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The header and data rows can also be configured with leading checkbox components, which allow for the selection of one, multiple or all rows.'
    },
    selected: {
      control: { type: 'object' },
      if: { arg: 'selectable', truthy: true },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] }
      },
      description: 'Array of row \`ids\` to indicate which checkboxes in the \`Table\` have the checked state.'
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'An open table removes the most outward borders of the table, providing a slightly lighter visual style. This does not apply for responsive tables.'
    },
    small: {
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'The theme table with reduced padding can only be used in a setting where much data needs to be displayed in a limited space, such as a technical dashboard.'
    },
    sort: {
      defaultValue: 'description',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Current sort of the \`Table\`, this prop expects a column \`value\`. Will render the sortable header accordingly.'
    },
    sortDirection: {
      defaultValue: 'descending',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Current sort direction of the \`Table\`, \`ascending\` or \`descending\`. Will render the sortable header accordingly.'
    },
    responsive: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description:
        'Controls whether the \`Table\` component should be responsive. If set to \`true\` an horizontal scrollbar is added to the table when not enough space is available.'
    },
    fixedColumnRight: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'When a table is responsive, a column can be frozen to the right side.'
    },
    fixedColumnLeft: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'When a table is responsive, a column can be frozen to the left side.'
    },
    onSelect: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description:
        'Function that is triggered when a row is selected via a checkbox/row click. The first argument is the \`id\` of the row.'
    },
    onSelectAll: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description: 'Function that is triggered when the select all checkbox in the header is clicked.'
    },
    onSortClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description:
        'Function that is triggered when a sortable header button is clicked. The first argument is of type \`MouseEvent\` and the second one is the column \`value\`.'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'example-table',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-table' }
      },
      description:
        'The \`id\` prop allows to set the \`id\` attribute on the rendered HTML table component. It is used to uniquely identify checkboxes and buttons within a'
    },
    actions: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' }
      },
      description:
        'Table cells can also contain buttons, placed at the far right of a data row. The \`actions\` prop expect an optional \`label\` as column header and an array of \`Button\` properties. Two extra prop have been added: \`label\` to define the button label and \`onActionClick\` which append the row \`id\` as second argument to the normal button \`onClick\` behavior.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => <Table {...args} />;

export const table = Template.bind({});
table.args = {
  rows: ROWS_EXAMPLE,
  columns: COLUMNS_EXAMPLE,
  selected: ['0', '1'],
  actions: {
    label: 'Acties',
    buttons: [
      { label: 'Kopen', id: 'buy' },
      {
        label: 'Verwijder',
        id: 'delete',
        theme: 'danger',
        iconLeft: 'close'
      }
    ]
  }
};
`,locationsMap:{table:{startLoc:{col:17,line:229},endLoc:{col:53,line:229},startBody:{col:17,line:229},endBody:{col:53,line:229}}}},docs:{description:{component:"Use the table component to make information easier to scan, compare and sort for users. Tables are meant for: showing sequential or structured data and helping users find specific information within a large data set."}}},argTypes:{rows:{control:{type:"object"},table:{type:{summary:"array"},defaultValue:{summary:"[]"}},description:"The rows parameter contains the data for the table rows. Every row should have an UNIQUE `id`. The row data values are mapped to the `value` fields of columns. A row value can be any ReactNode (string, ...)."},columns:{control:{type:"object"},table:{type:{summary:"object"},defaultValue:{summary:"[]"}},description:"The columns parameter contains the data for the table columns. The `value` fields are used to read the data from the rows. All the fields are: `label`, `value`, `alignRight`, `dataType`, `sortable` and `transformFunction`. The transform function can be used to transform all the values of a column and has signature `(ReactNode) => ReactNode`."},striped:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Controls whether the table should have zebra striping, which equips uneven data rows with a light grey background."},selectable:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The header and data rows can also be configured with leading checkbox components, which allow for the selection of one, multiple or all rows."},selected:{control:{type:"object"},if:{arg:"selectable",truthy:!0},table:{type:{summary:"array"},defaultValue:{summary:[]}},description:"Array of row `ids` to indicate which checkboxes in the `Table` have the checked state."},open:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"An open table removes the most outward borders of the table, providing a slightly lighter visual style. This does not apply for responsive tables."},small:{defaultValue:!1,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"The theme table with reduced padding can only be used in a setting where much data needs to be displayed in a limited space, such as a technical dashboard."},sort:{defaultValue:"description",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Current sort of the `Table`, this prop expects a column `value`. Will render the sortable header accordingly."},sortDirection:{defaultValue:"descending",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Current sort direction of the `Table`, `ascending` or `descending`. Will render the sortable header accordingly."},responsive:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!0}},description:"Controls whether the `Table` component should be responsive. If set to `true` an horizontal scrollbar is added to the table when not enough space is available."},fixedColumnRight:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"When a table is responsive, a column can be frozen to the right side."},fixedColumnLeft:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"When a table is responsive, a column can be frozen to the left side."},onSelect:{control:{type:"function"},table:{type:{summary:"function"}},description:"Function that is triggered when a row is selected via a checkbox/row click. The first argument is the `id` of the row."},onSelectAll:{control:{type:"function"},table:{type:{summary:"function"}},description:"Function that is triggered when the select all checkbox in the header is clicked."},onSortClick:{control:{type:"function"},table:{type:{summary:"function"}},description:"Function that is triggered when a sortable header button is clicked. The first argument is of type `MouseEvent` and the second one is the column `value`."},id:{control:{type:"text"},defaultValue:"example-table",table:{type:{summary:"string"},defaultValue:{summary:"aui-table"}},description:"The `id` prop allows to set the `id` attribute on the rendered HTML table component. It is used to uniquely identify checkboxes and buttons within a"},actions:{control:{type:"object"},table:{type:{summary:"object"},defaultValue:{summary:"{}"}},description:"Table cells can also contain buttons, placed at the far right of a data row. The `actions` prop expect an optional `label` as column header and an array of `Button` properties. Two extra prop have been added: `label` to define the button label and `onActionClick` which append the row `id` as second argument to the normal button `onClick` behavior."},qa:z}},D=y(({...n})=>a(k,{...n}),"Template"),I=D.bind({});I.args={rows:F,columns:q,selected:["0","1"],actions:{label:"Acties",buttons:[{label:"Kopen",id:"buy"},{label:"Verwijder",id:"delete",theme:"danger",iconLeft:"close"}]}};const se=["table"];export{se as __namedExportsOrder,re as default,I as table};
//# sourceMappingURL=Table.stories-9efec55a.js.map
