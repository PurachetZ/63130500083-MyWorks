class Question{
    constructor(id, question = 'unknown'){
        this._id = id;
        if(question !=  undefined && question != null && question !=  '') this._question = question;
    }
    get id(){
        return this._id;
    }
    set question(question  = 'unknown'){
        if(question !=  undefined && question != null && question !=  '')
        this._question = question;
    }
}
let q1 = new Question(1, 'sss');
let q2 = new Question(2);
let q3 = new Question(3, null);
console.log(q1);
console.log(q2);
console.log(q3);
q1.question = 'a';
q2.question = 'a';
q3.question = 'a';
console.log(q1);
console.log(q2);
console.log(q3);