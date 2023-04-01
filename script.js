

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function (message, fw) {
    document.querySelector('.message').textContent = message;
    document.querySelector('.message').style.fontWeight = fw;
};

const bodyColor = function (color, color1, ts) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('body').style.color = color1;
    document.querySelector('.number').style.textShadow = ts;
}

const numberStyle = function (number, width, color, bgc) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = width;
    document.querySelector('.number').style.color = color;
    document.querySelector('.number').style.backgroundColor = bgc;

}

const scoreStyle = function (score, color, fw) {
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').style.color = color;
    document.querySelector('.score').style.fontWeight = fw;
}

const highScoreStyle = function (score, color, fw) {
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.highscore').style.color = color;
    document.querySelector('.highscore').style.fontWeight = fw;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('❌ Please Enter A Number!', '900');
        bodyColor('#d69e1d', 'black', '1px 5px 3px red');
    }


    // When player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!', '900');
        numberStyle(secretNumber, '15rem', 'green', 'yellow')
        document.querySelector('body').style.backgroundColor = '#60b347';

        //when current score is greater than previous hghscore
        if (score > highscore) {
            highscore = score;
            highScoreStyle(highscore, 'black', '900')
        }

    }
    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈😱 Higher Than My Number!' : '📉😑 Lower Than My Number!');
            bodyColor(guess > secretNumber ? '#a72525' : 'tomato');
            score--;
            scoreStyle(score, 'black', '900',);
            numberStyle('?', '15rem', ' #333', 'white');

        } else {
            displayMessage('😰  You lost the game! Play Again..', '900');
            numberStyle(secretNumber, '15rem', 'yellow', 'red')
            scoreStyle(0, 'white', '900',)
        }
    }

});



// play again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    highScoreStyle(highscore, 'black', '900')
     scoreStyle(0, 'black2', '900',)
    document.querySelector('.number').textContent = '?';

    numberStyle('?')
    document.querySelector('.guess').value = '';
    bodyColor('skyBlue', 'black');
    document.querySelector('.number').style.width = '15rem';
});


//css manipulation

document.querySelector('h1').setAttribute("style", "color:black; font-size:40px;text-align: center; position: absolute; width: 100%; top: 52%; left: 50%; transform: translate(-50%, -50%) ;text-shadow:1px 4px 3px black");

document.querySelector('.between').setAttribute("style", "font-size: 12px; position: absolute; top: 2rem; right: 2rem; color: black ;box-shadow: 2px 2px 3px 4px black; padding: 7px; background-color: white; border-radius:20%; color:green; font-weight:900");

bodyColor('skyBlue', 'black');

document.querySelector('.number').setAttribute("style", "background: #eee; color: #333;font-size: 6rem;width: 15rem;padding: 3rem 0rem;text-align: center;position: absolute;bottom: 0;left: 50%;transform: translate(-50%, 50%);border-radius:50%;box-shadow: 2px 2px 3px 4px black ")

document.querySelector('main').setAttribute("style", " height: 65vh; display: flex;align-items: center;justify-content: space-around;")

document.querySelector('header').setAttribute("style", "position: relative;height: 35vh;border-bottom: 7px solid #eee; border-radius: 50%")

document.querySelector('.left').setAttribute("style", " width: 52rem;display: flex;flex-direction: column;align-items: center; ")

document.querySelector('.right').setAttribute("style", "  width: 52rem;font-size: 2rem;")

document.querySelector('.guess ').setAttribute("style", "  background: white;border: 4px solid #eee;font-family: inherit;color: inherit;font-size: 2rem;padding: 2.5rem;width: 25rem;text-align: center;display: block;margin-bottom: 3rem; border-radius:50%;box-shadow: 2px 2px 3px 4px black ")

document.querySelector('.btn.check').setAttribute("style", " border: none;background-color: #eee;color: #222;font-size: 2rem;font-family: inherit;padding: 1rem 3rem;cursor: pointer; border-radius:10%; box-shadow: 2px 2px 3px 4px black;color:blue; font-weight:900")

document.querySelector('.btn.again').setAttribute("style", "  position: absolute;top: 2rem; left: 2rem; border: none;background-color: #eee;color: #222;font-size: 1.6rem;font-family: inherit;padding: .4rem 2rem;cursor: pointer; border-radius:10%; box-shadow: 2px 2px 3px 4px black; color:red; font-weight:900")

document.querySelector('.message ').setAttribute("style", "  margin-bottom: 8rem;height: 3rem;")

document.querySelector(' .label-score').setAttribute("style", " margin-bottom: 2rem; ")

document.querySelector('.label-score ').setAttribute("style", "  margin-bottom: 2rem;")

document.querySelector('.btn .check:hover').querySelector("style", "background-color: red; ")
