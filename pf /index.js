
function createQuestionElement(questionText) {
    const questionElement = document.createElement('h1');
    questionElement.textContent = questionText;
    return questionElement;
  }
  
  function createOptionButton(optionText, handleClick) {
    const optionButton = document.createElement('button');
    optionButton.textContent = optionText;
    optionButton.addEventListener('click', handleClick);
    return optionButton;
  }
  

  function updateOptionClicks(question, option) {
    if (option === question.option) {
      question.optionClicks++;
    } else if (option === question.otherOption) {
      question.otherOptionClicks++;
    }
    return question;
  }
  
  
  function displayQuestion(question) {
    const questionElement = createQuestionElement(question.question);
    const optionButton = createOptionButton(
      question.option,
      () => {
        updateOptionClicks(question, question.option);
        alert(`Esta opción fue votada ${question.optionClicks} veces`);
      }
    );
    const otherOptionButton = createOptionButton(
      question.otherOption,
      () => {
        updateOptionClicks(question, question.otherOption);
        alert(`Esta opción fue votada ${question.otherOptionClicks} veces`);
      }
    );
    document.body.appendChild(questionElement);
    document.body.appendChild(optionButton);
    document.body.appendChild(otherOptionButton);
  }
  
  
  function createQuestion(questionText, optionText, otherOptionText) {
    return {
      question: questionText,
      option: optionText,
      otherOption: otherOptionText,
      optionClicks: 0,
      otherOptionClicks: 0,
    };
  }
  

  function addQuestion() {
    let agregarPregunta = prompt('ingresa una pregunta');
    if (agregarPregunta != "") {
      let agregarOpciones = prompt('agrega una opcion');
      if (agregarOpciones != "") {
        let agregarOtraOpcion = prompt('agrega otra opcion');
        if (agregarOtraOpcion != "") {
          return createQuestion(agregarPregunta, agregarOpciones, agregarOtraOpcion);
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
  
  
  function createQuiz(questions) {
    questions.forEach(displayQuestion);
  }
  
  
  let questions = [];
  
  for (let i = 0; i < 8; i++) {
    const newQuestion = addQuestion();
    if (newQuestion) {
      questions.push(newQuestion);
    }
  }
  
  createQuiz(questions);
  
  console.log(questions);
  