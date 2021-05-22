__NUXT_JSONP__("/posts/my-perfect-homeoffice-conference-call-and-podcasting-setup", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:[{post:{slug:"my-perfect-homeoffice-conference-call-and-podcasting-setup",description:"Overview of EMC Testing & Setup.",title:"Automotive Electromagnetic Compatibility",image:"\u002Fposts\u002Fmy-perfect-homeoffice-conference-call-and-podcasting-setup\u002Fsetup_overview.png",alt:n,publishedAt:"2021-01-10T00:00:00.000Z",tags:["Electronic","Testing","EMC"],tldr:n,tweet:"https:\u002F\u002Ftwitter.com\u002Fchemistdev",toc:[{id:o,depth:l,text:p},{id:q,depth:l,text:r},{id:s,depth:l,text:t},{id:u,depth:l,text:v},{id:w,depth:l,text:x},{id:y,depth:l,text:z}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"emc-testing"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#emc-testing",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"EMC Testing"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the Automotive, as in many other Industries, the developed systems and devices must not be interfered by surrounding electromagnetic fields. After an EMC test is conducted, a test report is written. Understand the content isn't an easy task.\nThere are several factors that we need to understand firstly. The combination of frequencies involved, dimensions of the components, the wiring harnesses and the assembly conditions can influence the test results."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To understand at a glance what EMC is, let's explain the three coupling mechanisms:"}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Radiated path - involving Radiated Emissions (RE) and Radiated Immunity (RI) - µV or dB"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Conducted path - involving Conducted Emissions (CE) and Conducted Immunity (CI) - µV or dB"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ESD path - involving a combination of both Radiated and Conducted paths- kV"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:o},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#practical-examples",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(RE) typical example of emission is a DC motor when its wiring harness are transmitting like an antenna."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(CE) typical example of immunity is when a system is affecting the reception on AM radio."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(ESD) typical example of electrostatic discharge is when a component is suffering permanent high voltages."}]},{type:a,value:c},{type:b,tag:m,props:{id:q},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#analysis-of-test-results",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The EMC is measured Anechoic Chambers, but the antennas are the most important items because are the methods to receive and emits signals.\nAnother key element is the coaxial cable to transfer the energy. Depending on which conformace is intended to be demostrated, before of all a test plan must be created. An EMC engineer should review the design, the parts, the wiring and the packaging space whithin the system under study."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The test plan will include:"}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Schematic and layout diagrams"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Wiring harness connectors"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Monitoring equipment"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Test frequencies and level of immunity"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Operating modes with severe conditions"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Production intent software for operating modes"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:s},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#how-real-are-emc-issues",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"EMC issues it would experience problems with the electronic control if the system is incompatible with the electromagnetic field environment."}]},{type:a,value:c},{type:b,tag:m,props:{id:u},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#software-consideration-in-emc",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Firmware\u002FSoftware is not directly affected for EMC problems, but since they are controlling the switch in µControllers the clock frequencies in combination with the software loops can cause abnormallity in the system. For example, the use of PWM signals to provide different functionalities can generate noise. This frequencies (noise) can be controlled by the software adjusting the signal."}]},{type:a,value:c},{type:b,tag:m,props:{id:w},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#electrostatic-discharge---esd",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Traditioinally the ESD check is introduced later than the EMC study, because we need to understand firstly the conducted and radiated characteristics. ESD can have emissions affecting other components that don't have enough immunity. The capacitance between surfaces can store a charge, creating a voltage difference with potential discharges. The semiconductor components operate on lower voltages and a damage can happend inf a couple of hundreds of volts come through. The ESD test is normally performed using an ESD gun, which applies high voltages to several wires and connections on the system."}]},{type:a,value:c},{type:b,tag:m,props:{id:y},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#the-value-of-emc",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Performing EMC tests is a very time consuming process. Analysis on early stages of the project, while layout changes can be implemented on PCBA, is crucial to determina effects of external fields on an electronic system. Passenger vehicles nowadays have around 4 km of wiring and cabling. Make sense to apply particular lessons learned from previous generations."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"'Arduino'",src:"https:\u002F\u002Fsource.unsplash.com\u002FdacmWVUmux4"},children:[]}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fmy-perfect-homeoffice-conference-call-and-podcasting-setup",extension:".md",createdAt:"2021-05-06T18:24:06.508Z",updatedAt:"2021-05-14T15:47:29.073Z",readingTime:{text:"3 min read",minutes:2.745,time:164700.00000000003,words:549},html:"\u003Ch1 id=\"emc-testing\"\u003EEMC Testing\u003C\u002Fh1\u003E\n\u003Cp\u003EIn the Automotive, as in many other Industries, the developed systems and devices must not be interfered by surrounding electromagnetic fields. After an EMC test is conducted, a test report is written. Understand the content isn&#39;t an easy task. \nThere are several factors that we need to understand firstly. The combination of frequencies involved, dimensions of the components, the wiring harnesses and the assembly conditions can influence the test results. \u003C\u002Fp\u003E\n\u003Cp\u003ETo understand at a glance what EMC is, let&#39;s explain the three coupling mechanisms:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003ERadiated path - involving Radiated Emissions (RE) and Radiated Immunity (RI) - µV or dB \u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EConducted path - involving Conducted Emissions (CE) and Conducted Immunity (CI) - µV or dB \u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EESD path - involving a combination of both Radiated and Conducted paths- kV\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"practical-examples\"\u003EPractical examples\u003C\u002Fh2\u003E\n\u003Cp\u003E(RE) typical example of emission is a DC motor when its wiring harness are transmitting like an antenna.\u003C\u002Fp\u003E\n\u003Cp\u003E(CE) typical example of immunity is when a system is affecting the reception on AM radio.\u003C\u002Fp\u003E\n\u003Cp\u003E(ESD) typical example of electrostatic discharge is when a component is suffering permanent high voltages.\u003C\u002Fp\u003E\n\u003Ch2 id=\"analysis-of-test-results\"\u003EAnalysis of Test Results\u003C\u002Fh2\u003E\n\u003Cp\u003EThe EMC is measured Anechoic Chambers, but the antennas are the most important items because are the methods to receive and emits signals.\nAnother key element is the coaxial cable to transfer the energy. Depending on which conformace is intended to be demostrated, before of all a test plan must be created. An EMC engineer should review the design, the parts, the wiring and the packaging space whithin the system under study.\u003C\u002Fp\u003E\n\u003Cp\u003EThe test plan will include:   \u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ESchematic and layout diagrams\u003C\u002Fli\u003E\n\u003Cli\u003EWiring harness connectors\u003C\u002Fli\u003E\n\u003Cli\u003EMonitoring equipment \u003C\u002Fli\u003E\n\u003Cli\u003ETest frequencies and level of immunity\u003C\u002Fli\u003E\n\u003Cli\u003EOperating modes with severe conditions\u003C\u002Fli\u003E\n\u003Cli\u003EProduction intent software for operating modes\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"how-real-are-emc-issues\"\u003EHow real are EMC issues?\u003C\u002Fh2\u003E\n\u003Cp\u003EEMC issues it would experience problems with the electronic control if the system is incompatible with the electromagnetic field environment. \u003C\u002Fp\u003E\n\u003Ch2 id=\"software-consideration-in-emc\"\u003ESoftware consideration in EMC\u003C\u002Fh2\u003E\n\u003Cp\u003EThe Firmware\u002FSoftware is not directly affected for EMC problems, but since they are controlling the switch in µControllers the clock frequencies in combination with the software loops can cause abnormallity in the system. For example, the use of PWM signals to provide different functionalities can generate noise. This frequencies (noise) can be controlled by the software adjusting the signal.  \u003C\u002Fp\u003E\n\u003Ch2 id=\"electrostatic-discharge---esd\"\u003EElectrostatic Discharge - ESD\u003C\u002Fh2\u003E\n\u003Cp\u003ETraditioinally the ESD check is introduced later than the EMC study, because we need to understand firstly the conducted and radiated characteristics. ESD can have emissions affecting other components that don&#39;t have enough immunity. The capacitance between surfaces can store a charge, creating a voltage difference with potential discharges. The semiconductor components operate on lower voltages and a damage can happend inf a couple of hundreds of volts come through. The ESD test is normally performed using an ESD gun, which applies high voltages to several wires and connections on the system. \u003C\u002Fp\u003E\n\u003Ch2 id=\"the-value-of-emc\"\u003EThe Value of EMC\u003C\u002Fh2\u003E\n\u003Cp\u003EPerforming EMC tests is a very time consuming process. Analysis on early stages of the project, while layout changes can be implemented on PCBA, is crucial to determina effects of external fields on an electronic system. Passenger vehicles nowadays have around 4 km of wiring and cabling. Make sense to apply particular lessons learned from previous generations.\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fsource.unsplash.com\u002FdacmWVUmux4\" alt=\"&#39;Arduino&#39;\"\u003E\u003C\u002Fp\u003E\n"}}],fetch:[],mutations:void 0}}("text","element","\n","p","li","a","true",-1,"span","icon","icon-link",2,"h2","EMC Testing.","practical-examples","Practical examples","analysis-of-test-results","Analysis of Test Results","how-real-are-emc-issues","How real are EMC issues?","software-consideration-in-emc","Software consideration in EMC","electrostatic-discharge---esd","Electrostatic Discharge - ESD","the-value-of-emc","The Value of EMC","ul")));