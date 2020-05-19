import QAGenerator from './Data/QuestionsGenerator';
import DrawUI from './UI/DrawUI';

const drawUI = new DrawUI();
drawUI.init();
const qaGenerator = new QAGenerator();

let theme = null;

const themesContainer = document.getElementById('themes');
let hiddenElements = document.querySelectorAll('.hidden');

themesContainer.addEventListener('click', (event) => {
  if (event.target.dataset.id) {
    theme = event.target.dataset.id;
    const question = qaGenerator.getQuestion(theme);

    if (hiddenElements.length > 0) {
      hiddenElements.forEach((element) => element.classList.remove('hidden'));
      hiddenElements = document.querySelectorAll('.hidden');
    }

    drawUI.drawQuestion(question);
    themesContainer.classList.add('hidden');
  }
});

const newGameButton = document.getElementById('new-game-button');

newGameButton.addEventListener('click', () => {
  theme = null;
  hiddenElements = document.querySelectorAll('.hidden-init');
  hiddenElements.forEach((element) => element.classList.add('hidden'));
  themesContainer.classList.remove('hidden');
  drawUI.init();
});
