import Position from "../position";

export class Entity {
    constructor(position) {
        this.position = position;
    }

    getPosition(){
        return this.position;
    }

    // Method to set the age
    setAge(newAge) {
        this.age = newAge;
    }

    // Method to get information about the person
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}