export default class DrawUI {
  constructor() {
    this.questionField = document.getElementById('question-field');
  }

  drawQuestion(question) {
    this.questionField.innerText = question;
  }
}
