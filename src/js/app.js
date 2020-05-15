import QAGenerator from './Data/QuestionsGenerator';
import DrawUI from './UI/DrawUI';

const qaGenerator = new QAGenerator();
const drawUI = new DrawUI();

let theme = null;

const themesContainer = document.getElementById('themes')

themesContainer.addEventListener('click', (event) => {
  if (event.target.dataset.id) {
    theme = event.target.dataset.id;
    let question = qaGenerator.getQuestion(theme);
    drawUI.drawQuestion(question);
  }
});
