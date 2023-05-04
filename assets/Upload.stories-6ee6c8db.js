var k=Object.defineProperty;var m=(e,o)=>k(e,"name",{value:o,configurable:!0});import{R as N,r as U}from"./index-d23035ce.js";import{c as T}from"./dom.utils-1db2b487.js";import{h as A,a as B,I,b as S}from"./Icon-fde9928b.js";import{B as j}from"./Button-ce0c0ac0.js";import{a as f,j as a}from"./jsx-runtime-bb315772.js";import{Q as C}from"./stories.settings-7ac24d87.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-dbf1bcd4.js";import"./log.utils-f56af116.js";import"./layout.settings-9902fce9.js";import"./render.utils-5d811915.js";import"./Avatar-a0dce5e3.js";import"./Spinner-04054bfe.js";function P({file:e,acceptedFormat:o,maxSize:r,onDelete:t,formatErrorLabel:d,deleteAriaLabel:i,sizeErrorLabel:b}){const l=A(e,o),p=B(e,r);return f("li",{children:[a(I,{name:l&&p?"common-file-empty":"alert-triangle"}),a("span",{className:"m-upload__filename",children:e.name}),!l&&a("span",{className:"m-upload__error",children:d}),!p&&a("span",{className:"m-upload__error",children:b}),t&&a("div",{className:"m-upload__delete",children:a(j,{ariaLabel:i,addOn:{type:"icon",iconProps:{name:"remove"}},emphasis:"low",theme:"danger",size:"small",onClick:()=>t(e)})})]},e.name)}m(P,"UploadFile");function g({acceptedFormat:e,deleteAriaLabel:o,disabled:r,files:t,formatErrorLabel:d,id:i,label:b,maxSize:l,maxSizeLabel:p,multiple:x,onChange:c,onDelete:y,sizeErrorLabel:z,qa:L}){const h=N.useRef(null),w=m(n=>{y&&y(t==null?void 0:t.filter(s=>(s==null?void 0:s.name)!==n.name)),h.current&&(h.current.value="")},"handleDelete"),E=m(n=>{var s,v,_,V,M;if(x){const u=(s=n.target)!=null&&s.files?[...t,...Array.from(n.target.files)].filter((F,O,D)=>D.findIndex(R=>R.name===F.name)===O):[];c&&c(u,S(u,e,l))}else{const u=(_=(v=n.target)==null?void 0:v.files)!=null&&_[0]?[(M=(V=n.target)==null?void 0:V.files)==null?void 0:M[0]]:[];c&&c(u,S(u,e,l))}},"handleChange");return f("div",{className:T({"m-upload":!0,"is-disabled":!!r}),"data-qa":L,children:[a("div",{className:"m-upload__inner",children:f("div",{className:"m-upload__dropzone",children:[a("input",{ref:h,id:i,type:"file",multiple:x,onChange:E,accept:e,className:"m-upload__input",disabled:r,"aria-describedby":`${i}-description`}),a("div",{className:"m-upload__content",children:a("label",{htmlFor:i,className:"m-upload__message u-margin-bottom",children:b})})]})}),l&&f("small",{id:`${i}-description`,className:"m-upload__description",children:[p," ",l,"MB"]}),a("ul",{className:"m-upload__files",children:t==null?void 0:t.map(n=>a(P,{file:n,deleteAriaLabel:o,formatErrorLabel:d,sizeErrorLabel:z,onDelete:y&&w,maxSize:l,acceptedFormat:e},n==null?void 0:n.name))})]})}m(g,"Upload");g.defaultProps={label:"Sleep een bestand hier of klik om te bladeren",maxSize:10,multiple:!0,disabled:!1,acceptedFormat:"*",files:[],maxSizeLabel:"Maximale bestandsgrootte:",formatErrorLabel:"Dit bestandsformaat is niet toegestaan.",sizeErrorLabel:"Maximale bestandsgrootte overschreden.",deleteAriaLabel:"Verwijder bestand"};const le={title:"React/Molecules/Upload",component:g,parameters:{storySource:{source:`import Upload from './Upload';
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
  args: {
    files: [],
    id: 'aui-upload-stories',
    label: 'Sleep een bestand hier of klik om te bladeren',
    multiple: true,
    disabled: false,
    acceptedFormat: '*',
    maxSize: 1,
    maxSizeLabel: 'Maximale bestandsgrootte:',
    formatErrorLabel: 'Dit bestandsformaat is niet toegestaan.',
    sizeErrorLabel: 'Maximale bestandsgrootte overschreden.',
    deleteAriaLabel: 'Verwijder bestand'
  },
  argTypes: {
    files: {
      control: null,
      table: {
        type: { summary: 'File[]' },
        defaultValue: { summary: '[]' }
      },
      description: 'List of files displayed under the \`Upload\` component.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: "ID on input element. Make sure it's unique across all \`Upload\` components."
    },
    label: {
      control: { type: 'text' },
      description: 'Override default text of upload zone. This can be rich text (ReactElement).',
      table: {
        type: { summary: 'ReactElement | string' },
        defaultValue: { summary: 'Sleep een bestand hier of klik om te bladeren' }
      }
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Sets \`multiple\` attribute on \`input\`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    acceptedFormat: {
      control: { type: 'text' },
      description:
        'Allows to set accepted format. Should be MIME type or \`.ext\`, accepts wildcard when using MIME types, like \`image/*\`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '*' }
      }
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Sets maximum allowed size for single file (in MB). 10MB by default.',
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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte:' }
      }
    },
    formatErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the format error notice.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Dit bestandsformaat is niet toegestaan.' }
      }
    },
    sizeErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the size error notice.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte overschreden.' }
      }
    },
    deleteAriaLabel: {
      control: { type: 'text' },
      description: 'Override the \`aria-label\` attribute on the file removal button.',
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
`,locationsMap:{upload:{startLoc:{col:17,line:139},endLoc:{col:1,line:155},startBody:{col:17,line:139},endBody:{col:1,line:155}}}},docs:{description:{component:"Whenever a user needs to upload one or more files, always use our custom upload component."}}},args:{files:[],id:"aui-upload-stories",label:"Sleep een bestand hier of klik om te bladeren",multiple:!0,disabled:!1,acceptedFormat:"*",maxSize:1,maxSizeLabel:"Maximale bestandsgrootte:",formatErrorLabel:"Dit bestandsformaat is niet toegestaan.",sizeErrorLabel:"Maximale bestandsgrootte overschreden.",deleteAriaLabel:"Verwijder bestand"},argTypes:{files:{control:null,table:{type:{summary:"File[]"},defaultValue:{summary:"[]"}},description:"List of files displayed under the `Upload` component."},id:{control:{type:"text"},table:{type:{summary:"string"}},description:"ID on input element. Make sure it's unique across all `Upload` components."},label:{control:{type:"text"},description:"Override default text of upload zone. This can be rich text (ReactElement).",table:{type:{summary:"ReactElement | string"},defaultValue:{summary:"Sleep een bestand hier of klik om te bladeren"}}},multiple:{control:{type:"boolean"},description:"Sets `multiple` attribute on `input`.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},disabled:{control:{type:"boolean"},description:"Disables the input.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},acceptedFormat:{control:{type:"text"},description:"Allows to set accepted format. Should be MIME type or `.ext`, accepts wildcard when using MIME types, like `image/*`.",table:{type:{summary:"string"},defaultValue:{summary:"*"}}},maxSize:{control:{type:"number"},description:"Sets maximum allowed size for single file (in MB). 10MB by default.",table:{type:{summary:"number"},defaultValue:{summary:10}}},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Handler for change of uploaded files. Fires on native file input user action. Will pass array of all unique files. When `multiple=false` it will return an array with a single file. The second argument is an array of validations for the current files (`{validSize: boolean, validFormat: boolean}[]`)."},onDelete:{control:{type:"function"},table:{type:{summary:"function"}},action:"onDelete",description:"Handler for the deletion of uploaded files. Will pass the filtered files in argument (without the deleted one)."},maxSizeLabel:{control:{type:"text"},description:"Override default text of the maximum size notice.",table:{type:{summary:"string"},defaultValue:{summary:"Maximale bestandsgrootte:"}}},formatErrorLabel:{control:{type:"text"},description:"Override default text of the format error notice.",table:{type:{summary:"string"},defaultValue:{summary:"Dit bestandsformaat is niet toegestaan."}}},sizeErrorLabel:{control:{type:"text"},description:"Override default text of the size error notice.",table:{type:{summary:"string"},defaultValue:{summary:"Maximale bestandsgrootte overschreden."}}},deleteAriaLabel:{control:{type:"text"},description:"Override the `aria-label` attribute on the file removal button.",table:{type:{summary:"string"},defaultValue:{summary:"Verwijder bestand"}}},qa:C}},W=m(e=>{const[o,r]=U.exports.useState([]);return a(g,{...e,files:o,onChange:(t,d)=>{e.onChange(t,d),r(t)},onDelete:t=>{e.onDelete(t),r(t)}})},"Template"),oe=W.bind({}),re=["upload"];export{re as __namedExportsOrder,le as default,oe as upload};
//# sourceMappingURL=Upload.stories-6ee6c8db.js.map
