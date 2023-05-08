var O=Object.defineProperty;var y=(a,h)=>O(a,"name",{value:h,configurable:!0});import{c as f}from"./dom.utils-bd8c7a66.js";import{a as S,b as V}from"./settings-b450e1f6.js";import{w as A}from"./render.utils-ff559992.js";import{C as x}from"./Checkbox-d31d0d1c.js";import{j as n,a as T}from"./jsx-runtime-bb315772.js";import{B as P}from"./Button-f7429449.js";import{u as W}from"./custom.hooks-17828743.js";import{Q as M}from"./stories.settings-7ac24d87.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./layout.settings-9902fce9.js";import"./Avatar-2e303d21.js";import"./Icon-3790c0ed.js";import"./log.utils-f56af116.js";import"./Spinner-17b794e8.js";function z({columns:a,selectable:h,selected:p=[],rows:s=[],onSelectAll:c,sort:l,small:g,sortDirection:m,tableId:b,onSortClick:d,actions:t}){var o;const i=p.length&&p.sort().join(",")===s.map(e=>e.id).sort().join(",");return n("thead",{children:T("tr",{children:[h?n("th",{children:n(x,{name:`aui-table-checkbox-${b}-all`,id:`aui-table-checkbox-${b}-all`,checked:!!i,indeterminate:!!p.length&&!i,onChange:c,label:"selecteren",showLabel:!1})}):null,a.map(e=>{const r=f({"u-text-right":!!e.alignRight,"is-collapsed":!!e.sortable,"is-condensed":!!g}),u=l===(e==null?void 0:e.value)&&m===S,w=l===(e==null?void 0:e.value)&&m===V,v=f({"a-table__sort-button":!0,"a-table__sort-button--unsorted":l!==(e==null?void 0:e.value),"a-table__sort-button--sorted-asc":u,"a-table__sort-button--sorted-desc":w});return n("th",{className:r,...e.sortable&&(u||w)&&{"aria-sort":u?S:V},...e.sortable&&{"aria-live":"polite"},children:A(e==null?void 0:e.label,n("button",{onClick:C=>d&&d(e.value),className:v}),!!(e!=null&&e.sortable))},e==null?void 0:e.value)}),(o=t==null?void 0:t.buttons)!=null&&o.length?n("th",{children:t==null?void 0:t.label}):null]})})}y(z,"TableHeader");function $({actions:a,columns:h,small:p,tableId:s,selectable:c,onSelect:l,selected:g=[],rows:m}){const b=f({"is-clickable":!!c}),d=y((t,i)=>{var e,r;const o=t.target;return o!=null&&o.classList.contains("a-button")||(r=(e=o.parentElement)==null?void 0:e.parentElement)!=null&&r.classList.contains("a-button")?!1:(t.preventDefault(),t.stopPropagation(),c&&l&&l(i.id))},"selectRow");return n("tbody",{children:m.map(t=>{var i,o;return T("tr",{onClick:e=>d(e,t),className:b,children:[c?n("td",{children:n(x,{name:`aui-table-checkbox-${s}-${t.id}`,id:`aui-table-checkbox-row-${s}-${t.id}`,checked:(g||[]).includes(t.id),onChange:e=>d(e,t),label:t.checkboxLabel,showLabel:!1})}):null,h.map(e=>{const r=f({"u-text-right":!!e.alignRight,"u-text-bold":e.dataType==="primary",small:e.dataType==="secondary","is-condensed":!!p});return n("td",{className:r,children:e.transformFunction?e.transformFunction(t[e==null?void 0:e.value]||null):t[e==null?void 0:e.value]||null},e==null?void 0:e.value)}),A(((i=a==null?void 0:a.buttons)==null?void 0:i.map(e=>n(P,{onClick:r=>(e==null?void 0:e.onActionClick)&&(e==null?void 0:e.onActionClick(r,t.id)),...e,id:`aui-table-action-${s}-${e==null?void 0:e.id}-${t.id}`,size:(e==null?void 0:e.size)||"small"},`aui-table-action-${s}-${e==null?void 0:e.id}-${t.id}`)))||null,n("td",{}),!!((o=a==null?void 0:a.buttons)!=null&&o.length))]},t==null?void 0:t.id)})})}y($,"TableBody");function k({id:a,sort:h,sortDirection:p,rows:s,columns:c,qa:l,striped:g,small:m,open:b,selectable:d,selected:t,onSelect:i,onSelectAll:o,onSortClick:e,actions:r,responsive:u,fixedColumnRight:w,fixedColumnLeft:v}){const[C,L,E,_]=W(),N=f({"a-table":!0,"a-table--striped":!!g,"a-table--open":!!b}),j=f({"a-table-responsive-wrapper":!!u,"has-shadow-left":!!u&&!E,"has-shadow-right":!!u&&!_,"has-first-column-fixed":!!v,"has-last-column-fixed":!!w}),R=T("table",{id:a,className:N,"data-qa":l,children:[n(z,{tableId:a,small:m,selectable:d,selected:t,columns:c,sort:h,rows:s,onSortClick:e,sortDirection:p,onSelectAll:o,actions:r}),n($,{tableId:a,small:m,selectable:d,selected:t,columns:c,rows:s,onSelect:i,actions:r})]});return u?n("div",{className:j,"data-qa":l,children:n("div",{ref:C,onScroll:L,className:"a-table-scrollable-wrapper",children:R})}):R}y(k,"Table");k.defaultProps={id:"aui-table",columns:[],rows:[],responsive:!0};const q=[{label:"Snack",value:"snack",sortable:!0,dataType:"primary"},{label:"Description",value:"description",sortable:!0,dataType:"secondary"},{label:"Stock",value:"stock",alignRight:!0,dataType:"secondary"},{label:"Price",value:"price",alignRight:!0}],D=[{id:"0",snack:"Ice cream",description:"Tasty, frozen treat for a hot day",stock:160,price:"€2,49"},{id:"1",snack:"Chips",description:"Salty, crunchy goodness",stock:48,price:"€1,99"},{id:"2",snack:"Candy bar",description:"Chewy and quite nutty",stock:240,price:"€1,49"}],se={title:"React/Atoms/Table",component:k,parameters:{storySource:{source:`import Table from './Table';
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
  args: {
    striped: false,
    selectable: false,
    open: false,
    small: false,
    sort: 'description',
    sortDirection: 'descending',
    defaultValue: false,
    fixedColumnRight: false,
    fixedColumnLeft: false,
    id: 'example-table'
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
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Controls whether the table should have zebra striping, which equips uneven data rows with a light grey background.'
    },
    selectable: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The header and data rows can also be configured with leading checkbox components, which allow for the selection of one, multiple or all rows. When using a table with selectable rows, the checkboxLabel property should be added to the rows for screen reader users. '
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
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'An open table removes the most outward borders of the table, providing a slightly lighter visual style. This does not apply for responsive tables.'
    },
    small: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'The theme table with reduced padding can only be used in a setting where much data needs to be displayed in a limited space, such as a technical dashboard.'
    },
    sort: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Current sort of the \`Table\`, this prop expects a column \`value\`. Will render the sortable header accordingly.'
    },
    sortDirection: {
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
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description:
        'Controls whether the \`Table\` component should be responsive. If set to \`true\` an horizontal scrollbar is added to the table when not enough space is available.'
    },
    fixedColumnRight: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'When a table is responsive, a column can be frozen to the right side.'
    },
    fixedColumnLeft: {
      control: { type: 'boolean' },
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
        'Table cells can also contain buttons, placed at the far right of a data row. The \`actions\` prop expect an optional \`label\` as column header and an array of \`Button\` properties. One extra prop have been added: \`onActionClick\` which append the row \`id\` as second argument to the normal button \`onClick\` behavior. Use \`children\` to set the content of the buttons.'
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
      { children: 'Kopen', id: 'buy' },
      {
        children: 'Verwijder',
        id: 'delete',
        theme: 'danger',
        iconLeft: 'close'
      }
    ]
  }
};
`,locationsMap:{table:{startLoc:{col:17,line:231},endLoc:{col:53,line:231},startBody:{col:17,line:231},endBody:{col:53,line:231}}}},docs:{description:{component:"Use the table component to make information easier to scan, compare and sort for users. Tables are meant for: showing sequential or structured data and helping users find specific information within a large data set."}}},args:{striped:!1,selectable:!1,open:!1,small:!1,sort:"description",sortDirection:"descending",defaultValue:!1,fixedColumnRight:!1,fixedColumnLeft:!1,id:"example-table"},argTypes:{rows:{control:{type:"object"},table:{type:{summary:"array"},defaultValue:{summary:"[]"}},description:"The rows parameter contains the data for the table rows. Every row should have an UNIQUE `id`. The row data values are mapped to the `value` fields of columns. A row value can be any ReactNode (string, ...)."},columns:{control:{type:"object"},table:{type:{summary:"object"},defaultValue:{summary:"[]"}},description:"The columns parameter contains the data for the table columns. The `value` fields are used to read the data from the rows. All the fields are: `label`, `value`, `alignRight`, `dataType`, `sortable` and `transformFunction`. The transform function can be used to transform all the values of a column and has signature `(ReactNode) => ReactNode`."},striped:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Controls whether the table should have zebra striping, which equips uneven data rows with a light grey background."},selectable:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The header and data rows can also be configured with leading checkbox components, which allow for the selection of one, multiple or all rows. When using a table with selectable rows, the checkboxLabel property should be added to the rows for screen reader users. "},selected:{control:{type:"object"},if:{arg:"selectable",truthy:!0},table:{type:{summary:"array"},defaultValue:{summary:[]}},description:"Array of row `ids` to indicate which checkboxes in the `Table` have the checked state."},open:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"An open table removes the most outward borders of the table, providing a slightly lighter visual style. This does not apply for responsive tables."},small:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"The theme table with reduced padding can only be used in a setting where much data needs to be displayed in a limited space, such as a technical dashboard."},sort:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Current sort of the `Table`, this prop expects a column `value`. Will render the sortable header accordingly."},sortDirection:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Current sort direction of the `Table`, `ascending` or `descending`. Will render the sortable header accordingly."},responsive:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},description:"Controls whether the `Table` component should be responsive. If set to `true` an horizontal scrollbar is added to the table when not enough space is available."},fixedColumnRight:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"When a table is responsive, a column can be frozen to the right side."},fixedColumnLeft:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"When a table is responsive, a column can be frozen to the left side."},onSelect:{control:{type:"function"},table:{type:{summary:"function"}},description:"Function that is triggered when a row is selected via a checkbox/row click. The first argument is the `id` of the row."},onSelectAll:{control:{type:"function"},table:{type:{summary:"function"}},description:"Function that is triggered when the select all checkbox in the header is clicked."},onSortClick:{control:{type:"function"},table:{type:{summary:"function"}},description:"Function that is triggered when a sortable header button is clicked. The first argument is of type `MouseEvent` and the second one is the column `value`."},id:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-table"}},description:"The `id` prop allows to set the `id` attribute on the rendered HTML table component. It is used to uniquely identify checkboxes and buttons within a"},actions:{control:{type:"object"},table:{type:{summary:"object"},defaultValue:{summary:"{}"}},description:"Table cells can also contain buttons, placed at the far right of a data row. The `actions` prop expect an optional `label` as column header and an array of `Button` properties. One extra prop have been added: `onActionClick` which append the row `id` as second argument to the normal button `onClick` behavior. Use `children` to set the content of the buttons."},qa:M}},U=y(({...a})=>n(k,{...a}),"Template"),F=U.bind({});F.args={rows:D,columns:q,selected:["0","1"],actions:{label:"Acties",buttons:[{children:"Kopen",id:"buy"},{children:"Verwijder",id:"delete",theme:"danger",iconLeft:"close"}]}};const le=["table"];export{le as __namedExportsOrder,se as default,F as table};
//# sourceMappingURL=Table.stories-585ae7d9.js.map
