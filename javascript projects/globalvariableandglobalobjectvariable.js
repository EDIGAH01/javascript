const declarativeVariable = 'd';
var objectVariable = 'o';

console.log(declarativeVariable);
console.log(objectVariable);

// globalThis is used to access the global variable in the HTML form of script.
console.log(globalThis.declarativeVariable);
console.log(globalThis.objectVariable);

/*
<script>
const declarativeVariable = 'd';
var objectVariable = 'o';
</script>
<script>
// All scripts share the same top-level scope:
console.log(declarativeVariable); // 'd'
console.log(objectVariable); // 'o'
// Not all declarations create properties of the global object:
console.log(globalThis.declarativeVariable); // undefined
console.log(globalThis.objectVariable); // 'o'
</script>
*/