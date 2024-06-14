// Creating a plain object via an object literal
const obj = {
    first: 'Edigah', // property
    last: 'Clifford', // property
    getFullName() { // property (method)
        return this.first + ' '+ this.last;
    },
};
obj.last = 'Waweru';
console.log(obj.first);
console.log(obj.last);
console.log(obj.getFullName());