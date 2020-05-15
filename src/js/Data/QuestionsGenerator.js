export default class QAGenerator {
  constructor() {
    this.music = {
      "кто поет песню?": "певец",
      "кто слушает песню?": "слушатель",
      "кто ходит на концерты?": "фанат",
      "кто исполняет музыку?": "музыкант",
      "кто пишет тексты песен?": "поэт",
    };
    this.cinema = {
      "кто играет в кино?": "актер",
      "кто снимает на камеру?": "оператор",
      "кто пишет сценарий?": "сценарист",
      "кто ставит свет на площадке?": "светотехник",
      "кто накладывает грим?": "гример",
    };
    this.randomIndex = null;
    this.questionsArray = null;
  }

  getQuestion(theme) {
    let question = null;

    switch (theme) {
      case 'music':
        this.questionsArray = Object.keys(this.music);
        question = this.randomAnswer(this.questionsArray);
        break;
      case 'cinema':
        this.questionsArray = Object.keys(this.cinema);
        question = this.randomAnswer(this.questionsArray);
        break;
    }
    return question;
  }

  randomAnswer(answersArray) {
    this.randomIndex = Math.floor(Math.random() * answersArray.length);
    return answersArray[this.randomIndex];
  }
}
