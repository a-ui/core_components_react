var T=Object.defineProperty;var r=(t,e)=>T(t,"name",{value:e,configurable:!0});import{R as B,r as A}from"./index-d23035ce.js";import{c as I}from"./dom.utils-1db2b487.js";import{B as W}from"./Button-ac0f35d8.js";import{I as j}from"./Icon-53ae04fc.js";import{a as f,j as a}from"./jsx-runtime-bb315772.js";import{Q as C}from"./stories.settings-7ac24d87.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./layout.settings-9902fce9.js";import"./render.utils-a39af6c0.js";import"./Avatar-285c67d7.js";import"./settings-9292fabe.js";import"./Spinner-cce42641.js";import"./log.utils-f56af116.js";const P=1048576;function S(t,e){var l,n;return!e||e==="*"||e===t.type||(e==null?void 0:e.includes("*"))&&!!((l=e==null?void 0:e.split("/"))!=null&&l[0])&&t.type.startsWith((n=e==null?void 0:e.split("/"))==null?void 0:n[0])}r(S,"hasValidFormat");function z(t,e){return!e||t.size<=e*P}r(z,"hasValidSize");function w(t,e,l){return t.map(n=>({validFormat:S(n,e),validSize:z(n,l)}))}r(w,"areFilesValid");function q({file:t,acceptedFormat:e,maxSize:l,onDelete:n,formatErrorLabel:u,deleteAriaLabel:m,sizeErrorLabel:y}){const i=S(t,e),p=z(t,l);return f("li",{children:[a(j,{name:i&&p?"common-file-empty":"alert-triangle"}),a("span",{className:"m-upload__filename",children:t.name}),!i&&a("span",{className:"m-upload__error",children:u}),!p&&a("span",{className:"m-upload__error",children:y}),n&&a("div",{className:"m-upload__delete",children:a(W,{ariaLabel:m,addOn:{type:"icon",iconProps:{name:"remove"}},emphasis:"low",theme:"danger",size:"small",onClick:()=>n(t)})})]},t.name)}r(q,"UploadFile");function g({acceptedFormat:t,deleteAriaLabel:e,disabled:l,files:n,formatErrorLabel:u,id:m,label:y,maxSize:i,maxSizeLabel:p,multiple:V,onChange:c,onDelete:b,sizeErrorLabel:O,qa:L}){const h=B.useRef(null),D=r(o=>{b&&b(n==null?void 0:n.filter(s=>(s==null?void 0:s.name)!==o.name)),h.current&&(h.current.value="")},"handleDelete"),R=r(o=>{var s,x,v,_,M;if(V){const d=(s=o.target)!=null&&s.files?[...n,...Array.from(o.target.files)].filter((k,E,N)=>N.findIndex(U=>U.name===k.name)===E):[];c&&c(d,w(d,t,i))}else{const d=(v=(x=o.target)==null?void 0:x.files)!=null&&v[0]?[(M=(_=o.target)==null?void 0:_.files)==null?void 0:M[0]]:[];c&&c(d,w(d,t,i))}},"handleChange");return f("div",{className:I({"m-upload":!0,"is-disabled":!!l}),"data-qa":L,children:[a("div",{className:"m-upload__inner",children:f("div",{className:"m-upload__dropzone",children:[a("input",{ref:h,id:m,type:"file",multiple:V,onChange:R,accept:t,className:"m-upload__input",disabled:l}),a("div",{className:"m-upload__content",children:a("label",{htmlFor:m,className:"m-upload__message u-margin-bottom",children:y})})]})}),i&&f("small",{className:"m-upload__description",children:[p," ",i,"MB"]}),a("ul",{className:"m-upload__files",children:n==null?void 0:n.map(o=>a(q,{file:o,deleteAriaLabel:e,formatErrorLabel:u,sizeErrorLabel:O,onDelete:b&&D,maxSize:i,acceptedFormat:t},o==null?void 0:o.name))})]})}r(g,"Upload");g.defaultProps={label:"Sleep een bestand hier of klik om te bladeren",maxSize:10,multiple:!0,disabled:!1,acceptedFormat:"*",files:[],maxSizeLabel:"Maximale bestandsgrootte:",formatErrorLabel:"Dit bestandsformaat is niet toegestaan.",sizeErrorLabel:"Maximale bestandsgrootte overschreden.",deleteAriaLabel:"Verwijder bestand"};const oe={title:"React/Molecules/Upload",component:g,parameters:{storySource:{source:`import Upload from './Upload';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

export default {
  title: 'React/Molecules/Upload',
  component: Upload,

  parameters: {
    docs: {
      description: {
        component: 'Whenever a user needs to upload one or more files, always use our custom upload component.'
      }
    }
  },
  argTypes: {
    files: {
      control: null,
      table: {
        type: { summary: 'File[]' },
        defaultValue: { summary: '[]' }
      },
      defaultValue: [],
      description: 'List of files displayed under the \`Upload\` component.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: 'aui-upload-stories',
      description: "ID on input element. Make sure it's unique across all \`Upload\` components."
    },
    label: {
      control: { type: 'text' },
      description: 'Override default text of upload zone. This can be rich text (ReactElement).',
      defaultValue: 'Sleep een bestand hier of klik om te bladeren',
      table: {
        type: { summary: 'ReactElement | string' },
        defaultValue: { summary: 'Sleep een bestand hier of klik om te bladeren' }
      }
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Sets \`multiple\` attribute on \`input\`.',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    acceptedFormat: {
      control: { type: 'text' },
      description:
        'Allows to set accepted format. Should be MIME type or \`.ext\`, accepts wildcard when using MIME types, like \`image/*\`.',
      defaultValue: '*',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '*' }
      }
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Sets maximum allowed size for single file (in MB). 10MB by default.',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      }
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Handler for change of uploaded files. Fires on native file input user action. Will pass array of all unique files. When \`multiple=false\` it will return an array with a single file. The second argument is an array of validations for the current files (\`{validSize: boolean, validFormat: boolean}[]\`).'
    },
    onDelete: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onDelete',
      description:
        'Handler for the deletion of uploaded files. Will pass the filtered files in argument (without the deleted one).'
    },
    maxSizeLabel: {
      control: { type: 'text' },
      description: 'Override default text of the maximum size notice.',
      defaultValue: 'Maximale bestandsgrootte:',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte:' }
      }
    },
    formatErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the format error notice.',
      defaultValue: 'Dit bestandsformaat is niet toegestaan.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Dit bestandsformaat is niet toegestaan.' }
      }
    },
    sizeErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the size error notice.',
      defaultValue: 'Maximale bestandsgrootte overschreden.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte overschreden.' }
      }
    },
    deleteAriaLabel: {
      control: { type: 'text' },
      description: 'Override the \`aria-label\` attribute on the file removal button.',
      defaultValue: 'Verwijder bestand',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Verwijder bestand' }
      }
    },
    qa: QA_PROP_STORY
  }
};
const Template = (args) => {
  const [files, setFiles] = useState([]);
  return (
    <Upload
      {...args}
      files={files}
      onChange={(f, v) => {
        args.onChange(f, v);
        setFiles(f);
      }}
      onDelete={(f) => {
        args.onDelete(f);
        setFiles(f);
      }}
    />
  );
};

export const upload = Template.bind({});
`,locationsMap:{upload:{startLoc:{col:17,line:137},endLoc:{col:1,line:153},startBody:{col:17,line:137},endBody:{col:1,line:153}}}},docs:{description:{component:"Whenever a user needs to upload one or more files, always use our custom upload component."}}},argTypes:{files:{control:null,table:{type:{summary:"File[]"},defaultValue:{summary:"[]"}},defaultValue:[],description:"List of files displayed under the `Upload` component."},id:{control:{type:"text"},table:{type:{summary:"string"}},defaultValue:"aui-upload-stories",description:"ID on input element. Make sure it's unique across all `Upload` components."},label:{control:{type:"text"},description:"Override default text of upload zone. This can be rich text (ReactElement).",defaultValue:"Sleep een bestand hier of klik om te bladeren",table:{type:{summary:"ReactElement | string"},defaultValue:{summary:"Sleep een bestand hier of klik om te bladeren"}}},multiple:{control:{type:"boolean"},description:"Sets `multiple` attribute on `input`.",defaultValue:!0,table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},disabled:{control:{type:"boolean"},description:"Disables the input.",defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},acceptedFormat:{control:{type:"text"},description:"Allows to set accepted format. Should be MIME type or `.ext`, accepts wildcard when using MIME types, like `image/*`.",defaultValue:"*",table:{type:{summary:"string"},defaultValue:{summary:"*"}}},maxSize:{control:{type:"number"},description:"Sets maximum allowed size for single file (in MB). 10MB by default.",defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:10}}},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Handler for change of uploaded files. Fires on native file input user action. Will pass array of all unique files. When `multiple=false` it will return an array with a single file. The second argument is an array of validations for the current files (`{validSize: boolean, validFormat: boolean}[]`)."},onDelete:{control:{type:"function"},table:{type:{summary:"function"}},action:"onDelete",description:"Handler for the deletion of uploaded files. Will pass the filtered files in argument (without the deleted one)."},maxSizeLabel:{control:{type:"text"},description:"Override default text of the maximum size notice.",defaultValue:"Maximale bestandsgrootte:",table:{type:{summary:"string"},defaultValue:{summary:"Maximale bestandsgrootte:"}}},formatErrorLabel:{control:{type:"text"},description:"Override default text of the format error notice.",defaultValue:"Dit bestandsformaat is niet toegestaan.",table:{type:{summary:"string"},defaultValue:{summary:"Dit bestandsformaat is niet toegestaan."}}},sizeErrorLabel:{control:{type:"text"},description:"Override default text of the size error notice.",defaultValue:"Maximale bestandsgrootte overschreden.",table:{type:{summary:"string"},defaultValue:{summary:"Maximale bestandsgrootte overschreden."}}},deleteAriaLabel:{control:{type:"text"},description:"Override the `aria-label` attribute on the file removal button.",defaultValue:"Verwijder bestand",table:{type:{summary:"string"},defaultValue:{summary:"Verwijder bestand"}}},qa:C}},H=r(t=>{const[e,l]=A.exports.useState([]);return a(g,{...t,files:e,onChange:(n,u)=>{t.onChange(n,u),l(n)},onDelete:n=>{t.onDelete(n),l(n)}})},"Template"),re=H.bind({}),ie=["upload"];export{ie as __namedExportsOrder,oe as default,re as upload};
//# sourceMappingURL=Upload.stories-edf4ec5e.js.map
