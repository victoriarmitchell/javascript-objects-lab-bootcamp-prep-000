var recipes = {};

function updateObjectWithKeyAndValue(object, prop, value) {
  var newObj = Object.assign(object,{prop: value});
  return newObj;
}