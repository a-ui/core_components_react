var B=Object.defineProperty;var l=(s,t)=>B(s,"name",{value:t,configurable:!0});import{R as h,r as N}from"./index-d23035ce.js";import{Q as z}from"./stories.settings-7ac24d87.js";import{g as F,a as Q,b as j,l as q}from"./math.utils-fe4ecbcc.js";import{I as C}from"./Icon-884564ea.js";import{j as m,a as b}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-7cdc5a0c.js";import"./dom.utils-1db2b487.js";function W({start:s,end:t,range:n,min:i,getPositionFromValue:o}){return m("div",{className:"a-range-slider__bar",style:{left:n?o(s)+"px":"",width:n&&t?o(t+i-s)+"px":o(s)+"px"}})}l(W,"RangeSliderBar");function D({value:s,min:t,max:n,step:i,direction:o,sliderPos:p,onUpdate:u,getPositionFromValue:r,ariaLabel:f}){const[T,L]=h.useState(0),v=h.useRef(null),S=5;h.useEffect(()=>{p&&L(p)},[o,p]);const w=l(e=>{e.stopPropagation(),e.preventDefault()},"handleNoop"),E=l(()=>{document.addEventListener("mousemove",g),document.addEventListener("mouseup",x)},"handleStart"),g=l(e=>{e.type==="mousemove"?w(e):e.stopPropagation();const a=y(e);return u&&u(a)},"handleDrag"),x=l(e=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",x);const a=y(e);return u&&u(a)},"handleEnd"),y=l(e=>{const a="clientX";let V;e.type!=="touchmove"?V=e[a]:V=e.touches[0][a];const R=Q(V,S,o);return F(R,T,i,n,t)},"position"),M=l(e=>{let a=s;e.key==="ArrowUp"||e.key==="ArrowRight"?(e.preventDefault(),a+=i):e.key==="ArrowDown"||e.key==="ArrowLeft"?(e.preventDefault(),a-=i):e.key==="End"?(e.preventDefault(),a=n):e.key==="Home"&&(e.preventDefault(),a=t),a>=t&&a<=n&&u(a)},"handleKeyPress");return m("div",{className:"a-range-slider__handle",tabIndex:0,style:{left:r(s)+"px"},onMouseDown:E,onTouchEnd:w,onTouchMove:g,onKeyDown:M,role:"slider","aria-orientation":"horizontal","aria-valuemax":n,"aria-valuemin":t,"aria-valuenow":s,"aria-label":f,ref:v})}l(D,"RangeSliderHandle");function c({label:s,start:t=c.defaultProps.start,end:n,min:i=c.defaultProps.min,max:o=c.defaultProps.max,step:p=c.defaultProps.step,unit:u=c.defaultProps.unit,minRange:r=c.defaultProps.minRange,range:f=c.defaultProps.range,labelStart:T,labelEnd:L,iconStart:v,iconEnd:S,ariaLabelMin:w,ariaLabelMax:E,tickMarks:g,qa:x,onChange:y}){const[M,e]=h.useState(0),[a,V]=h.useState(0),[R,H]=h.useState(0),_=h.useRef(null);h.useEffect(()=>(window.addEventListener("resize",k),k(),()=>window.removeEventListener("resize",k)),[]);const k=l(()=>{if(_.current){const d=_.current.offsetWidth,A=_.current;if(A&&A instanceof HTMLElement){const $=A.getBoundingClientRect().left;H($)}e(d),V(d)}},"handleResize"),I=l(d=>{if(!(f&&n&&r&&n-d<r))return y&&y(d,f?n:void 0)},"handleUpdateStart"),O=l(d=>{if(!(t&&r&&d-t<r))return y&&y(t,d)},"handleUpdateEnd"),P=l(d=>q(d,i,o,M),"getPositionFromValue");return b("div",{className:"a-range-slider","data-qa":x,ref:_,children:[b("div",{className:"a-range-slider__labels",children:[m("div",{className:"a-range-slider__label",children:s}),b("div",{className:"a-range-slider__label",children:[f?`${t} - ${n}`:`${t}`,` ${u}`]})]}),b("div",{className:"a-range-slider__inner",children:[g&&m("div",{className:"a-range-slider__tickmarks",children:j(i,o,p).map(d=>m("div",{className:"a-range-slider__tickmark"},d))}),m(W,{start:t,end:n,getPositionFromValue:P,range:!!f,min:i}),m(D,{value:t,onUpdate:I,min:i,max:f&&r?o-r:o,step:p,sliderPos:a,direction:R,getPositionFromValue:P,ariaLabel:w}),f&&typeof r=="number"&&typeof n=="number"&&m(D,{value:n,onUpdate:O,min:i+r,max:o,step:p,sliderPos:a,direction:R,getPositionFromValue:P,ariaLabel:E})]}),b("div",{className:"a-range-slider__descriptions",children:[b("div",{className:"a-range-slider__description small",children:[T,v?m(C,{name:v}):null]}),b("div",{className:"a-range-slider__description small",children:[L,S?m(C,{name:S}):null]})]})]})}l(c,"RangeSlider");c.defaultProps={start:0,min:0,max:10,step:1,unit:"",minRange:1,range:!1,ariaLabelMin:"Minimum",ariaLabelMax:"Maximimum"};const ae={parameters:{storySource:{source:`import { useState } from 'react';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import RangeSlider from './RangeSlider';


//   tickMarks,
export default {
  title: 'React/Atoms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Price',
      table: {
        type: { summary: 'string' }
      },
      description: 'A label that displays above the \`RangeSlider\`. '
    },
    start: {
      control: false,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description:
        'The \`start\` prop sets the value for the left handle if the \`range\` prop is set to \`true\`. If the \`range\` prop is set to \`false\`, the \`start\` prop sets the starting value of the single handle instead.'
    },
    end: {
      control: false,
      table: {
        type: { summary: 'number' },
      },
      description: 'The \`end\` prop sets the value for the right handle if the \`range\` prop is set to \`true\`.'
    },
    min: {
      control: { type: 'number' },
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'The \`min\` prop controls the minimum value for the handle(s) on a \`RangeSlider\`.'
    },
    max: {
      control: { type: 'number' },
      defaultValue: 20,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      },
      description: 'The \`max\` prop controls the maximum value for the handle(s) on a \`RangeSlider\`.'
    },
    step: {
      control: { type: 'number' },
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description: 'The \`step\` prop controls with what increment a handle can be increased or decreased.'
    },
    unit: {
      control: { type: 'text' },
      defaultValue: '$',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The \`unit\` is a a suffix added after the numeric value(s).'
    },
    range: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Setting \`range\` to \`true\` will add a second handle on the slider.'
    },
    minRange: {
      control: { type: 'number' },
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description:
        'The \`minRange\` controls the minimum difference in values between \`start\` and \`end\`. For instance, a minRange of 2 means that \`end\` will always have a value of at least \`start + 2\`. Works only if \`range\` is \`true\`.'
    },
    labelStart: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label at the start of the slider.'
    },
    labelEnd: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label at the end of the slider.'
    },
    iconStart: {
      control: { type: 'select' },
      options: ['', 'ai-accounting-bill', 'volume-control-off', 'arrow-left-1'],
      defaultValue: 'ai-accounting-bill',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Icon at the start of the slider.'
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['', 'ai-accounting-bills', 'volume-control-full', 'arrow-right-1'],
      defaultValue: 'ai-accounting-bills',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Icon at the end of the slider.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the start or end value is updated. The first parameter of this function is the new \`start\` value, the second parameter is the new \`end\` value (can be \`undefined\` if range is set to \`false\`).'
    },
    ariaLabelMin: {
      control: { type: 'text' },
      defaultValue: 'Minimum',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Minimum' }
      },
      description: 'Aria-label on the \`start\` handle of the slider.'
    },
    ariaLabelMax: {
      control: { type: 'text' },
      defaultValue: 'Maximum',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximum' }
      },
      description: 'Aria-label on the \`end\` handle of the slider.'
    },
    tickMarks: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Show tickmarks on the \`RangeSlider\`.'
    },
    qa: QA_PROP_STORY
  }
};



const Template = ({ ...args }) => {
  const [handleStartValue, setHandleStartValue] = useState(5);
  const [handleEndValue, setHandleEndValue] = useState(12);

  const handleChange = (start, end) => {
    setHandleStartValue(start);
    setHandleEndValue(end);
  };

  return <RangeSlider
    {...args}
    onChange={(start, end) => {
      handleChange(start, end);
      args.onChange(start,end);
    }}
    start={handleStartValue}
    end={handleEndValue}
  />
};

export const rangeSlider = Template.bind({});
`,locationsMap:{"range-slider":{startLoc:{col:17,line:170},endLoc:{col:1,line:188},startBody:{col:17,line:170},endBody:{col:1,line:188}}}}},title:"React/Atoms/RangeSlider",component:c,argTypes:{label:{control:{type:"text"},defaultValue:"Price",table:{type:{summary:"string"}},description:"A label that displays above the `RangeSlider`. "},start:{control:!1,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `start` prop sets the value for the left handle if the `range` prop is set to `true`. If the `range` prop is set to `false`, the `start` prop sets the starting value of the single handle instead."},end:{control:!1,table:{type:{summary:"number"}},description:"The `end` prop sets the value for the right handle if the `range` prop is set to `true`."},min:{control:{type:"number"},defaultValue:0,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `min` prop controls the minimum value for the handle(s) on a `RangeSlider`."},max:{control:{type:"number"},defaultValue:20,table:{type:{summary:"number"},defaultValue:{summary:10}},description:"The `max` prop controls the maximum value for the handle(s) on a `RangeSlider`."},step:{control:{type:"number"},defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `step` prop controls with what increment a handle can be increased or decreased."},unit:{control:{type:"text"},defaultValue:"$",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `unit` is a a suffix added after the numeric value(s)."},range:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Setting `range` to `true` will add a second handle on the slider."},minRange:{control:{type:"number"},defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `minRange` controls the minimum difference in values between `start` and `end`. For instance, a minRange of 2 means that `end` will always have a value of at least `start + 2`. Works only if `range` is `true`."},labelStart:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the start of the slider."},labelEnd:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the end of the slider."},iconStart:{control:{type:"select"},options:["","ai-accounting-bill","volume-control-off","arrow-left-1"],defaultValue:"ai-accounting-bill",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the start of the slider."},iconEnd:{control:{type:"select"},options:["","ai-accounting-bills","volume-control-full","arrow-right-1"],defaultValue:"ai-accounting-bills",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the end of the slider."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the start or end value is updated. The first parameter of this function is the new `start` value, the second parameter is the new `end` value (can be `undefined` if range is set to `false`)."},ariaLabelMin:{control:{type:"text"},defaultValue:"Minimum",table:{type:{summary:"string"},defaultValue:{summary:"Minimum"}},description:"Aria-label on the `start` handle of the slider."},ariaLabelMax:{control:{type:"text"},defaultValue:"Maximum",table:{type:{summary:"string"},defaultValue:{summary:"Maximum"}},description:"Aria-label on the `end` handle of the slider."},tickMarks:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Show tickmarks on the `RangeSlider`."},qa:z}},Y=l(({...s})=>{const[t,n]=N.exports.useState(5),[i,o]=N.exports.useState(12),p=l((u,r)=>{n(u),o(r)},"handleChange");return m(c,{...s,onChange:(u,r)=>{p(u,r),s.onChange(u,r)},start:t,end:i})},"Template"),le=Y.bind({}),re=["rangeSlider"];export{re as __namedExportsOrder,ae as default,le as rangeSlider};
//# sourceMappingURL=RangeSlider.stories-ea6df752.js.map
