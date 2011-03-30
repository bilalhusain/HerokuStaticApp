var createRadio = function (o, txt) {
	o.innerHTML += "<input type='radio' name='option'>" + txt + "</input><br />";
}

var setQuestion = function () {
	var r = Math.floor(Math.random() * q.questions.length);
	var c = q.questions[r];

	document.getElementById("q").innerHTML = c.question;
	var o = document.getElementById("o");
	for (var i in c.options) {
		createRadio(o, c.options[i]);
	}
}

var q = {"questions":[
{
	"question": "What is Dalvik?",
	"options": ["A programming language", "A virtual machine"]
},
{
	"question": "What is the full form of REPL?",
	"options": ["It's not a full form", "Read Eval Print Loop"]
}
]};

