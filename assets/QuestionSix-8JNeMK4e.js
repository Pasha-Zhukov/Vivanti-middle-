import{r as t,u as r,j as e,b as x,n as m}from"./index-QMaEzabS.js";import{B as u,a as h}from"./ButtonPrev-DepW4Hei.js";/* empty css                */function p(){const[c,l]=t.useState(!0),[s,n]=t.useState(null),i=r(),a=o=>{n(o.target.value),l(!0)},d=()=>{s?(i(x(s)),i(m())):l(!1),n(null)};return e.jsx("div",{className:"bg-questions p-3",children:e.jsxs("div",{className:"d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3",children:[e.jsxs("div",{className:"bg-questions d-flex flex-column justify-content-between ",children:[e.jsx("div",{className:"fw-bold",children:"Вопрос 6/8"}),e.jsx("h5",{className:"mb-0",children:"Принимал ли Ваш пациент когда-либо регулярно лекарства для снижения артериального давления?"}),e.jsx("div",{className:c?"":"no-selection",children:e.jsxs("div",{className:"d-flex gap-5 align-items-end fs-18",children:[e.jsxs("div",{className:"d-flex flex-column mt-3 mt-lg-0",children:[e.jsxs("label",{className:"custom-radio d-inline-flex  align-items-center gap-3",children:[e.jsx("input",{type:"radio",name:"QuestionSix1",value:"2",checked:s==="2",onChange:a}),e.jsxs("span",{children:[" ","Да"]})]}),e.jsxs("label",{className:"custom-radio d-inline-flex  align-items-center gap-3",children:[e.jsx("input",{type:"radio",name:"QuestionSix2",value:"0",checked:s==="0",onChange:a}),e.jsx("span",{children:"Нет"})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:"(2 балла)"}),e.jsx("div",{children:"(0 баллов)"})]})]})}),e.jsxs("div",{className:"d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3",children:[e.jsx(u,{}),e.jsx(h,{onClick:d,answer:s})]})]}),e.jsx("img",{className:"img-question",src:"../../public/images/img-7.svg",alt:"img"})]})})}export{p as default};