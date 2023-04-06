var z=Object.defineProperty;var l=(o,t)=>z(o,"name",{value:t,configurable:!0});import{R as h,r as C}from"./index-d23035ce.js";import{Q as B}from"./stories.settings-7ac24d87.js";import{g as F,a as Q,b as j,l as q}from"./math.utils-8c9f5f65.js";import{I as D}from"./Icon-c6891515.js";import{j as m,a as b}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-4d2c475c.js";import"./dom.utils-1db2b487.js";import"./log.utils-f56af116.js";function U({start:o,end:t,range:n,min:i,getPositionFromValue:s}){return m("div",{className:"a-range-slider__bar",style:{left:n?s(o)+"px":"",width:n&&t?s(t+i-o)+"px":s(o)+"px"}})}l(U,"RangeSliderBar");function H({value:o,min:t,max:n,sliderMin:i,sliderMax:s,step:p,direction:f,sliderPos:a,onUpdate:u,getPositionFromValue:_,ariaLabel:T}){const[v,V]=h.useState(0),M=h.useRef(null);h.useEffect(()=>{a&&V(a)},[f,a]);const S=l(e=>{e.stopPropagation(),e.preventDefault()},"handleNoop"),L=l(()=>{document.addEventListener("mousemove",g),document.addEventListener("mouseup",y)},"handleStart"),g=l(e=>{e.type==="mousemove"?S(e):e.stopPropagation();const r=w(e);return u&&u(r)},"handleDrag"),y=l(e=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",y);const r=w(e);return u&&u(r)},"handleEnd"),w=l(e=>{const r="clientX",x=e.type!=="touchmove"?e[r]:e.touches[0][r],k=Q(x,f);return F(k,v,p,t,n,i,s)},"position"),E=l(e=>{let r=o;e.key==="ArrowUp"||e.key==="ArrowRight"?(e.preventDefault(),r+=p):e.key==="ArrowDown"||e.key==="ArrowLeft"?(e.preventDefault(),r-=p):e.key==="End"?(e.preventDefault(),r=n):e.key==="Home"&&(e.preventDefault(),r=t),r>=t&&r<=n&&u(r)},"handleKeyPress");return m("div",{className:"a-range-slider__handle",tabIndex:0,style:{left:_(o)+"px"},onMouseDown:L,onTouchEnd:S,onTouchMove:g,onKeyDown:E,role:"slider","aria-orientation":"horizontal","aria-valuemax":n,"aria-valuemin":t,"aria-valuenow":o,"aria-label":T,ref:M})}l(H,"RangeSliderHandle");function c({label:o,start:t=c.defaultProps.start,end:n,min:i=c.defaultProps.min,max:s=c.defaultProps.max,step:p=c.defaultProps.step,unit:f=c.defaultProps.unit,minRange:a=c.defaultProps.minRange,range:u=c.defaultProps.range,labelStart:_,labelEnd:T,iconStart:v,iconEnd:V,ariaLabelMin:M,ariaLabelMax:S,tickMarks:L,qa:g,onChange:y}){const[w,E]=h.useState(0),[e,r]=h.useState(0),[x,k]=h.useState(0),R=h.useRef(null);h.useEffect(()=>(window.addEventListener("resize",P),P(),()=>window.removeEventListener("resize",P)),[]);const P=l(()=>{if(R.current){const d=R.current.offsetWidth,N=R.current;if(N&&N instanceof HTMLElement){const $=N.getBoundingClientRect().left;k($)}E(d),r(d)}},"handleResize"),I=l(d=>{if(!(u&&n&&a&&n-d<a))return y&&y(d,u?n:void 0)},"handleUpdateStart"),O=l(d=>{if(!(t&&a&&d-t<a))return y&&y(t,d)},"handleUpdateEnd"),A=l(d=>q(d,i,s,w),"getPositionFromValue");return b("div",{className:"a-range-slider","data-qa":g,ref:R,children:[b("div",{className:"a-range-slider__labels",children:[m("div",{className:"a-range-slider__label",children:o}),b("div",{className:"a-range-slider__label",children:[u?`${t} - ${n}`:`${t}`,` ${f}`]})]}),b("div",{className:"a-range-slider__inner",children:[L&&m("div",{className:"a-range-slider__tickmarks",children:j(i,s,p).map(d=>m("div",{className:"a-range-slider__tickmark"},d))}),m(U,{start:t,end:n,getPositionFromValue:A,range:!!u,min:i}),m(H,{value:t,onUpdate:I,min:i,max:u&&a?s-a:s,sliderMin:i,sliderMax:s,step:p,sliderPos:e,direction:x,getPositionFromValue:A,ariaLabel:M}),u&&typeof a=="number"&&typeof n=="number"&&m(H,{value:n,onUpdate:O,min:i+a,max:s,sliderMin:i,sliderMax:s,step:p,sliderPos:e,direction:x,getPositionFromValue:A,ariaLabel:S})]}),b("div",{className:"a-range-slider__descriptions",children:[b("div",{className:"a-range-slider__description small",children:[_,v?m(D,{name:v}):null]}),b("div",{className:"a-range-slider__description small",children:[T,V?m(D,{name:V}):null]})]})]})}l(c,"RangeSlider");c.defaultProps={start:0,min:0,max:10,step:1,unit:"",minRange:1,range:!1,ariaLabelMin:"Minimum",ariaLabelMax:"Maximimum"};const re={title:"React/Atoms/RangeSlider",component:c,parameters:{storySource:{source:`import { useState } from 'react';
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
`,locationsMap:{"range-slider":{startLoc:{col:17,line:175},endLoc:{col:1,line:195},startBody:{col:17,line:175},endBody:{col:1,line:195}}}},docs:{description:{component:"Use the range slider component when the user needs to select a value or value range within certain minimum and maximum values."}}},argTypes:{label:{control:{type:"text"},defaultValue:"Price",table:{type:{summary:"string"}},description:"A label that displays above the `RangeSlider`. "},start:{control:!1,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `start` prop sets the value for the left handle if the `range` prop is set to `true`. If the `range` prop is set to `false`, the `start` prop sets the starting value of the single handle instead."},end:{control:!1,table:{type:{summary:"number"}},description:"The `end` prop sets the value for the right handle if the `range` prop is set to `true`."},min:{control:{type:"number"},defaultValue:0,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `min` prop controls the minimum value for the handle(s) on a `RangeSlider`."},max:{control:{type:"number"},defaultValue:20,table:{type:{summary:"number"},defaultValue:{summary:10}},description:"The `max` prop controls the maximum value for the handle(s) on a `RangeSlider`."},step:{control:{type:"number"},defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `step` prop controls with what increment a handle can be increased or decreased."},unit:{control:{type:"text"},defaultValue:"$",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `unit` is a a suffix added after the numeric value(s)."},range:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Setting `range` to `true` will add a second handle on the slider."},minRange:{control:{type:"number"},defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `minRange` controls the minimum difference in values between `start` and `end`. For instance, a minRange of 2 means that `end` will always have a value of at least `start + 2`. Works only if `range` is `true`."},labelStart:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the start of the slider."},labelEnd:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the end of the slider."},iconStart:{control:{type:"select"},options:["","ai-accounting-bill","volume-control-off","arrow-left-1"],defaultValue:"ai-accounting-bill",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the start of the slider."},iconEnd:{control:{type:"select"},options:["","ai-accounting-bills","volume-control-full","arrow-right-1"],defaultValue:"ai-accounting-bills",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the end of the slider."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the start or end value is updated. The first parameter of this function is the new `start` value, the second parameter is the new `end` value (can be `undefined` if range is set to `false`)."},ariaLabelMin:{control:{type:"text"},defaultValue:"Minimum",table:{type:{summary:"string"},defaultValue:{summary:"Minimum"}},description:"Aria-label on the `start` handle of the slider."},ariaLabelMax:{control:{type:"text"},defaultValue:"Maximum",table:{type:{summary:"string"},defaultValue:{summary:"Maximum"}},description:"Aria-label on the `end` handle of the slider."},tickMarks:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Show tickmarks on the `RangeSlider`."},qa:B}},W=l(({...o})=>{const[t,n]=C.exports.useState(5),[i,s]=C.exports.useState(12),p=l((f,a)=>{n(f),s(a)},"handleChange");return m(c,{...o,onChange:(f,a)=>{p(f,a),o.onChange(f,a)},start:t,end:i})},"Template"),le=W.bind({}),se=["rangeSlider"];export{se as __namedExportsOrder,re as default,le as rangeSlider};
//# sourceMappingURL=RangeSlider.stories-ad1f1f7b.js.map
