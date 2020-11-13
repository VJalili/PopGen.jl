(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?o.a.createElement(b,c(c({ref:t},s),{},{components:a})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(138)),i={id:"manipulate",title:"Start here",sidebar_label:"Start here"},c={unversionedId:"basics/manipulate",id:"basics/manipulate",isDocsHomePage:!1,title:"Start here",description:"PopGen.jl includes basic commands to provide obvious methods to inspect and alter PopData. Using standard Julia conventions, only commands ending with a bang ! are mutable, meaning they alter the input data. So, commands like populations will show you population information, whereas populations! will change that information in your PopData. The mutable commands here alter the data in your PopData, but not the source data (i.e. the files used to create the PopData). Read over Accessing parts of PopData to become familiar with the components of PopData.",source:"@site/docs/basics/manipulate.md",slug:"/basics/manipulate",permalink:"/PopGen.jl/docs/basics/manipulate",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/basics/manipulate.md",version:"current",lastUpdatedAt:1605303084,sidebar_label:"Start here",sidebar:"docs",previous:{title:"Variant Call Format",permalink:"/PopGen.jl/docs/io/vcf"},next:{title:"Accessing elements",permalink:"/PopGen.jl/docs/basics/accessing"}},l=[{value:"Accessing Elements",id:"accessing-elements",children:[]},{value:"Viewing Data",id:"viewing-data",children:[]},{value:"Sample and Locus Exclusion/Removal",id:"sample-and-locus-exclusionremoval",children:[]},{value:"Location and Population Information",id:"location-and-population-information",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PopGen.jl includes basic commands to provide obvious methods to inspect and alter ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". Using standard Julia conventions, only commands ending with a bang ",Object(r.b)("inlineCode",{parentName:"p"},"!")," are mutable, meaning they alter the input data. So, commands like ",Object(r.b)("inlineCode",{parentName:"p"},"populations")," will show you population information, whereas ",Object(r.b)("inlineCode",{parentName:"p"},"populations!")," will change that information in your ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". The mutable commands here alter the data in your ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),", but not the source data (i.e. the files used to create the ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"). Read over ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"accessing"}),"Accessing parts of PopData")," to become familiar with the components of ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". "),Object(r.b)("p",null,'The "manipulation" commands were separated into smaller sections to make it less overwhelming, and using the ',Object(r.b)("inlineCode",{parentName:"p"},"gulfsharks")," data, you can explore each of the sections like a little tutorial. The sections don't follow any particular order, so feel free to jump around however you like. "),Object(r.b)("p",null,"To follow along like a tutorial, load the ",Object(r.b)("inlineCode",{parentName:"p"},"gulfsharks")," data in if you haven't already:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> using PopGen\n\njulia> sharks = gulfsharks() ;\n")),Object(r.b)("h3",{id:"accessing-elements"},Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"accessing"}),"Accessing Elements")),Object(r.b)("h3",{id:"viewing-data"},Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"viewdata"}),"Viewing Data")),Object(r.b)("h3",{id:"sample-and-locus-exclusionremoval"},Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"exclusion"}),"Sample and Locus Exclusion/Removal")),Object(r.b)("h3",{id:"location-and-population-information"},Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"populations"}),"Location and Population Information")))}p.isMDXComponent=!0}}]);