export default class Checker {
  constructor() {
    this.answerSymbols = null;
    this.hasUnsolvedSymbols = true;
  }

  isWin() {
    this.answerSymbols = Array.from(document.querySelectorAll('.answer-symbol'));
    this.hasUnsolvedSymbols = this.answerSymbols.some((element) => element.innerText === '*');
    if (!this.hasUnsolvedSymbols) {
      return true;
    }
    return false;
  }
}
