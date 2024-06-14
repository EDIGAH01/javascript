class Person {
    constructor(name){
        this.name = name;
    }
    describe(){
        return `Person named ${this.name}`;
    }
    static logNames(persons){
        for(const person of persons){
            console.log(person.name);
        }
    }
}
class Employee extends Person {
    constructor(name, title){
        super(name);

        this.title = title;
    }
    describe(){
        return super.describe() + ` (${this.title})`;
    }
}

const edigah = new Employee('Edigah', 'PRESIDENT');
console.log(edigah.describe());