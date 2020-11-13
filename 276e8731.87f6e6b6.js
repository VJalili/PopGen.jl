(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,s=d["".concat(o,".").concat(m)]||d[m]||f[m]||i;return n?r.a.createElement(s,c(c({ref:t},p),{},{components:n})):r.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(138)),o={id:"file_write",title:"Writing data to file",sidebar_label:"Writing data"},c={unversionedId:"io/file_write",id:"io/file_write",isDocsHomePage:!1,title:"Writing data to file",description:"`julia",source:"@site/docs/io/file_write.md",slug:"/io/file_write",permalink:"/PopGen.jl/docs/io/file_write",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/io/file_write.md",version:"current",lastUpdatedAt:1600798406,sidebar_label:"Writing data",sidebar:"docs",previous:{title:"Reading in data",permalink:"/PopGen.jl/docs/io/file_import"},next:{title:"Delimited format",permalink:"/PopGen.jl/docs/io/delimited"}},l=[],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"write_to(data::PopData; filename::String, kwargs...)\n")),Object(i.b)("p",null,"To complement ",Object(i.b)("inlineCode",{parentName:"p"},"read_from()"),", PopGen.jl offers ",Object(i.b)("inlineCode",{parentName:"p"},"write_to()"),", which writes ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," to different file formats. Like the file reader, ",Object(i.b)("inlineCode",{parentName:"p"},"write_to()"),"\nwill infer the correct output file type from the output filename's extensions. Currently, PopGen.jl supports writing to these file formats:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"File Format"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Extensions"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Docstring"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"genepop"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".gen"),", ",Object(i.b)("inlineCode",{parentName:"td"},".genepop")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2genepop"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"JLD2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".jld2")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2jld2"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"delimited"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".csv"),", ",Object(i.b)("inlineCode",{parentName:"td"},".txt"),", ",Object(i.b)("inlineCode",{parentName:"td"},".tsv")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2delimited"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Structure/fastStructure"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".str"),", ",Object(i.b)("inlineCode",{parentName:"td"},".structure")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2structure"))))),Object(i.b)("p",null,"Additional keyword arguments ",Object(i.b)("inlineCode",{parentName:"p"},"kwargs...")," are specific to the intended file type, and are listed in the docstrings of the specific file writer with the format ",Object(i.b)("inlineCode",{parentName:"p"},"?popdata2filetype")," like shown above. For example, to find the appropriate keywords for a conversion to Genepop format, call up the docstring to ",Object(i.b)("inlineCode",{parentName:"p"},"popdata2genepop")," with ",Object(i.b)("inlineCode",{parentName:"p"},"?popdata2genepop"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'cats = nancycats();\nfewer_cats = omit(cats, names = samples(cats)[1:10]);\nwrite_to(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "horizontal")\nwrite_to(fewer_cats, filename = "filtered_nancycats.txt", digits = 4, format = "tidy", delim = ",")\nwrite_to(fewer_cats, filename = "filtered_nancycats.jld2")\n')))}b.isMDXComponent=!0}}]);