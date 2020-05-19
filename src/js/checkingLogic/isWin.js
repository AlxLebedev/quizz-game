export default function isWin() {
    const answerSymbols = document.querySelectorAll('.answer-symbol');
    
    answerSymbols.forEach(symbol => {
        if (symbol === '*') {
            console.log('false!')
            return false;
        }
    });
    console.log('true!');
    return true;
}