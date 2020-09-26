import createTest from './create_test.js';
import questionInTest from './questionInTest.js'

let arrTest = [];
let arrQuestion = [];
let test = new createTest(arrTest);
let question = new questionInTest(arrQuestion);

while (true) {
    let input = prompt(`
        Nhập yêu cầu của bạn
        (Thêm câu hỏi - AQ/ Sửa câu hỏi - EQ/ In ra các câu hỏi - SQ/ Xóa câu hỏi - DQ)
        (Thêm Test - AT / In ra các test - ST)
        (Thoát - E)
    `);
    if (input == 'AQ')
        question.addQuestions();
    else if (input == 'EQ')
        question.editQuestions();
    else if (input == 'SQ')
        question.showQuestion();
    else if (input == 'DQ')
        question.deleteQuestions();
    else if (input == 'AT')
        test.create();
    else if (input == 'ST')
        test.showAllTest();
    else if (input == 'E')
        break;
    else {
        alert('Bạn nhập sai cú pháp');
    }



}
