var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(recipes,{'key': 'value'});
  return newObj;
}