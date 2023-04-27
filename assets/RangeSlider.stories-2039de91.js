var j=Object.defineProperty;var a=(i,n)=>j(i,"name",{value:n,configurable:!0});import{R as y,r as D}from"./index-d23035ce.js";import{Q as q}from"./stories.settings-7ac24d87.js";import{g as O,a as F,l as U}from"./math.utils-bc819718.js";import{I as H}from"./Icon-fde9928b.js";import{j as m,a as g}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-dbf1bcd4.js";import"./dom.utils-1db2b487.js";import"./log.utils-f56af116.js";function W({start:i,end:n,range:t,min:o,getPositionFromValue:r}){return m("div",{className:"a-range-slider__bar",style:{left:t?r(i)+"px":"",width:t&&n?r(n+o-i)+"px":r(i)+"px"}})}a(W,"RangeSliderBar");function I({value:i,min:n,max:t,sliderMin:o,sliderMax:r,step:c,direction:h,sliderPos:l,onUpdate:u,getPositionFromValue:M,ariaLabel:_}){const[w,V]=y.useState(0),L=y.useRef(null);y.useEffect(()=>{l&&V(l)},[h,l]);const x=a(e=>{e.stopPropagation(),e.preventDefault()},"handleNoop"),T=a(()=>{document.addEventListener("mousemove",v),document.addEventListener("mouseup",b)},"handleStart"),v=a(e=>{e.type==="mousemove"?x(e):e.stopPropagation();const d=S(e);return u&&u(d)},"handleDrag"),b=a(e=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b);const d=S(e);return u&&u(d)},"handleEnd"),S=a(e=>O(e,w,c,n,t,o,r,h),"position"),k=a(e=>{let d=i;e.key==="ArrowUp"||e.key==="ArrowRight"?(e.preventDefault(),d+=c):e.key==="ArrowDown"||e.key==="ArrowLeft"?(e.preventDefault(),d-=c):e.key==="End"?(e.preventDefault(),d=t):e.key==="Home"&&(e.preventDefault(),d=n),d>=n&&d<=t&&u(d)},"handleKeyPress");return m("div",{className:"a-range-slider__handle",tabIndex:0,style:{left:M(i)+"px"},onMouseDown:T,onTouchEnd:x,onTouchMove:v,onKeyDown:k,role:"slider","aria-orientation":"horizontal","aria-valuemax":t,"aria-valuemin":n,"aria-valuenow":i,"aria-label":_,ref:L})}a(I,"RangeSliderHandle");function p({label:i,start:n=p.defaultProps.start,end:t,min:o=p.defaultProps.min,max:r=p.defaultProps.max,step:c=p.defaultProps.step,unit:h=p.defaultProps.unit,minRange:l=p.defaultProps.minRange,range:u=p.defaultProps.range,labelStart:M,labelEnd:_,iconStart:w,iconEnd:V,ariaLabelMin:L,ariaLabelMax:x,tickMarks:T,qa:v,onChange:b}){const[S,k]=y.useState(0),[e,d]=y.useState(0),[E,$]=y.useState(0),R=y.useRef(null);y.useEffect(()=>(window.addEventListener("resize",P),P(),()=>window.removeEventListener("resize",P)),[]);const P=a(()=>{if(R.current){const s=R.current.offsetWidth,f=R.current;if(f&&f instanceof HTMLElement){const Q=f.getBoundingClientRect().left;$(Q)}k(s),d(s)}},"handleResize"),N=a(s=>{if(!(u&&t&&l&&t-s<l))return b&&b(s,u?t:void 0)},"handleUpdateStart"),C=a(s=>{if(!(n&&l&&s-n<l))return b&&b(n,s)},"handleUpdateEnd"),A=a(s=>U(s,o,r,S),"getPositionFromValue"),z=a(s=>O(s,S,c,o,r,o,r,E),"position"),B=a(s=>{const f=z(s);if(u&&t&&Math.abs(f-t)<Math.abs(f-n)){C(f);return}N(f)},"updateHandleValue");return g("div",{className:"a-range-slider","data-qa":v,ref:R,children:[g("div",{className:"a-range-slider__labels",children:[m("div",{className:"a-range-slider__label",children:i}),g("div",{className:"a-range-slider__label",children:[u?`${n} - ${t}`:`${n}`,` ${h}`]})]}),g("div",{className:"a-range-slider__inner",onClick:B,children:[T&&m("div",{className:"a-range-slider__tickmarks",children:F(o,r,c).map(s=>m("div",{className:"a-range-slider__tickmark"},s))}),m(W,{start:n,end:t,getPositionFromValue:A,range:!!u,min:o}),m(I,{value:n,onUpdate:N,min:o,max:u&&l?r-l:r,sliderMin:o,sliderMax:r,step:c,sliderPos:e,direction:E,getPositionFromValue:A,ariaLabel:L}),u&&typeof l=="number"&&typeof t=="number"&&m(I,{value:t,onUpdate:C,min:o+l,max:r,sliderMin:o,sliderMax:r,step:c,sliderPos:e,direction:E,getPositionFromValue:A,ariaLabel:x})]}),g("div",{className:"a-range-slider__descriptions",children:[g("div",{className:"a-range-slider__description small",children:[M,w?m(H,{name:w}):null]}),g("div",{className:"a-range-slider__description small",children:[_,V?m(H,{name:V}):null]})]})]})}a(p,"RangeSlider");p.defaultProps={start:0,min:0,max:10,step:1,unit:"",minRange:1,range:!1,ariaLabelMin:"Minimum",ariaLabelMax:"Maximimum"};const le={title:"React/Atoms/RangeSlider",component:p,parameters:{storySource:{source:`import { useState } from 'react';
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
`,locationsMap:{"range-slider":{startLoc:{col:17,line:177},endLoc:{col:1,line:197},startBody:{col:17,line:177},endBody:{col:1,line:197}}}},docs:{description:{component:"Use the range slider component when the user needs to select a value or value range within certain minimum and maximum values."}}},args:{label:"Price",min:0,max:20,step:1,unit:"$",range:!1,minRange:1,labelStart:"",labelEnd:"",iconStart:"ai-accounting-bill",iconEnd:"ai-accounting-bills",ariaLabelMin:"Minimum",ariaLabelMax:"Maximum",tickMarks:!1},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}},description:"A label that displays above the `RangeSlider`. "},start:{control:!1,table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `start` prop sets the value for the left handle if the `range` prop is set to `true`. If the `range` prop is set to `false`, the `start` prop sets the starting value of the single handle instead."},end:{control:!1,table:{type:{summary:"number"}},description:"The `end` prop sets the value for the right handle if the `range` prop is set to `true`."},min:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},description:"The `min` prop controls the minimum value for the handle(s) on a `RangeSlider`."},max:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:10}},description:"The `max` prop controls the maximum value for the handle(s) on a `RangeSlider`."},step:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `step` prop controls with what increment a handle can be increased or decreased."},unit:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `unit` is a a suffix added after the numeric value(s)."},range:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Setting `range` to `true` will add a second handle on the slider."},minRange:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The `minRange` controls the minimum difference in values between `start` and `end`. For instance, a minRange of 2 means that `end` will always have a value of at least `start + 2`. Works only if `range` is `true`."},labelStart:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the start of the slider."},labelEnd:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label at the end of the slider."},iconStart:{control:{type:"select"},options:["","ai-accounting-bill","volume-control-off","arrow-left-1"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the start of the slider."},iconEnd:{control:{type:"select"},options:["","ai-accounting-bills","volume-control-full","arrow-right-1"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Icon at the end of the slider."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the start or end value is updated. The first parameter of this function is the new `start` value, the second parameter is the new `end` value (can be `undefined` if range is set to `false`)."},ariaLabelMin:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Minimum"}},description:"Aria-label on the `start` handle of the slider."},ariaLabelMax:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Maximum"}},description:"Aria-label on the `end` handle of the slider."},tickMarks:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Show tickmarks on the `RangeSlider`."},qa:q}},Y=a(({...i})=>{const[n,t]=D.exports.useState(5),[o,r]=D.exports.useState(12),c=a((h,l)=>{t(h),r(l)},"handleChange");return m(p,{...i,onChange:(h,l)=>{c(h,l),i.onChange(h,l)},start:n,end:o})},"Template"),se=Y.bind({}),oe=["rangeSlider"];export{oe as __namedExportsOrder,le as default,se as rangeSlider};
//# sourceMappingURL=RangeSlider.stories-2039de91.js.map
