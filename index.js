metadata={systemName:"weatherforecast",displayName:"weatherforecast Broker",description:"Sample broker for weatherforecast",configuration:{ServiceURL:{displayName:"weatherforecast Service URL",type:"string",value:"http://localhost:5003/weatherforecast"}}},ondescribe=async function({configuration:e}){postSchema({objects:{weatherDataEntries:{displayName:"weatherDataEntries",description:"Manages weatherDataEntries",properties:{date:{displayName:"Date",type:"string"},temperatureC:{displayName:"temperatureC",type:"number"},temperatureF:{displayName:"temperatureF",type:"number"},summary:{displayName:"summary",type:"string"}},methods:{getList:{displayName:"Get weatherDataEntries List",type:"list",outputs:["date","temperatureC","temperatureF","summary"]}}}}})},onexecute=async function({objectName:e,methodName:t,parameters:a,properties:r,configuration:s}){if("weatherDataEntries"!==e)throw new Error("The object "+e+" is not supported.");await async function(e,t,a,r){if("getList"!==e)throw new Error("The method "+e+" is not supported.");await function(e,t,a){return new Promise(((e,t)=>{var r=a.ServiceURL,s=new XMLHttpRequest;s.onreadystatechange=function(){try{if(4!==s.readyState)return;if(200!==s.status)throw new Error("Failed with status "+s.status);var a=JSON.parse(s.responseText);postResult(a.map((e=>({date:e.date,temperatureC:e.temperatureC,temperatureF:e.temperatureF,summary:e.summary})))),e()}catch(e){t(e)}},s.open("GET",r),s.send()}))}(0,0,r)}(t,0,0,s)};
//# sourceMappingURL=index.js.map
