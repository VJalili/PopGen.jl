(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(138)),o=a(142),s=a(143),l={id:"comparison",title:"Comparison",sidebar_label:"Comparison"},c={unversionedId:"getting_started/comparison",id:"getting_started/comparison",isDocsHomePage:!1,title:"Comparison",description:"There's a reason we started investing so many hours and so many new grey hairs into writing PopGen.jl when there was an existing ecosystem in R to perform these same tasks. Like we explain in the home page of these docs, we want a platform that is:",source:"@site/docs/getting_started/comparison.md",slug:"/getting_started/comparison",permalink:"/PopGen.jl/docs/getting_started/comparison",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/comparison.md",version:"current",lastUpdatedAt:1603223469,sidebar_label:"Comparison",sidebar:"docs",previous:{title:"A quick Julia primer",permalink:"/PopGen.jl/docs/getting_started/julia_primer"},next:{title:"PopObj and PopData types",permalink:"/PopGen.jl/docs/getting_started/types"}},b=[{value:"Benchmarks",id:"benchmarks",children:[{value:"Reading in data",id:"reading-in-data",children:[]},{value:"<code>PopData</code> vs <code>genind</code> size",id:"popdata-vs-genind-size",children:[]},{value:"Summary statistics",id:"summary-statistics",children:[]},{value:"Chi-squared test for HWE",id:"chi-squared-test-for-hwe",children:[]}]}],m={rightToc:b};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There's a reason we started investing so many hours and so many new grey hairs into writing PopGen.jl when there was an existing ecosystem in R to perform these same tasks. Like we explain in the home page of these docs, we want a platform that is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"fast(er)"),Object(i.b)("li",{parentName:"ol"},"written in a single language"),Object(i.b)("li",{parentName:"ol"},"easy to use")),Object(i.b)("p",null,"So, we'd like to prove that Julia and PopGen.jl actually achieves that by showing a few benchmarks comparing PopGen.jl to ",Object(i.b)("inlineCode",{parentName:"p"},"adegenet")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pegas"),", which along with ",Object(i.b)("inlineCode",{parentName:"p"},"ape")," are arguably the most commonly used and robust population genetic packages available. It's worth mentioning that we ourselves use and have published work incorporating these packages, and are incredibly grateful for the work invested in those packages. We appreciate those folks and have tremendous respect and envy for the work they continue to do! Here are links to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thibautjombart/adegenet"}),"adegenet"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://academic.oup.com/bioinformatics/article/26/3/419/215731/"}),"pegas"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cran.r-project.org/package=ape"}),"ape"),".  "),Object(i.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(i.b)("p",null,"To make this a practical comparison, we're going to use the ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," data because it is considerably larger (212 samples x 2213 loci) than ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats"),' (237 x 9) and a bit more of a "stress test".  All benchmarks in R are performed using the ',Object(i.b)("inlineCode",{parentName:"p"},"microbenchmark")," package, and  ",Object(i.b)("inlineCode",{parentName:"p"},"BenchmarkTools")," are used for Julia."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"load Julia packages",value:"j"},{label:"load R packages",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"using BenchmarkTools, PopGen\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"library(adegenet)\nlibrary(pegas)\nlibrary(hierfstat)\nlibrary(microbenchmark)\n")))),Object(i.b)("p",null,"As a note, the reported benchmarks are being performed on a 64-bit Manjaro Linux system on a nothing-special Lenovo Thinkbook 14S  with 8gigs of RAM and a 8th gen Intel i5 mobile processor. ",Object(i.b)("strong",{parentName:"p"},"Note:")," all of the Julia benchmarks, unless explicitly stated, are performed single-threaded (i.e. not parallel, distributed, or GPU)."),Object(i.b)("h3",{id:"reading-in-data"},"Reading in data"),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," is shamelessly provided in PopGen.jl, we will just load it with ",Object(i.b)("inlineCode",{parentName:"p"},"genepop()"),".  If you would like to try this yourself in R, find the ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks.gen")," file in the package repository under ",Object(i.b)("inlineCode",{parentName:"p"},"/data/source/gulfsharks.gen"),". Since the file importer now uses CSV.jl to read files, there is one step of the genepop parser that is multithreaded. However, the majority of the data parsing (formatting the raw data into a correct PopData structure) occurs using a single thread. This R benchmark will take a few minutes. Consider making some tea while you wait."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'@benchmark sharks = genepop("data/source/gulfsharks.gen", silent = true)\nBenchmarkTools.Trial:\n  memory estimate:  330.58 MiB\n  allocs estimate:  6905285\n  --------------\n  minimum time:     806.202 ms (5.91% GC)\n  median time:      884.887 ms (5.61% GC)\n  mean time:        910.722 ms (5.41% GC)\n  maximum time:     1.071 s (4.82% GC)\n  --------------\n  samples:          6\n  evals/sample:     1\n'))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'> microbenchmark(read.genepop(file = "/home/pdimens/gulfsharks.gen", ncode = 3L, quiet = TRUE))\nUnit: seconds\n read.genepop(file = "/home/pdimens/gulfsharks.gen", ncode = 3L, quiet = FALSE)\n      min       lq     mean   median       uq      max neval\n 5.670637 6.218719 6.745065 6.387936 7.019667 9.173005   100\nmicrobenchmark)\n')))),Object(i.b)("p",null,Object(i.b)("img",{alt:"import plot",src:a(216).default})),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ",Object(i.b)("inlineCode",{parentName:"p"},"910ms")," versus adegenet's ",Object(i.b)("inlineCode",{parentName:"p"},"6.745s")," , so ~7.4x faster."),Object(i.b)("h3",{id:"popdata-vs-genind-size"},Object(i.b)("inlineCode",{parentName:"h3"},"PopData")," vs ",Object(i.b)("inlineCode",{parentName:"h3"},"genind")," size"),Object(i.b)("p",null,'It was pretty tricky to come up with a sensible/efficient/convenient data structure for PopGen.jl, and while the two-DataFrames design might not seem like it took a lot of effort, we ultimately decided that the column-major style and available tools, combined with careful genotype Typing was a decent "middle-ground" of ease-of-use vs performance.'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Anyway"),", it's important to understand how much space your data will take up in memory (your RAM) when you load it in, especially since data's only getting bigger! Keep in mind that ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," in PopGen.jl also provides lat/long data, which ",Object(i.b)("em",{parentName:"p"},"should")," inflate the size of the object somewhat compared to the ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which we won't add any location data to."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> Base.summarysize(sharks)\n3527765\n#bytes\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> object.size(gen)\n5331536 bytes\n")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"data structure plot",src:a(217).default})),Object(i.b)("p",null,"The original file is ",Object(i.b)("inlineCode",{parentName:"p"},"3.2mb")," (the horizontal line), and our ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object takes up ~",Object(i.b)("inlineCode",{parentName:"p"},"3.5mb")," in memory (300kb larger than the source file) versus the ~",Object(i.b)("inlineCode",{parentName:"p"},"5.3mb")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which is ~1.5x larger than the source file. That's quite a big difference!"),Object(i.b)("h3",{id:"summary-statistics"},"Summary statistics"),Object(i.b)("p",null,"The obvious hallmark of population genetics is heterozygosity values and F-statistics. Here we'll compare the basic summary statistics that can be produced using ",Object(i.b)("inlineCode",{parentName:"p"},"hierfstat")," and ",Object(i.b)("inlineCode",{parentName:"p"},"PopGen.jl"),"."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'julia> @benchmark summary(sharks, by = "global")\nBenchmarkTools.Trial:\n  memory estimate:  88.42 MiB\n  allocs estimate:  1307128\n  --------------\n  minimum time:     151.963 ms (0.00% GC)\n  median time:      171.484 ms (7.60% GC)\n  mean time:        172.456 ms (6.08% GC)\n  maximum time:     186.606 ms (7.04% GC)\n  --------------\n  samples:          29\n  evals/sample:     1\n'))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> microbenchmark(basic.stats(gen))\nUnit: seconds\n             expr      min       lq     mean\n basic.stats(gen) 4.276996 4.425934 4.618796\n   median       uq      max neval\n 4.609901 4.706666 5.292831   100\n")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"summary statistics plot",src:a(218).default})),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ~",Object(i.b)("inlineCode",{parentName:"p"},"171ms")," versus hierfstat's ",Object(i.b)("inlineCode",{parentName:"p"},"4.6s"),", which is ~",Object(i.b)("strong",{parentName:"p"},"27x")," faster on these data. However, when testing on a data that was 401 samples x 5331 loci (not shown), PopGen.jl performed 36.6x faster. This gap seems to increase the larger the data is, but we have not tested the upper limits of this."),Object(i.b)("h3",{id:"chi-squared-test-for-hwe"},"Chi-squared test for HWE"),Object(i.b)("p",null,"This is a classic population genetics test and a relatively simple one. The R benchmark will take a while again, so if you're following along, this would be a good time to reconnect with an old friend."),Object(i.b)(o.a,{block:!0,defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> @benchmark hwe_test(sharks)\nBenchmarkTools.Trial:\n  memory estimate:  46.22 MiB\n  allocs estimate:  1050525\n  --------------\n  minimum time:     145.476 ms (0.00% GC)\n  median time:      179.146 ms (4.35% GC)\n  mean time:        176.142 ms (3.56% GC)\n  maximum time:     204.813 ms (0.00% GC)\n  --------------\n  samples:          29\n  evals/sample:     1\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> microbenchmark(hw.test(gen, B = 0))\nUnit: seconds\n                expr      min       lq     mean   median       uq      max neval\n hw.test(gen, B = 0) 5.100298 5.564807 6.265948 5.878842 6.917006 8.815179   100\n")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"chi squared plot",src:a(219).default})),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ~",Object(i.b)("inlineCode",{parentName:"p"},"176ms")," versus adegenet's ",Object(i.b)("inlineCode",{parentName:"p"},"6.3s"),", so ~",Object(i.b)("strong",{parentName:"p"},"35.8x")," faster on these data(!)"))}p.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(a),u=n,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return a?r.a.createElement(d,s(s({ref:t},c),{},{components:a})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},139:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},140:function(e,t,a){"use strict";var n=a(0),r=a(141);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(140),o=a(139),s=a(46),l=a.n(s),c=37,b=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,m=e.values,p=e.groupId,u=e.className,d=Object(i.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,g=Object(n.useState)(s),j=g[0],O=g[1],y=Object(n.useState)(!1),v=y[0],w=y[1];if(null!=p){var k=h[p];null!=k&&k!==j&&m.some((function(e){return e.value===k}))&&O(k)}var N=function(e){O(e),null!=p&&f(p,e)},C=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",x)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},m.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},216:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/speedplot-f95e2881ff392857d2f58cb8b0320133.png"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/objectplot-99f26155e22815cba77a8e4de73f3e15.png"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sumstatplot-2836714c968c346b290ddb390cc13ee2.png"},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chisqplot-5999cddde9d8f974c88eb12d1909c1c9.png"}}]);