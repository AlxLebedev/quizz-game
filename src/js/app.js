import QAGenerator from './Data/QuestionsGenerator';
import DrawUI from './UI/DrawUI';

const drawUI = new DrawUI();
drawUI.init();
const qaGenerator = new QAGenerator();

let theme = null;
let question = null;
let answer = null;

const themesContainer = document.getElementById('themes');

themesContainer.addEventListener('click', (event) => {
  if (event.target.dataset.id) {
    theme = event.target.dataset.id;
    question = qaGenerator.getQuestion(theme);
    answer = qaGenerator.getAnswer(theme, question);
    console.log(answer);

    drawUI.showHiddenElements();
    drawUI.drawQuestion(question);
    drawUI.drawHiddenAnswer(answer);
  }
});

const newGameButton = document.getElementById('new-game-button');

newGameButton.addEventListener('click', () => {
  theme = null;
  question = null;
  answer = null;
  drawUI.init();
});
