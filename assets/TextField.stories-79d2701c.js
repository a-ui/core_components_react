import{Q as r,j as s}from"./stories.settings-7040e2b8.js";import{T as t}from"./TextField-617d10c8.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./dom.utils-26b7419a.js";import"./layout.settings-4161ae17.js";import"./Icon-a1e4ec3d.js";import"./settings-ca81cf29.js";import"./log.utils-973a80c9.js";import"./input.renders-0071cf08.js";import"./Spinner-5b702f63.js";t.displayName="TextField";const T={title:"React/Atoms/Input/TextField",component:t,parameters:{docs:{description:{component:"Use an input field when the user needs to enter a string. Specifically when there is no clear selection of options, but a wide variety of possible answers. Two of the most common types of input fields are the single line text ‘input’, the multiline ‘textarea’."}}},args:{label:"Enter your name",description:"Description",type:"text",disabled:!1,readOnly:!1,inline:!1,required:!1,charCountText:"%count% / %max%",maxLengthBlocksInput:!1,addOn:{type:"icon",content:"phone",placement:"left"},id:"textfield-story"},argTypes:{label:{control:{type:"text"},table:{defaultValue:{summary:""},type:{summary:"string"}},description:"A `TextField` features at least a name label atop or to the left side of a container that itself contains an input. "},description:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `description` prop adds a description or hint text between the label and the `TextField`."},type:{control:{type:"select"},options:["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"],table:{type:{summary:"string"},defaultValue:{summary:"text"}},description:"Both in web and native apps it is very important to use the correct input type for your field. These input types allow better input control and validation."},value:{control:{type:"text"},table:{defaultValue:{summary:""},type:{summary:"string"}},description:"The value prop of the `TextField`. Setting it makes the component controlled; use it in combination with `onChange`."},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"When an input field is disabled, the container takes on a light grey fill, while the enclosed form inputs and add-ons are also rendered in lighter, muted greys without any interaction."},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Makes the `TextField` read-only."},inline:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"With the `inline` prop the `TextField` will not use the full width of the parent container."},required:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `required` prop adds a red asterisk to the `TextField` label and adds the required attribute to the HTML input field."},charCounter:{control:{type:"boolean"},table:{type:{summary:"boolean"}},description:"If `true`, the `charCounter` prop adds a character counter under the `TextField`."},maxLength:{control:{type:"number"},table:{type:{summary:"integer"}},description:"The `maxLength` attribute sets a character limitation for the value of the `TextField`. If the `charCounter` prop is not explicitly set to `false`, this will also add a character counter text under the `TextField`."},maxLengthBlocksInput:{control:{type:"boolean"},table:{type:{sunnary:"boolean"},defaultValue:{summary:!0}},description:"When the `maxLength` prop is set, the `maxLengthBlocksInput` prop blocks the user from typing more characters than the `maxLength` prop's value."},charCountText:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"%count% / %max%"}},description:"The text for the charCounter can be changed by providing a string which replaces placeholder text with their corresponding values. `%count%` equals the amount of characters typed in the textfield, `%max%` equals the `maxLength prop` and `%left%` is the difference between `maxLength` and the amount of characters typed."},state:{control:{type:"select"},options:["","error","success"],table:{type:{summary:"select"}},description:"Whenever an input field is associated with a success or error state, the border of the container will match to that thematic colour as well as display the message above the container together with an identifiable icon."},size:{control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"select"}},description:"The `size` prop allows different size variants (in height) of the `TextField`."},addOn:{control:{type:"object"},table:{type:{summary:"object"}},description:"Set this prop to add a leading or trailing add-on (icon or text) inside the `TextField`. Addons have the following properties: `type`, `content` and `placement`, where `type` is either `icon` or `text` and `placement` is either `left` or `right`."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the `TextField` value has changed. The first parameter of this function is of type `(React).ChangeEvent`."},onClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onClick",description:"Function triggered when the `TextField` is clicked. The first parameter of this function is of type `(React).MouseEvent`."},onBlur:{control:{type:"function"},table:{type:{summary:"function"}},action:"onBlur",description:"Function triggered when the `TextField` is blurred. The first parameter of this function is of type `(React).FocusEvent`."},onFocus:{control:{type:"function"},table:{type:{summary:"function"}},action:"onFocus",description:"Function triggered when the `TextField` is focused. The first parameter of this function is of type `(React).FocusEvent`."},onKeyDown:{control:{type:"function"},table:{type:{summary:"function"}},action:"onKeyDown",description:"Function triggered when the user presses a key inside the `TextField`. The first parameter of this function is of type `(React).KeyboardEvent`."},onKeyUp:{control:{type:"function"},table:{type:{summary:"function"}},action:"onKeyUp",description:"Function triggered when the user releases a key inside the `TextField`. The first parameter of this function is of type `(React).KeyboardEvent`."},qa:r,id:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `id` prop; set on the `input` HTML element."},name:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `name` prop; set on the `input` HTML element."}}},l=i=>s(t,{...i}),e=l.bind({});var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"args => <TextField {...args} />",...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const w=["textField"];export{w as __namedExportsOrder,T as default,e as textField};
//# sourceMappingURL=TextField.stories-79d2701c.js.map
