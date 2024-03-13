const student = require('./student')

const http = require("http");

const PORT = 3000;

const server = http.createServer();

function write () {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
}

server.listen(PORT,write());




