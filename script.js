let heading = document.getElementById('colourValue');
let buttons = document.getElementsByClassName('colourButton');

const setButtonColour = (button, red, green, blue) => {
    button.setAttribute('style',
        'background-color: rgb('+ red +','+ green +', '+ blue +');'
    );
}

const makeColourValue = () => {
    return Math.round(Math.random()*255);
}

const starGame = () => {
    let answerButton = Math.round(Math.random() * (buttons.length - 1));
    let answerMessage = document.getElementById('answer');
    answerMessage.innerHTML = "";
    
    for (let i = 0; i < buttons.length; i++) {
        let red = makeColourValue();
        let green = makeColourValue();
        let blue = makeColourValue();
        
        setButtonColour(buttons[i], red, green, blue);
    
        if(i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`;
        }
    
        buttons[i].addEventListener('click', function() {
            if(this === buttons[answerButton]) {
                answerMessage.innerHTML = "correct!";
              
            } else {
                answerMessage.innerHTML = "Wrong answer! Guess again!";
            }
        });
    }
}

starGame();

document.getElementById('resetButton').addEventListener('click', starGame);



