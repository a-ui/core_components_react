var B=Object.defineProperty;var r=(s,t)=>B(s,"name",{value:t,configurable:!0});import{R as h,r as N}from"./index-d23035ce.js";import{Q as z}from"./stories.settings-7ac24d87.js";import{g as F,a as Q,b as j,l as q}from"./math.utils-fe4ecbcc.js";import{I as C}from"./Icon-c6891515.js";import{j as m,a as b}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-4d2c475c.js";import"./dom.utils-1db2b487.js";import"./log.utils-f56af116.js";function U({start:s,end:t,range:n,min:i,getPositionFromValue:o}){return m("div",{className:"a-range-slider__bar",style:{left:n?o(s)+"px":"",width:n&&t?o(t+i-s)+"px":o(s)+"px"}})}r(U,"RangeSliderBar");function D({value:s,min:t,max:n,step:i,direction:o,sliderPos:p,onUpdate:u,getPositionFromValue:l,ariaLabel:f}){const[T,L]=h.useState(0),V=h.useRef(null),S=5;h.useEffect(()=>{p&&L(p)},[o,p]);const w=r(e=>{e.stopPropagation(),e.preventDefault()},"handleNoop"),E=r(()=>{document.addEventListener("mousemove",g),document.addEventListener("mouseup",x)},"handleStart"),g=r(e=>{e.type==="mousemove"?w(e):e.stopPropagation();const a=y(e);return u&&u(a)},"handleDrag"),x=r(e=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",x);const a=y(e);return u&&u(a)},"handleEnd"),y=r(e=>{const a="clientX";let v;e.type!=="touchmove"?v=e[a]:v=e.touches[0][a];const R=Q(v,S,o);return F(R,T,i,n,t)},"position"),M=r(e=>{let a=s;e.key==="ArrowUp"||e.key==="ArrowRight"?(e.preventDefault(),a+=i):e.key==="ArrowDown"||e.key==="ArrowLeft"?(e.preventDefault(),a-=i):e.key==="End"?(e.preventDefault(),a=n):e.key==="Home"&&(e.preventDefault(),a=t),a>=t&&a<=n&&u(a)},"handleKeyPress");return m("div",{className:"a-range-slider__handle",tabIndex:0,style:{left:l(s)+"px"},onMouseDown:E,onTouchEnd:w,onTouchMove:g,onKeyDown:M,role:"slider","aria-orientation":"horizontal","aria-valuemax":n,"aria-valuemin":t,"aria-valuenow":s,"aria-label":f,ref:V})}r(D,"RangeSliderHandle");function c({label:s,start:t=c.defaultProps.start,end:n,min:i=c.defaultProps.min,max:o=c.defaultProps.max,step:p=c.defaultProps.step,unit:u=c.defaultProps.unit,minRange:l=c.defaultProps.minRange,range:f=c.defaultProps.range,labelStart:T,labelEnd:L,iconStart:V,iconEnd:S,ariaLabelMin:w,ariaLabelMax:E,tickMarks:g,qa:x,onChange:y}){const[M,e]=h.useState(0),[a,v]=h.useState(0),[R,H]=h.useState(0),_=h.useRef(null);h.useEffect(()=>(window.addEventListener("resize",k),k(),()=>window.removeEventListener("resize",k)),[]);const k=r(()=>{if(_.current){const d=_.current.offsetWidth,A=_.current;if(A&&A instanceof HTMLElement){const $=A.getBoundingClientRect().left;H($)}e(d),v(d)}},"handleResize"),I=r(d=>{if(!(f&&n&&l&&n-d<l))return y&&y(d,f?n:void 0)},"handleUpdateStart"),O=r(d=>{if(!(t&&l&&d-t<l))return y&&y(t,d)},"handleUpdateEnd"),P=r(d=>q(d,i,o,M),"getPositionFromValue");return b("div",{className:"a-range-slider","data-qa":x,ref:_,children:[b("div",{className:"a-range-slider__labels",children:[m("div",{className:"a-range-slider__label",children:s}),b("div",{className:"a-range-slider__label",children:[f?`${t} - ${n}`:`${t}`,` ${u}`]})]}),b("div",{className:"a-range-slider__inner",children:[g&&m("div",{className:"a-range-slider__tickmarks",children:j(i,o,p).map(d=>m("div",{className:"a-range-slider__tickmark"},d))}),m(U,{start:t,end:n,getPositionFromValue:P,range:!!f,min:i}),m(D,{value:t,onUpdate:I,min:i,max:f&&l?o-l:o,step:p,sliderPos:a,direction:R,getPositionFromValue:P,ariaLabel:w}),f&&typeof l=="number"&&typeof n=="number"&&m(D,{value:n,onUpdate:O,min:i+l,max:o,step:p,sliderPos:a,direction:R,getPositionFromValue:P,ariaLabel:E})]}),b("div",{className:"a-range-slider__descriptions",children:[b("div",{className:"a-range-slider__description small",children:[T,V?m(C,{name:V}):null]}),b("div",{className:"a-range-slider__description small",children:[L,S?m(C,{name:S}):null]})]})]})}r(c,"RangeSlider");c.defaultProps={start:0,min:0,max:10,step:1,unit:"",minRange:1,range:!1,ariaLabelMin:"Minimum",ariaLabelMax:"Maximimum"};const re={title:"React/Atoms/RangeSlider",component:c,parameters:{storySource:{source:`import { useState } from 'react';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import RangeSlider from './RangeSlider';

//   tickMarks,
export default {
  title: 'React/Atoms/RangeSlider',
  component: RangeSlider,
  parameters: {
    docs: {
      description: {
        component:
          'Use the range slider component when the user needs to select a value or value range within certain minimum and maximum values.'
      }
    }
  },
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
        type: { summary: 'number' }
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

  return (
    <RangeSlider
      {...args}
      onChange={(start, end) => {
        handleChange(start, end);
        args.onChange(start, end);
      }}
      start={handleStartValue}
      end={handleEndValue}
    />
  );
};

export const rangeSlider = Template.bind({});
`,locationsMap:{"range-slider":{startLoc:{col:17,line:175},endLoc:{col:1,line:195},startBody:{col:17,line:175},endBody:{col:1,line:195}}}},docs:{description:{component:"Use the range slider component when the user needs to select a value or value range within certain minimum and maximum values."}}},argTypes:{label:{control:{type:"text"},defaultValue:"Price",table:{type:{summary:"string"}},description:"A label that displays above the `RangeSlider`. "},start:{control:!1,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `start` prop sets the value for the left handle if the `range` prop is set to `true`. If the `range` prop is set to `false`, the `start` prop sets the starting value of the single handle instead."},end:{control:!1,table:{type:{summary:"number"}},description:"The `end` prop sets the value for the right handle if the `range` prop is set to `true`."},min:{control:{type:"number"},defaultValue:0,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `min` prop controls the minimum value for the handle(s) on a `RangeSlider`."},max:{control:{type:"number"},defaultValue:20,table:{type:{summary:"number"},defaultValue:{summary:10}},description:"The `max` prop controls the maximum value for the handle(s) on a `RangeSlider`."},step:{control:{type:"number"},defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `step` prop controls with what increment a handle can be increased or decreased."},unit:{control:{type:"text"},defaultValue:"$",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `unit` is a a suffix added after the numeric value(s)."},range:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Setting `range` to `true` will add a second handle on the slider."},minRange:{control:{type:"number"},defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `minRange` controls the minimum difference in values between `start` and `end`. For instance, a minRange of 2 means that `end` will always have a value of at least `start + 2`. Works only if `range` is `true`."},labelStart:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the start of the slider."},labelEnd:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the end of the slider."},iconStart:{control:{type:"select"},options:["","ai-accounting-bill","volume-control-off","arrow-left-1"],defaultValue:"ai-accounting-bill",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the start of the slider."},iconEnd:{control:{type:"select"},options:["","ai-accounting-bills","volume-control-full","arrow-right-1"],defaultValue:"ai-accounting-bills",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the end of the slider."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the start or end value is updated. The first parameter of this function is the new `start` value, the second parameter is the new `end` value (can be `undefined` if range is set to `false`)."},ariaLabelMin:{control:{type:"text"},defaultValue:"Minimum",table:{type:{summary:"string"},defaultValue:{summary:"Minimum"}},description:"Aria-label on the `start` handle of the slider."},ariaLabelMax:{control:{type:"text"},defaultValue:"Maximum",table:{type:{summary:"string"},defaultValue:{summary:"Maximum"}},description:"Aria-label on the `end` handle of the slider."},tickMarks:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Show tickmarks on the `RangeSlider`."},qa:z}},W=r(({...s})=>{const[t,n]=N.exports.useState(5),[i,o]=N.exports.useState(12),p=r((u,l)=>{n(u),o(l)},"handleChange");return m(c,{...s,onChange:(u,l)=>{p(u,l),s.onChange(u,l)},start:t,end:i})},"Template"),le=W.bind({}),se=["rangeSlider"];export{se as __namedExportsOrder,re as default,le as rangeSlider};
//# sourceMappingURL=RangeSlider.stories-10838b16.js.map
