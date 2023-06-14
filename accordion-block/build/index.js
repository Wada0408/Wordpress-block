(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.element,o=(window.wp.i18n,window.wp.blockEditor),a=window.wp.components,n=JSON.parse('{"u2":"create-block/accordion-block"}');(0,e.registerBlockType)(n.u2,{edit:function(e){const{attributes:n,setAttributes:l}=e,{content:r,title:d,uniformRadius:i,uniformPadding:c,topLeftRadius:s,topRightRadius:m,bottomLeftRadius:u,bottomRightRadius:g,borderColors:b,borderWidth:p,borderStyle:h,topPadding:v,rightPadding:C,bottomPadding:f,leftPadding:R,ttlColors:E,contentColors:$}=n,P=(0,o.useBlockProps)();return(0,t.createElement)("div",P,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:"Border Settings"},(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Border Radius"),(0,t.createElement)(a.ToggleControl,{label:"Uniform Radius",checked:i,onChange:e=>l({uniformRadius:e})}),i?(0,t.createElement)(a.RangeControl,{label:"Radius",value:s,min:0,max:100,onChange:e=>(e=>{l({topLeftRadius:e,topRightRadius:e,bottomLeftRadius:e,bottomRightRadius:e})})(e)}):(0,t.createElement)("div",null,(0,t.createElement)(a.RangeControl,{label:"Top Left Radius",value:s,min:0,max:100,onChange:e=>l({topLeftRadius:e})}),(0,t.createElement)(a.RangeControl,{label:"Top Right Radius",value:m,min:0,max:100,onChange:e=>l({topRightRadius:e})}),(0,t.createElement)(a.RangeControl,{label:"Bottom Left Radius",value:u,min:0,max:100,onChange:e=>l({bottomLeftRadius:e})}),(0,t.createElement)(a.RangeControl,{label:"Bottom Right Radius",value:g,min:0,max:100,onChange:e=>l({bottomRightRadius:e})}))),(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Border Width"),(0,t.createElement)(a.RangeControl,{value:p,min:0,max:10,onChange:e=>l({borderWidth:e})})),(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Border Style"),(0,t.createElement)(a.SelectControl,{value:h,options:[{label:"dotted",value:"dotted"},{label:"dashed",value:"dashed"},{label:"solid",value:"solid"},{label:"double",value:"double"},{label:"groove",value:"groove"},{label:"ridge",value:"ridge"},{label:"inset",value:"inset"},{label:"outset",value:"outset"}],onChange:e=>l({borderStyle:e})})),(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Border Color"),(0,t.createElement)(a.ColorPalette,{colors:[{name:"Red",color:"#ff0000"},{name:"Blue",color:"#0000ff"},{name:"Green",color:"#00ff00"},{name:"transparent",color:"transparent"}],value:b,clearable:!1,onChange:e=>l({borderColors:e})}))),(0,t.createElement)(a.PanelBody,{title:"Padding Settings"},(0,t.createElement)("div",null,(0,t.createElement)(a.ToggleControl,{label:"Uniform Padding",checked:c,onChange:e=>l({uniformPadding:e})}),c?(0,t.createElement)(a.RangeControl,{label:"Padding",value:v,min:0,max:100,onChange:e=>(e=>{l({topPadding:e,rightPadding:e,bottomPadding:e,leftPadding:e})})(e)}):(0,t.createElement)("div",null,(0,t.createElement)(a.RangeControl,{label:"Top Padding",value:v,min:0,max:100,onChange:e=>l({topPadding:e})}),(0,t.createElement)(a.RangeControl,{label:"Right Padding",value:C,min:0,max:100,onChange:e=>l({rightPadding:e})}),(0,t.createElement)(a.RangeControl,{label:"Bottom Padding",value:f,min:0,max:100,onChange:e=>l({bottomPadding:e})}),(0,t.createElement)(a.RangeControl,{label:"Left Padding",value:R,min:0,max:100,onChange:e=>l({leftPadding:e})})))),(0,t.createElement)(a.PanelBody,{title:"Accordion background Settings"},(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Accordion title background Color"),(0,t.createElement)(a.ColorPalette,{colors:[{name:"Red",color:"#ff0000"},{name:"Blue",color:"#0000ff"},{name:"Green",color:"#00ff00"},{name:"transparent",color:"transparent"}],value:E,clearable:!1,onChange:e=>l({ttlColors:e})})),(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Accordion content background Color"),(0,t.createElement)(a.ColorPalette,{colors:[{name:"Red",color:"#ff0000"},{name:"Blue",color:"#0000ff"},{name:"Green",color:"#00ff00"},{name:"transparent",color:"transparent"}],value:$,clearable:!1,onChange:e=>l({contentColors:e})})))),(0,t.createElement)("div",{className:"accordion",style:{borderRadius:i?`${s}px`:`${s}px ${m}px ${g}px ${u}px`,borderColor:`${b}`,borderWidth:`${p}px`,borderStyle:`${h}`}},(0,t.createElement)("div",{className:"accordion-header js-accordion__btn",style:{padding:c?`${v}%`:`${v}% ${C}% ${f}% ${R}%`,backgroundColor:`${E}`}},(0,t.createElement)(o.RichText,{tagName:"p",className:"accordion-title",value:d,onChange:e=>{l({title:e})}}),(0,t.createElement)("span",{className:"accordion-icon dashicons"})),(0,t.createElement)("div",{className:"accordion-content js-accordion__content",style:{borderTopColor:`${b}`,borderTopWidth:`${p}px`,borderTopStyle:`${h}`,backgroundColor:`${$}`}},(0,t.createElement)("div",{style:{padding:c?`${v}%`:`${v}% ${C}% ${f}% ${R}%`}},(0,t.createElement)(o.InnerBlocks,{allowedBlocks:["core/image","core/paragraph"]})))))},supports:{align:!0},save:function(e){const{attributes:a}=e,{content:n,title:l,uniformRadius:r,uniformPadding:d,topLeftRadius:i,topRightRadius:c,bottomLeftRadius:s,bottomRightRadius:m,borderColors:u,borderWidth:g,borderStyle:b,topPadding:p,rightPadding:h,bottomPadding:v,leftPadding:C,ttlColors:f,contentColors:R}=a;return(0,t.createElement)("div",o.useBlockProps.save(),(0,t.createElement)("div",{className:"accordion",style:{borderRadius:r?`${i}px`:`${i}px ${c}px ${m}px ${s}px`,borderColor:`${u}`,borderWidth:`${g}px`,borderStyle:`${b}`}},(0,t.createElement)("div",{className:"accordion-header js-accordion__btn",style:{padding:d?`${p}%`:`${p}% ${h}% ${v}% ${C}%`,backgroundColor:`${f}`}},(0,t.createElement)(o.RichText.Content,{tagName:"p",className:"accordion-title",value:l}),(0,t.createElement)("span",{className:"accordion-icon dashicons"})),(0,t.createElement)("div",{className:"accordion-content js-accordion__content",style:{borderTopColor:`${u}`,borderTopWidth:`${g}px`,borderTopStyle:`${b}`,backgroundColor:`${R}`}},(0,t.createElement)("div",{style:{padding:d?`${p}%`:`${p}% ${h}% ${v}% ${C}%`}},(0,t.createElement)(o.InnerBlocks.Content,null)))))}})}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,o,n,l)=>{if(!o){var r=1/0;for(s=0;s<e.length;s++){for(var[o,n,l]=e[s],d=!0,i=0;i<o.length;i++)(!1&l||r>=l)&&Object.keys(a.O).every((e=>a.O[e](o[i])))?o.splice(i--,1):(d=!1,l<r&&(r=l));if(d){e.splice(s--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,n,l]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[r,d,i]=o,c=0;if(r.some((t=>0!==e[t]))){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);if(i)var s=i(a)}for(t&&t(o);c<r.length;c++)l=r[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(s)},o=globalThis.webpackChunkaccordion_block=globalThis.webpackChunkaccordion_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=a.O(void 0,[431],(()=>a(259)));n=a.O(n)})();