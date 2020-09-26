import Test from './test.js';
class createTest {
    newTest = [];
    constructor(newTest) {
        this.newTest = newTest;
    }
    create() {
        let id = prompt("id test = ?");
        let test_name = prompt("Name of Test = ?");
        let time = prompt("Time = ?");
        let questions = prompt("Questions = ?");
        let createDay = prompt("Day Create = ?")
        let test = new Test(id, test_name, time, questions, createDay);
        this.newTest.push(test);
    }
    showAllTest() {
        for (let i = 0; i < this.newTest.length; i++)
            console.log(this.newTest[i]);
    }
}

export default createTest;