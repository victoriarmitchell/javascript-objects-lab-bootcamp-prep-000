var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object,{prop: value});
  return newObj;
}