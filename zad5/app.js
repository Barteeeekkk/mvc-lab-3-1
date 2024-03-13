const student = require('./student')

const http = require("http");

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener (request, response){
    response.setHeader('Content-Type','text/html');
    response.write("<html>");
    response.write("<head>");
    response.write("<BIG> <B>About student:</B></BIG>");
    response.write("</head>");
    response.write("<body>");
    response.write("<div>");
    response.write(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</body>`);
    response.write("</div>");
    response.write("</body>");
    response.write("</html>");
    response.end();

}

server.listen(PORT);




