const FULLNAME = "Bartosz Wnorowski";
const STUDENT_ID = "48687";
const FULLNAME1 = "Kacper Nowak";
const STUDENT_ID1 = "1112222";
const FULLNAME2 = "Maja Kowalewska";
const STUDENT_ID2 = "222333";
const FULLNAME3 = "Michal Wisniewski";
const STUDENT_ID3 = "333444";

function getStudentFullName (id){
    if(id == 0) return FULLNAME;
    if(id == 1) return FULLNAME1;
    if(id == 2) return FULLNAME2;
    else return FULLNAME3
}

function getStudentId(id){
    if(id == 0) return STUDENT_ID;
    if(id == 1) return STUDENT_ID1;
    if(id == 2) return STUDENT_ID2;
    else return STUDENT_ID3;
}

module.exports = {
    getStudentFullName,
    getStudentId
};