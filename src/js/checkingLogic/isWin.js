export default function isWin() {
    const answerSymbols = document.querySelectorAll('.answer-symbol');
    
    answerSymbols.forEach(symbol => {
        console.log(symbol.innerHTML);
        if (symbol.innerHTML === '*') {
            console.log('false!')
            return false;
        }
    });
    console.log('true!');
    return true;
}