var model = {}    // CE  model under `.properties` root key
var des = {};     // JSON of `<fieldName>: <description>` built from excel sheet

var result ={};
Object.keys(model).forEach(function(key){

result[key] = {};
result[key] = model[key];

if(des[key])
result[key].description = des[key];
});
JSON.stringify(result);
