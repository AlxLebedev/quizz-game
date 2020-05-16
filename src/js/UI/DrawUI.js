export default class DrawUI {
  constructor() {
    this.question = document.getElementById('question');
  }

  drawQuestion(question) {
    this.question.innerText = question;
  }
}
