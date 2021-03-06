function wrap (execute) {
  try {

    return execute()
  } catch(e) {
    return null
  }
}

var errorExec = wrap(function () {
  throw new Error('Error');
});
var resultExec = wrap(function () {
  return "Result";
});
//console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"
