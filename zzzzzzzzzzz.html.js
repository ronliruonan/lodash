import arrayLikeKeys from './.internal/arrayLikeKeys.js';
function a() {
  const result = arrayLikeKeys(arguments);
  console.log(result);
  
  console.log(Object.keys(arguments));
}

a();