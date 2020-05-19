export default class DrawUI {
  constructor() {
    this.title = document.getElementById('title');
    this.question = document.getElementById('question');
    this.themesContainer = document.getElementById('themes');
    this.hiddenElements = document.querySelectorAll('.hidden');
  }

  init() {
    this.title.innerText = 'выбери тему викторины';

    if (this.question.innerText.length > 0) {
      this.question.innerText = '';
    }

    if (this.hiddenElements.length === 0) {
      this.hiddenElements = document.querySelectorAll('.hidden-init');
      this.hiddenElements.forEach((element) => element.classList.add('hidden'));
      this.themesContainer.classList.remove('hidden');
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
}
