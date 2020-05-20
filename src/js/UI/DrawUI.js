export default class DrawUI {
  constructor() {
    this.title = document.getElementById('title');
    this.question = document.getElementById('question');
    this.themesContainer = document.getElementById('themes');
    this.hiddenElements = document.querySelectorAll('.hidden');
    this.answerSymbolsField = document.getElementById('answer-symbols');
    this.answerSymbols = null;
    this.inputField = null;
    this.newGameButton = document.getElementById('new-game-button');
  }

  init() {
    this.title.innerText = 'выбери тему викторины';

    if (this.question.innerText.length > 0) {
      this.question.innerText = '';
    }

    this.answerSymbols = document.querySelectorAll('.answer-symbol');
    if (this.answerSymbols.length > 0) {
      this.answerSymbolsField.innerHTML = '';
    }

    this.inputField = document.getElementById('input-field');
    if (this.inputField.value !== '') {
      this.inputField.value = '';
    }

    if (this.hiddenElements.length === 0) {
      this.hiddenElements = document.querySelectorAll('.hidden-init');
      this.hiddenElements.forEach((element) => element.classList.add('hidden'));
      this.themesContainer.classList.remove('hidden');
    }

    if (this.newGameButton.innerText !== 'Хочу другой вопрос...') {
      this.newGameButton.innerText = 'Хочу другой вопрос...';
      this.newGameButton.classList.remove('new-game');
      this.newGameButton.classList.add('another-question');
    }
  }

  showHiddenElements() {
    this.hiddenElements.forEach((element) => element.classList.remove('hidden'));
    this.hiddenElements = document.querySelectorAll('.hidden');
    this.themesContainer.classList.add('hidden');
  }

  drawQuestion(question) {
    this.title.innerText = 'ответь на вопрос';
    this.question.innerText = question;
  }

  drawHiddenAnswer(answer) {
    const answerLength = answer.length;
    for (let i = 0; i < answerLength; i += 1) {
      const answerElement = document.createElement('span');
      answerElement.classList.add('answer-symbol');
      answerElement.innerText = '*';
      this.answerSymbolsField.append(answerElement);
    }
  }

  redrawAnswer(answer, symbol) {
    this.answerSymbols = document.querySelectorAll('.answer-symbol');
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i] === symbol) {
        this.answerSymbols[i].innerText = symbol;
      }
    }
  }

  showCongratulations() {
    this.newGameButton.innerText = 'Поздравляем! Еще вопросик?';
    this.newGameButton.classList.remove('another-question');
    this.newGameButton.classList.add('new-game');
  }
}
