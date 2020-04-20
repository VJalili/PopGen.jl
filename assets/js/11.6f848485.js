(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{283:function(e,t,a){"use strict";a.r(t);var n=a(6),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"about"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[e._v("#")]),e._v(" About")]),e._v(" "),a("p",[e._v("PopGen.jl is an attempt to shift population genetics analyses away from the patchwork of available pop-gen packages present in the R and Python languages, and combine it with the speed, power, fun(?), and community of the Julia language. We hope to implement common analyses (heterozygosity, kinship, FST, Tajima's D, etc.) in "),a("em",[e._v("sane")]),e._v(", user friendly ways, with syntax used within the package being consistent with the rest of the Julia ecosystem.")]),e._v(" "),a("h2",{attrs:{id:"goal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),a("p",[e._v("To be a comprehensive package for population genetics analyses and visualization that's fast and user friendly. This project is developed with a particular mantra: "),a("em",[e._v("Sanity, Sensibility, Accessibility")]),e._v(".")]),e._v(" "),a("Tabs",{attrs:{card:"undefined",stretch:"undefined"}},[a("Tab",{attrs:{label:"Sanity"}},[a("p",[e._v("Functions are written in a way such that their use is sane and natural. When possible (or sensible), we use full words for input variables or other components of input/output. The first argument for all functions is the input data without keywords. Always. If a function has a very obvious name, then it likely it won't need keyword arguments.")])])],1),e._v(" "),a("Tabs",{attrs:{card:"undefined",stretch:"undefined"}},[a("Tab",{attrs:{label:"Sensibility"}},[a("p",[e._v("Functions need to be sensible, both in what they do and how they do it. This means they should include only the most relevant arguments and the most practical defaults. It also means the outputs need to be flexible enough to use with other Julia packages, such as "),a("code",[e._v("Query.jl")]),e._v(", or "),a("code",[e._v("Plots")]),e._v(".")])])],1),e._v(" "),a("Tabs",{attrs:{card:"undefined",stretch:"undefined"}},[a("Tab",{attrs:{label:"Accessibility"}},[a("p",[e._v("Documentation is everything! Julia is a comparatively young language and we "),a("em",[e._v("want")]),e._v(" you to be comfortable using PopGen.jl. That means investing "),a("strong",[e._v("a lot")]),e._v(" of time into writing thorough documentation intended for users across a wide spectrum of proficiency. We also recognize that you (the reader) might not be very familiar with Julia, so we've written "),a("RouterLink",{attrs:{to:"/getting_started/julia_primer.html"}},[e._v("a section")]),e._v(" on clarifying some Julia concepts/conventions that will make reading this documentation a whole lot clearer.")],1)])],1),e._v(" "),a("h2",{attrs:{id:"why-julia-and-not-python-or-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-julia-and-not-python-or-r"}},[e._v("#")]),e._v(" Why Julia (and not Python or R)?")]),e._v(" "),a("h4",{attrs:{id:"speed-and-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-and-syntax"}},[e._v("#")]),e._v(" Speed and syntax")]),e._v(" "),a("p",[e._v("The speed is comparable to C when coded correctly. Also, has Python-like syntax with "),a("strong",[e._v("optional")]),e._v(" tabs. We are also fans of 1-indexing, but that's more of a perk. Not convinced? Check out our "),a("RouterLink",{attrs:{to:"/getting_started/comparison.html"}},[e._v("comparison benchmarks")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"a-modern-language-for-modern-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-modern-language-for-modern-problems"}},[e._v("#")]),e._v(" A modern language for modern problems")]),e._v(" "),a("p",[e._v("Julia has native support for: parallelization, distributed computing, GPU processing, and pipes! It also has robust machine learning packages (maybe for future work).")]),e._v(" "),a("h4",{attrs:{id:"community-contribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-contribution"}},[e._v("#")]),e._v(" Community & contribution")]),e._v(" "),a("p",[e._v("Julia's internals attempt to solve what's known as the \"two language problem\". That is, languages that are easy to write in (e.g. Python, R, Ruby) are slow compared to languages that are more difficult to write in, which are fast (e.g. C, C++, Fortran). For languages that are easier to write in, many of the commonly used packages and functions in those languages are written in another, faster language under the hood for performance reasons. On the whole, that's not really a problem for end-users, because things work and they are easy to use. "),a("strong",[e._v("But")]),e._v(", it does become a problem when you want to investigate the code and implementation of a function. This means that, even as an R power-user, you are kind of helpless to investigate the implementation of something you are using in R if it's actually written in C++ under the hood. In a sense, it makes the publications of those methods less reproducible, because the users of it may be familiar with the language it's deployed in (like R), but not the language it's written in, (like C++). What if there are bugs?! What if the code implementation doesn't match the formulations in the publication?! "),a("strong",[e._v("Yikes!")])]),e._v(" "),a("p",[e._v("So, if we write everything in Julia, and you use everything in Julia, users can themselves diagnose these things if they so choose. This means users can contribute to the overall health and accuracy of this package. Yes, that means that we might be getting more Issues opened up ("),a("em",[e._v("ugh")]),e._v("), but a bug found is a lot better than a bug overlooked!")]),e._v(" "),a("p",[e._v("Like most Julia packages, PopGen.jl is written entirely in Julia, meaning the community using it need not learn another language if they wanted to contribute! Have you written a clever Julia function to calculate SAMOVA using "),a("code",[e._v("PopData")]),e._v("? Send us a pull request (please!)! Or "),a("a",{attrs:{href:"https://join.slack.com/t/popgenjl/shared_invite/zt-deam65n8-DuBs2z1oDtsbBuRplJW~Pg",target:"_blank",rel:"noopener noreferrer"}},[e._v("join the Slack group!"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"package-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-manager"}},[e._v("#")]),e._v(" Package manager")]),e._v(" "),a("p",[e._v("Which, let's be honest, is such a delight to use. "),a("RouterLink",{attrs:{to:"/getting_started/install.html"}},[e._v("Installing PopGen.jl")]),e._v(" should be simple, consistent, and effortless thanks to the brilliant built-in package manager in Julia.")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);