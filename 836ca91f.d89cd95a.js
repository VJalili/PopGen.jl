(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return r})),i.d(n,"metadata",(function(){return s})),i.d(n,"rightToc",(function(){return o})),i.d(n,"default",(function(){return b}));var t=i(3),a=i(7),l=(i(0),i(143)),r={id:"popgensims_sibship",title:"Sibship.jl",sidebar_label:"Sibship.jl"},s={unversionedId:"api/PopGenSims/popgensims_sibship",id:"api/PopGenSims/popgensims_sibship",isDocsHomePage:!1,title:"Sibship.jl",description:"`julia",source:"@site/docs/api/PopGenSims/Sibship.md",slug:"/api/PopGenSims/popgensims_sibship",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_sibship",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/PopGenSims/Sibship.md",version:"current",lastUpdatedAt:1605726478,sidebar_label:"Sibship.jl",sidebar:"docs",previous:{title:"Samples.jl",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_samples"},next:{title:"Utils.jl",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_utils"}},o=[{value:"<code>parentoffspring</code>",id:"parentoffspring",children:[]},{value:"<code>fullsib</code>",id:"fullsib",children:[]},{value:"<code>halfsib</code>",id:"halfsib",children:[]},{value:"<code>unrelated</code>",id:"unrelated",children:[]},{value:"<code>simulate_sibship</code>",id:"simulate_sibship",children:[]}],p={rightToc:o};function b(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,i,{components:n,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"_cross(parent1::Vector{Vector{T}}, parent2::Vector{Vector{T}}) where T <: Signed\n")),Object(l.b)("p",null,"Simulate a mating cross between two parents, generating one offspring with the same\nploidy as ",Object(l.b)("inlineCode",{parentName:"p"},"parent1"),". This variant of ",Object(l.b)("inlineCode",{parentName:"p"},"cross")," is used internally for ",Object(l.b)("inlineCode",{parentName:"p"},"simulate_sibship"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"parentoffspring"},Object(l.b)("inlineCode",{parentName:"h3"},"parentoffspring")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"parentoffspring(data::PopData; n::Int, ploidy::Int)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"fullsib"},Object(l.b)("inlineCode",{parentName:"h3"},"fullsib")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"fullsib(data::PopData; n::Int, ploidy::Int)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"halfsib"},Object(l.b)("inlineCode",{parentName:"h3"},"halfsib")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"halfsib(data::PopData; n::Int, ploidy::Int)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unrelated"},Object(l.b)("inlineCode",{parentName:"h3"},"unrelated")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"unrelated(data::PopData; n::Int, ploidy::Int)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"simulate_sibship"},Object(l.b)("inlineCode",{parentName:"h3"},"simulate_sibship")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"simulate_sibship(data::PopData; n::Int, relationship::String, ploidy::Int)\n")),Object(l.b)("p",null,"Simulate mating crosses to generate ",Object(l.b)("inlineCode",{parentName:"p"},"n")," sample pairs (default: ",Object(l.b)("inlineCode",{parentName:"p"},"500"),") having the specified ",Object(l.b)("inlineCode",{parentName:"p"},"relationship"),",\nreturning a ",Object(l.b)("inlineCode",{parentName:"p"},"PopData")," object. The simulations will first generate parents of the given ",Object(l.b)("inlineCode",{parentName:"p"},"ploidy")," (default: ",Object(l.b)("inlineCode",{parentName:"p"},"2"),")\nby drawing alleles from a global allele pool derived from the given ",Object(l.b)("inlineCode",{parentName:"p"},"data")," (i.e. weighted by their frequencies)."),Object(l.b)("h4",{id:"relationship"},"Relationship"),Object(l.b)("p",null,"Simulated parents will be crossed to generate offspring depending on the ",Object(l.b)("inlineCode",{parentName:"p"},"relationship"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"fullsib"')," : 2 parents generate 2 full-sibling offspring, return 2 offspring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"halfsib')," : 3 parents generate 2 half-sibling offspring, returns 2 offspring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"unrelated"')," : returns 2 randomly generated individuals from the global allele pools"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"parent-offspring"')," : 2 parents generate 1 offspring, returns 1 offspring and 1 parent")),Object(l.b)("h4",{id:"identifying-pairs"},"Identifying pairs"),Object(l.b)("p",null,"The relationship between the newly generated samples can be identified by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sample ",Object(l.b)("inlineCode",{parentName:"li"},"name"),"s will specify their simulation number, relationship, and whether parent or offspring"),Object(l.b)("li",{parentName:"ul"},"Their ",Object(l.b)("inlineCode",{parentName:"li"},"population"),' name will be that of their relationship (e.g. "fullsib")')),Object(l.b)("h4",{id:"ploidy"},"Ploidy"),Object(l.b)("p",null,"If your data is not diploid, then change this value to the appropriate ploidy. While the simulations default to\ndiploid, if you wish to generate parents and offspring of a ploidy different than the source ",Object(l.b)("inlineCode",{parentName:"p"},"PopData")," you can\nchange this value. For example, if your ",Object(l.b)("inlineCode",{parentName:"p"},"PopData")," is diploid, but you wish to generate triploid or octoploid\nparents and offspring, you can. "),Object(l.b)("h4",{id:"odd-ploidy"},"Odd ploidy"),Object(l.b)("p",null,"If trying to create offspring with an odd ploidy (3,5, etc.), each parent has a 50% chance of\ncontributing (\xbd \xd7 ploidy) + 1 alleles for all loci to the offspring. In other words, if ploidy = 3,\nthere's a 50% chance parent_1 will give 2 alleles for every locus for that simulated cross."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),'julia> cats = @nancycats ;\n\njulia> fullsib_sims = simulate_sibship(cats, n = 50, relationship= "fullsib")\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 100\n  Loci: 9\n  Populations: 1\n  Longitude: absent\n  Latitude: absent\n\njulia> fullsib_sims.meta_df100\xd75 DataFrame\n\u2502 Row \u2502 name          \u2502 population \u2502 ploidy \u2502 longitude \u2502 latitude \u2502\n\u2502     \u2502 String        \u2502 String     \u2502 Int64  \u2502 Float32?  \u2502 Float32? \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 sim1_fs_off1  \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 2   \u2502 sim1_fs_off2  \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 3   \u2502 sim2_fs_off1  \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 4   \u2502 sim2_fs_off2  \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 5   \u2502 sim3_fs_off1  \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u22ee\n\u2502 95  \u2502 sim48_fs_off1 \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 96  \u2502 sim48_fs_off2 \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 97  \u2502 sim49_fs_off1 \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 98  \u2502 sim49_fs_off2 \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 99  \u2502 sim50_fs_off1 \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n\u2502 100 \u2502 sim50_fs_off2 \u2502 fullsib    \u2502 2      \u2502 missing   \u2502 missing  \u2502\n')))}b.isMDXComponent=!0},143:function(e,n,i){"use strict";i.d(n,"a",(function(){return c})),i.d(n,"b",(function(){return f}));var t=i(0),a=i.n(t);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},c=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=b(i),d=t,f=c["".concat(r,".").concat(d)]||c[d]||u[d]||l;return i?a.a.createElement(f,s(s({ref:n},p),{},{components:i})):a.a.createElement(f,s({ref:n},p))}));function f(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,r=new Array(l);r[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var p=2;p<l;p++)r[p]=i[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);