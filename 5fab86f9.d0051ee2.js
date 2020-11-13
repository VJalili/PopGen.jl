(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,O=d["".concat(b,".").concat(m)]||d[m]||j[m]||i;return a?r.a.createElement(O,c(c({ref:t},l),{},{components:a})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var l=2;l<i;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(138)),b={id:"read",title:"Read.jl",sidebar_label:"Read.jl"},c={unversionedId:"api/read",id:"api/read",isDocsHomePage:!1,title:"Read.jl",description:"read_from",source:"@site/docs/api/Read.md",slug:"/api/read",permalink:"/PopGen.jl/docs/api/read",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/Read.md",version:"current",lastUpdatedAt:1597863030,sidebar_label:"Read.jl",sidebar:"docs",previous:{title:"Permutations.jl",permalink:"/PopGen.jl/docs/api/permutations"},next:{title:"RelatednessMoments.jl",permalink:"/PopGen.jl/docs/api/relatednessmoments"}},p=[{value:"<code>read_from</code>",id:"read_from",children:[]},{value:"<code>write_to</code>",id:"write_to",children:[]},{value:"<code>popdata2jld2</code>",id:"popdata2jld2",children:[]}],l={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"read_from"},Object(i.b)("inlineCode",{parentName:"h3"},"read_from")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"read_from(infile::String; kwargs...)\n")),Object(i.b)("p",null,"Wraps ",Object(i.b)("inlineCode",{parentName:"p"},"delimited()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"genepop()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"bcf()"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"vcf()")," to read a file in as ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),". File type is\ninferred from the file extension (case insensitive):"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"File Format"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Extensions"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Docstring"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"delimited"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".csv"),", ",Object(i.b)("inlineCode",{parentName:"td"},".txt"),", ",Object(i.b)("inlineCode",{parentName:"td"},"tsv")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?delimited"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"genepop"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".gen"),", ",Object(i.b)("inlineCode",{parentName:"td"},".genepop")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?genepop"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"variant call format"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".vcf"),", ",Object(i.b)("inlineCode",{parentName:"td"},".bcf")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?vcf"),", ",Object(i.b)("inlineCode",{parentName:"td"},"?bcf"))))),Object(i.b)("p",null,"This function uses the same keyword arguments (and defaults) as the file importing functions it wraps; please see their respective docstrings in the Julia help console. (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"?genepop"),") for specific usage details. Use the alias function ",Object(i.b)("inlineCode",{parentName:"p"},"file_import")," interchangeably if you prefer the explicit name instead."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'read_from("cavernous_assfish.gen", digits = 3)\nfile_import("bos_tauros.csv", silent = true)\nread_from("juglans_nigra.vcf")\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"write_to"},Object(i.b)("inlineCode",{parentName:"h3"},"write_to")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"write_to(data::PopData; filename::String, kwargs...)\n")),Object(i.b)("p",null,"Writes ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," to a specified file type inferred from the extension of ",Object(i.b)("inlineCode",{parentName:"p"},"filename = ")," (case insensitive). Additional keyword\narguments ",Object(i.b)("inlineCode",{parentName:"p"},"kwargs...")," are specific to the intended file type, and are listed in the docstrings of the specific\nfile writer with the format ",Object(i.b)("inlineCode",{parentName:"p"},"?popdata2filetype"),". For example, to find the appropriate keywords for a conversion\nto Genepop format, call up the docstring to ",Object(i.b)("inlineCode",{parentName:"p"},"popdata2genepop")," with ",Object(i.b)("inlineCode",{parentName:"p"},"?popdata2genepop"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"File Format"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Extensions"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Docstring"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"genepop"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".gen"),", ",Object(i.b)("inlineCode",{parentName:"td"},".genepop")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2genepop"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"JLD2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".jld2")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2jld2"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"delimited"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},".csv"),", ",Object(i.b)("inlineCode",{parentName:"td"},".txt"),", ",Object(i.b)("inlineCode",{parentName:"td"},".tsv")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"?popdata2delimited"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'cats = nancycats();\nfewer_cats = omit_samples(cats, samples(cats)[1:10]);\nwrite_to(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "h")\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"popdata2jld2"},Object(i.b)("inlineCode",{parentName:"h3"},"popdata2jld2")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"popdata2jdl2(data::PopData; filename::String)\n")),Object(i.b)("p",null,"Write PopData to a ",Object(i.b)("inlineCode",{parentName:"p"},"JLD2")," file."))}o.isMDXComponent=!0}}]);