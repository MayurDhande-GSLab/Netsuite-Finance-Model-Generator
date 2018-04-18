var getAPIResponse = [];  // GET API response   
var ceModel = {};         // CE model under `.properties` root key for parent object

var largest=0;
var modelToRefer = {};
var result ={};
getAPIResponse.forEach(function(key){
if(Object.keys(key).length > largest)
{
modelToRefer = key;
largest = Object.keys(key).length;
}
});

Object.keys(ceModel).forEach(function(key){
result[key] = {};
result[key] = ceModel[key];
if( modelToRefer[key] && typeof modelToRefer[key] !== 'object'){
result[key]["x-samplevalue"] = modelToRefer[key];
}
else if (ceModel[key].type === 'boolean')
result[key]["x-samplevalue"] = true;
});

var output = {};
var fields = Object.keys(ceModel).sort();

fields.forEach(function(key){
output[key] = {};
output[key] = result[key];
});

JSON.stringify(output);
