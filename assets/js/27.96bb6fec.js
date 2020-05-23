(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{377:function(e,t,r){"use strict";r.r(t);var n=r(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"teaclave-worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-worker"}},[e._v("#")]),e._v(" Teaclave Worker")]),e._v(" "),r("p",[e._v("The worker layer in Teaclave is a thin layer to manage executors and runtimes.\nThere are several executors and runtime for different usage scenarios.\nDevelopers can customize and register different executors in a worker.")]),e._v(" "),r("p",[e._v("This diagram demonstrates the relationship between the execution service,\nworker, executor and runtime.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    +-----------------------------------+\n    |        Execution Service          |\n    |  +-----------------------------+  |\n    |  |            Worker           |  |\n    |  |  +----------+  +---------+  |  |\n    |  |  | Executor |  | Runtime |  |  |\n    |  |  +----------+  +---------+  |  |\n    |  +-----------------------------+  |\n    +-----------------------------------+\n")])])]),r("p",[e._v("The execution service is a service instance to maintain communication with other\nservices through attested RPC, prepare data and related information for function\nexecution, execute a function with a "),r("em",[e._v("worker")]),e._v(" and report execution result. The\nworker will prepare a proper "),r("em",[e._v("executor")]),e._v(" and "),r("em",[e._v("runtime")]),e._v(" combination, and then\ndispatch the function to the executor, which will eventually run the function.\nAt the same time, the runtime will help to manage input and output data of\nfunctions and provide interfaces in executor.")]),e._v(" "),r("p",[e._v("Currently, there are several executors (e.g., mesapy, builtin) and runtime\n(e.g., default, raw-io) are implemented and registered in worker. Please refer\nto the docs of executor and runtime for more details.")])])}),[],!1,null,null,null);t.default=a.exports}}]);