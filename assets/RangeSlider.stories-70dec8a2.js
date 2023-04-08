var z=Object.defineProperty;var l=(o,n)=>z(o,"name",{value:n,configurable:!0});import{R as f,r as C}from"./index-d23035ce.js";import{Q as B}from"./stories.settings-7ac24d87.js";import{g as F,a as Q,b as j,l as q}from"./math.utils-8c9f5f65.js";import{I as D}from"./Icon-fde9928b.js";import{j as m,a as b}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-dbf1bcd4.js";import"./dom.utils-1db2b487.js";import"./log.utils-f56af116.js";function U({start:o,end:n,range:t,min:i,getPositionFromValue:s}){return m("div",{className:"a-range-slider__bar",style:{left:t?s(o)+"px":"",width:t&&n?s(n+i-o)+"px":s(o)+"px"}})}l(U,"RangeSliderBar");function H({value:o,min:n,max:t,sliderMin:i,sliderMax:s,step:p,direction:h,sliderPos:a,onUpdate:u,getPositionFromValue:M,ariaLabel:_}){const[v,S]=f.useState(0),L=f.useRef(null);f.useEffect(()=>{a&&S(a)},[h,a]);const x=l(e=>{e.stopPropagation(),e.preventDefault()},"handleNoop"),T=l(()=>{document.addEventListener("mousemove",g),document.addEventListener("mouseup",y)},"handleStart"),g=l(e=>{e.type==="mousemove"?x(e):e.stopPropagation();const r=w(e);return u&&u(r)},"handleDrag"),y=l(e=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",y);const r=w(e);return u&&u(r)},"handleEnd"),w=l(e=>{const r="clientX",V=e.type!=="touchmove"?e[r]:e.touches[0][r],k=Q(V,h);return F(k,v,p,n,t,i,s)},"position"),E=l(e=>{let r=o;e.key==="ArrowUp"||e.key==="ArrowRight"?(e.preventDefault(),r+=p):e.key==="ArrowDown"||e.key==="ArrowLeft"?(e.preventDefault(),r-=p):e.key==="End"?(e.preventDefault(),r=t):e.key==="Home"&&(e.preventDefault(),r=n),r>=n&&r<=t&&u(r)},"handleKeyPress");return m("div",{className:"a-range-slider__handle",tabIndex:0,style:{left:M(o)+"px"},onMouseDown:T,onTouchEnd:x,onTouchMove:g,onKeyDown:E,role:"slider","aria-orientation":"horizontal","aria-valuemax":t,"aria-valuemin":n,"aria-valuenow":o,"aria-label":_,ref:L})}l(H,"RangeSliderHandle");function c({label:o,start:n=c.defaultProps.start,end:t,min:i=c.defaultProps.min,max:s=c.defaultProps.max,step:p=c.defaultProps.step,unit:h=c.defaultProps.unit,minRange:a=c.defaultProps.minRange,range:u=c.defaultProps.range,labelStart:M,labelEnd:_,iconStart:v,iconEnd:S,ariaLabelMin:L,ariaLabelMax:x,tickMarks:T,qa:g,onChange:y}){const[w,E]=f.useState(0),[e,r]=f.useState(0),[V,k]=f.useState(0),R=f.useRef(null);f.useEffect(()=>(window.addEventListener("resize",P),P(),()=>window.removeEventListener("resize",P)),[]);const P=l(()=>{if(R.current){const d=R.current.offsetWidth,N=R.current;if(N&&N instanceof HTMLElement){const $=N.getBoundingClientRect().left;k($)}E(d),r(d)}},"handleResize"),I=l(d=>{if(!(u&&t&&a&&t-d<a))return y&&y(d,u?t:void 0)},"handleUpdateStart"),O=l(d=>{if(!(n&&a&&d-n<a))return y&&y(n,d)},"handleUpdateEnd"),A=l(d=>q(d,i,s,w),"getPositionFromValue");return b("div",{className:"a-range-slider","data-qa":g,ref:R,children:[b("div",{className:"a-range-slider__labels",children:[m("div",{className:"a-range-slider__label",children:o}),b("div",{className:"a-range-slider__label",children:[u?`${n} - ${t}`:`${n}`,` ${h}`]})]}),b("div",{className:"a-range-slider__inner",children:[T&&m("div",{className:"a-range-slider__tickmarks",children:j(i,s,p).map(d=>m("div",{className:"a-range-slider__tickmark"},d))}),m(U,{start:n,end:t,getPositionFromValue:A,range:!!u,min:i}),m(H,{value:n,onUpdate:I,min:i,max:u&&a?s-a:s,sliderMin:i,sliderMax:s,step:p,sliderPos:e,direction:V,getPositionFromValue:A,ariaLabel:L}),u&&typeof a=="number"&&typeof t=="number"&&m(H,{value:t,onUpdate:O,min:i+a,max:s,sliderMin:i,sliderMax:s,step:p,sliderPos:e,direction:V,getPositionFromValue:A,ariaLabel:x})]}),b("div",{className:"a-range-slider__descriptions",children:[b("div",{className:"a-range-slider__description small",children:[M,v?m(D,{name:v}):null]}),b("div",{className:"a-range-slider__description small",children:[_,S?m(D,{name:S}):null]})]})]})}l(c,"RangeSlider");c.defaultProps={start:0,min:0,max:10,step:1,unit:"",minRange:1,range:!1,ariaLabelMin:"Minimum",ariaLabelMax:"Maximimum"};const re={title:"React/Atoms/RangeSlider",component:c,parameters:{storySource:{source:`import { useState } from 'react';
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
  args: {
    label: 'Price',
    min: 0,
    max: 20,
    step: 1,
    unit: '$',
    range: false,
    minRange: 1,
    labelStart: '',
    labelEnd: '',
    iconStart: 'ai-accounting-bill',
    iconEnd: 'ai-accounting-bills',
    ariaLabelMin: 'Minimum',
    ariaLabelMax: 'Maximum',
    tickMarks: false
  },
  argTypes: {
    label: {
      control: { type: 'text' },
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
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'The \`min\` prop controls the minimum value for the handle(s) on a \`RangeSlider\`.'
    },
    max: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      },
      description: 'The \`max\` prop controls the maximum value for the handle(s) on a \`RangeSlider\`.'
    },
    step: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description: 'The \`step\` prop controls with what increment a handle can be increased or decreased.'
    },
    unit: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The \`unit\` is a a suffix added after the numeric value(s).'
    },
    range: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Setting \`range\` to \`true\` will add a second handle on the slider.'
    },
    minRange: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description:
        'The \`minRange\` controls the minimum difference in values between \`start\` and \`end\`. For instance, a minRange of 2 means that \`end\` will always have a value of at least \`start + 2\`. Works only if \`range\` is \`true\`.'
    },
    labelStart: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label at the start of the slider.'
    },
    labelEnd: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label at the end of the slider.'
    },
    iconStart: {
      control: { type: 'select' },
      options: ['', 'ai-accounting-bill', 'volume-control-off', 'arrow-left-1'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Icon at the start of the slider.'
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['', 'ai-accounting-bills', 'volume-control-full', 'arrow-right-1'],
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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Minimum' }
      },
      description: 'Aria-label on the \`start\` handle of the slider.'
    },
    ariaLabelMax: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximum' }
      },
      description: 'Aria-label on the \`end\` handle of the slider.'
    },
    tickMarks: {
      control: { type: 'boolean' },
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
`,locationsMap:{"range-slider":{startLoc:{col:17,line:177},endLoc:{col:1,line:197},startBody:{col:17,line:177},endBody:{col:1,line:197}}}},docs:{description:{component:"Use the range slider component when the user needs to select a value or value range within certain minimum and maximum values."}}},args:{label:"Price",min:0,max:20,step:1,unit:"$",range:!1,minRange:1,labelStart:"",labelEnd:"",iconStart:"ai-accounting-bill",iconEnd:"ai-accounting-bills",ariaLabelMin:"Minimum",ariaLabelMax:"Maximum",tickMarks:!1},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}},description:"A label that displays above the `RangeSlider`. "},start:{control:!1,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `start` prop sets the value for the left handle if the `range` prop is set to `true`. If the `range` prop is set to `false`, the `start` prop sets the starting value of the single handle instead."},end:{control:!1,table:{type:{summary:"number"}},description:"The `end` prop sets the value for the right handle if the `range` prop is set to `true`."},min:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `min` prop controls the minimum value for the handle(s) on a `RangeSlider`."},max:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:10}},description:"The `max` prop controls the maximum value for the handle(s) on a `RangeSlider`."},step:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `step` prop controls with what increment a handle can be increased or decreased."},unit:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `unit` is a a suffix added after the numeric value(s)."},range:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Setting `range` to `true` will add a second handle on the slider."},minRange:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `minRange` controls the minimum difference in values between `start` and `end`. For instance, a minRange of 2 means that `end` will always have a value of at least `start + 2`. Works only if `range` is `true`."},labelStart:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the start of the slider."},labelEnd:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the end of the slider."},iconStart:{control:{type:"select"},options:["","ai-accounting-bill","volume-control-off","arrow-left-1"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the start of the slider."},iconEnd:{control:{type:"select"},options:["","ai-accounting-bills","volume-control-full","arrow-right-1"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the end of the slider."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the start or end value is updated. The first parameter of this function is the new `start` value, the second parameter is the new `end` value (can be `undefined` if range is set to `false`)."},ariaLabelMin:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Minimum"}},description:"Aria-label on the `start` handle of the slider."},ariaLabelMax:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Maximum"}},description:"Aria-label on the `end` handle of the slider."},tickMarks:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Show tickmarks on the `RangeSlider`."},qa:B}},W=l(({...o})=>{const[n,t]=C.exports.useState(5),[i,s]=C.exports.useState(12),p=l((h,a)=>{t(h),s(a)},"handleChange");return m(c,{...o,onChange:(h,a)=>{p(h,a),o.onChange(h,a)},start:n,end:i})},"Template"),le=W.bind({}),se=["rangeSlider"];export{se as __namedExportsOrder,re as default,le as rangeSlider};
//# sourceMappingURL=RangeSlider.stories-70dec8a2.js.map
