class Question {
    constructor(question, option, otherOption) {
      this.question = question;
      this.option = option;
      this.otherOption = otherOption;
      this.optionClicks = 0; 
      this.otherOptionClicks = 0; 
    }
  }
  
  class Quiz {
    constructor(questions) {
      this.questions = questions;
    }
  
    askQuestions() {
      this.questions.forEach((question, indice) => {
        
        const questionElement = document.createElement('h1');
        questionElement.textContent = question.question;
  
        const optionButton = document.createElement('button');
        optionButton.textContent = question.option;
        optionButton.addEventListener('click', () => {
          question.optionClicks++;
          alert(`esta opcion fue votada ${question.optionClicks} veces`);
        });
  
        const otherOptionButton = document.createElement('button');
        otherOptionButton.textContent = question.otherOption;
        otherOptionButton.addEventListener('click', () => {
          question.otherOptionClicks++;
          alert(`esta opcion fue votada ${question.otherOptionClicks} veces`);
        });
  
        
        document.body.appendChild(questionElement);
        document.body.appendChild(optionButton);
        document.body.appendChild(otherOptionButton);
      });
    }
  }
  
  let questions = [];
  
  function addQuestion() {
    let agregarPregunta = prompt('ingresa una pregunta');
    if (agregarPregunta != "") {
      let agregarOpciones = prompt('agrega una opcion');
      if (agregarOpciones != "") {
        let agregarOtraOpcion = prompt('agrega otra opcion');
        if (agregarOtraOpcion != "") {
          questions.push(new Question(agregarPregunta, agregarOpciones, agregarOtraOpcion));
        } else {
          alert('Por favor, ingresa otra opción.');
        }
      } else {
        alert('Por favor, ingresa una opción.');
      }
    } else {
      alert('Por favor, ingresa una pregunta.');
    }
  }
  
  for (let i = 0; i < 8; i++) {
    addQuestion();
  }
  
  let quiz = new Quiz(questions);
  quiz.askQuestions();
  
  console.log(questions);
  