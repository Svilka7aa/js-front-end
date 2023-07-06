function createObject(firstName, lastName, age) {
    let person = {
        firstName : firstName, 
        lastName : lastName, 
        age : age,
        printPerson: function() {
            console.log(`firstName: ${this.firstName}`)
            console.log(`lastName: ${this.lastName}`)
            console.log(`age: ${this.age}`)
        }
    };

    return person
}
const person = createObject("Peter", "Pan", "20")
person.printPerson()