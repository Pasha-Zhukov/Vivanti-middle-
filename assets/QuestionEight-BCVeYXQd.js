import{r as u,u as p,j as e,b as j,n as N}from"./index-DPyudWbz.js";import{B as v,a as b}from"./ButtonPrev-CIMcBD4f.js";/* empty css                */const w="/Vivanti-middle/assets/img-9-DInbYc5Z.svg";function E(){const[l,t]=u.useState([]),[h,c]=u.useState(!0),r=p(),d=s=>{const{value:i,checked:g}=s.target;t(m=>{let n=[];return g?i==="0"?n=["0"]:(n=m.filter(a=>a!=="0"),n.push(i)):n=m.filter(a=>a!==i),n}),c(!0)},o=s=>l.includes(s),x=s=>{if(s.includes("3")&&s.includes("5"))return 8;if(s.includes("0"))return"0";if(s.includes("3"))return"3";if(s.includes("5"))return"5"},f=()=>{l?(r(j(x(l))),r(N())):c(!1),t([])};return e.jsx("div",{className:"bg-questions p-3",children:e.jsxs("div",{className:"d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3",children:[e.jsxs("div",{className:"bg-questions d-flex flex-column justify-content-between",children:[e.jsx("div",{className:"fw-bold",children:"Вопрос 8/8"}),e.jsx("h5",{className:"mb-0",children:"Были ли у Вашего пациента родственники с сахарным диабетом 1 или 2 типа?"}),e.jsx("div",{className:h?"":"no-selection",children:e.jsxs("div",{className:"d-flex gap-lg-5 gap-0 align-items-end fs-18",children:[e.jsxs("div",{className:"d-flex flex-column ",children:[e.jsxs("label",{className:"custom-radio d-inline-flex align-items-center gap-lg-3 gap-1",children:[e.jsx("input",{type:"checkbox",name:"QuestionEight1",value:"0",checked:o("0"),onChange:d}),e.jsxs("span",{children:[" ","Нет"]})]}),["3","5"].map(s=>e.jsxs("label",{className:"custom-radio d-inline-flex align-items-center gap-lg-3 gap-1",children:[e.jsx("input",{type:"checkbox",name:"QuestionEight1",value:s,checked:o(s),onChange:d}),e.jsx("span",{className:"text-nowrap fs-16",children:s==="3"?"Да: дедушка/бабушка":"Да: родители, брат/сестра"})]},s))]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-nowrap",children:"(0 баллов)"}),e.jsx("div",{className:"text-nowrap",children:"(3 балла)"}),e.jsx("div",{className:"text-nowrap",children:"(5 балла)"})]})]})}),e.jsxs("div",{onClick:()=>t([]),className:"d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3",children:[e.jsx(v,{}),e.jsx(b,{onClick:f,answer:x(l)})]})]}),e.jsx("img",{className:"img-question",src:w,alt:"img"})]})})}export{E as default};
