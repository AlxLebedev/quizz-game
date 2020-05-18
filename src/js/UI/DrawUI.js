export default class DrawUI {
  constructor() {
    this.title = document.getElementById('title');
    this.question = document.getElementById('question');
  }

  init() {
    this.title.innerText = 'выбери тему викторины';
  }

  drawQuestion(question) {
    this.title.innerText = 'ответь на вопрос';
    this.question.innerText = question;
  }
}
