const question = [
  {
    que: "which of the following is a markup language",
    a: "HTML",
    b: "css",
    c: "JavaScript",
    d: "Php",
    correct: "a",
  },
  {
    que: "what your was javascript launched?",
    a: "1996",
    b: "1955",
    c: "1964",
    d: "none o them",
    correct: "b",
  },
  {
    que: "what does css stand for ?",
    a: "HYper text markup language",
    b: "jason object sheet",
    c: "cascading style sheet",
    d: "Helicopter terminal Motorboats ",
    correct: "c",
  },
];
let index = 0;
let total = question.length;
let right = 0;
wrong = 0;
const quesbox = document.getElementById("quesbox");
const btn = document.querySelector(".btn");
const optionInput = document.querySelectorAll(".option");
const loadQuestion = () => {
    if( index == total){
        return endQuiz()
    }
  reset();
  const data = question[index];
  quesbox.innerText = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};
btn.addEventListener("click", () => {
  const data = question[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
});
const getAnswer = () => {
    let answer ;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  })
  return answer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <div style ="text-align:center" class = "a">
    <h3> Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>`
}

loadQuestion();
